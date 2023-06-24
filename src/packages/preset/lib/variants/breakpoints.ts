// breakpoints
// zero: 0
// xs: 375
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// mac: 1440
// max: 1920

import type { Breakpoints, PluginProps } from "..";

/**
 * Generated all possible combination of breakpoint variants
 *
 * `x:` - minimum width breakpoint
 *
 * `zero-*:` - where **\*** is any breakpoint key except *zero*
 *
 * `x-y:` - where **x** and **y** is breakpoint keys, x is not *zero*
 */
export default function ({ theme, addVariant }: PluginProps): void {
  // ascending order of breakpoint values
  const breakpoints = Object.entries(
    (theme("breakpoints") || {}) as Breakpoints
  )?.sort((a, b) => a?.[1] - b?.[1]);
  breakpoints?.forEach(([key, value], index) => {
    if (key === "zero") {
      // generate zero-*: breakpoint variants
      // For example,
      // let's take one breakpoint, lg: 1024
      // let's take another breakpoitn, md: 768
      // then zero-lg: variant applies on the 0-1023 px viewport
      // then zero-md: variant applies on the 0-767 px viewport
      // lg-zero, md-zero doesn't make sense.
      breakpoints.forEach(([_key, _value]) => {
        _key !== "zero" &&
          addVariant(
            `zero-${_key}`,
            `@media (min-width: 0px) and (max-width: ${_value - 1}px)`
          );
      });
    } else {
      // generates minimum width breakpoint variants
      addVariant(key, `@media (min-width: ${value}px)`);
      // generate x-y: breakpoint variants where x is not zero
      // For example,
      // let's take one breakpoint, lg: 1024
      // let's take another breakpoitn, md: 768
      // then md-lg: variant applies on the 768-1023 px viewport
      // lg-md doesn't make any sense
      breakpoints.forEach(([_key, _value], _index) => {
        _index > index &&
          addVariant(
            `${key}-${_key}`,
            `@media (min-width: ${value}px) and (max-width: ${_value - 1}px)`
          );
      });
    }
  });
}
