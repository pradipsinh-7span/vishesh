/* LATER THE CLASS GENEREATES, HIGHER THE SPECIFICITY IT HAS */

// breakpoints
// zero: 0
// xs: 375
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// mac: 1440
// max: 1920

import { isObject } from "../../utils";

import type { Breakpoints } from "./types";
import type { PluginProps } from "../..";

/**
 * Generates all possible combination of breakpoint variants
 *
 * `x:` - minimum width breakpoint, where **x** is any breakpoint key expect *zero*
 *
 * `rx:` - maximum width breakpoint, where **x** is any breakpoint key except *zero*
 *
 * `ox:` - only width breakpoint, where **x** is any breakpoint key except *zero*
 *
 * `x-y:` - where **x** and **y** is breakpoint keys, where **x** and **y** is not *zero*
 */
export default function ({ theme, addVariant }: PluginProps): void {
  // unsorted breakpoints
  const unsortedBreakpoints: Breakpoints = theme("breakpoints");
  if (!isObject(unsortedBreakpoints)) {
    return;
  }
  // make sure zero has 0
  unsortedBreakpoints["zero"] = 0;

  // ascending order of breakpoint values
  const breakpoints = Object.entries(unsortedBreakpoints)
    .map(([key, value]): [string, number] => [key, Math.max(0, value)])
    .sort((a, b) => a?.[1] - b?.[1]);

  /** CSS Specificity order
   * x:         - min-width breakpoints
   * rx:        - max-width breakpoints
   * x-y:       - range breakpoints
   * ox:        - single breakpoints
   */

  // generates minimum width breakpoint variants
  // x:
  breakpoints.forEach(
    ([key, value]) =>
      key !== "zero" && addVariant(key, `@media (min-width: ${value}px)`)
  );

  // generate rx: breakpoint variants
  // For example,
  // let's take one breakpoint, lg: 1024
  // let's take another breakpoitn, md: 768
  // then rlg: variant applies on the 0-1023 px viewport
  // then rmd: variant applies on the 0-767 px viewport
  // lg-zero, md-zero doesn't make sense.
  breakpoints.forEach(
    ([key, value]) =>
      key !== "zero" &&
      addVariant(
        `r${key}`,
        `@media
      (max-width: ${Math.max(0, value - 1)}px)`
      )
  );

  /* range breakpoints */
  // generate x-y: breakpoint variants where x is not zero
  // For example,
  // let's take one breakpoint, lg: 1024
  // let's take another breakpoitn, md: 768
  // then md-lg: variant applies on the 768-1023 px viewport
  // lg-md doesn't make any sense
  breakpoints.forEach(([key, value], index) => {
    if (key !== "zero") {
      breakpoints.forEach(([_key, _value], _index) => {
        if (_index > index) {
          addVariant(
            `${key}-${_key}`,
            `@media (min-width: ${value}px) and (max-width: ${Math.max(
              0,
              _value - 1
            )}px)`
          );
        }
      });
    }
  });

  /* only breakpoints */
  // For example,
  // ozero: not generated as first breakpoint by value
  // oxs: 375-639 px viewport
  // osm: 640-767 px viewport
  // ...
  // omac: 1440-1919 px viewport
  // omaxw: not generated as last breakpoint by value
  breakpoints.forEach(([key, value], index) => {
    if (key !== "zero") {
      breakpoints.forEach(([_key, _value], _index) => {
        if (index + 1 === _index) {
          addVariant(
            `o${key}`,
            `@media (min-width: ${value}px) and (max-width: ${Math.max(
              0,
              _value - 1
            )}px)`
          );
        }
      });
    }
  });
}
