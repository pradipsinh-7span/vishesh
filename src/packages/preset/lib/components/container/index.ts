/* LATER THE CLASS GENEREATES, HIGHER THE SPECIFICITY IT HAS */

// breakpoints
// zero: 0
// xs: 375
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// mac: 1440
// maxw: 1920

import { isObject } from "../../utils";

import type {
  BaseProperties,
  MediaQueryProperties,
  BothSpacing,
  ContainerMode,
  InnerPadding,
} from "./types";
import type { PluginProps, Spacing } from "../..";
import type { Breakpoints } from "../../variants/breakpoints/types";

// container
// center: boolean
// spacing: key:value pair that mapped to breakpoints
// - xs: 16
// - sm: 28
// - md: 40
// - lg: 64
// - xl: 80
// - mac: 128
// - maxw: 240
// innerPadding: inner padding for fixed container
// - zero: 16
// - xs: 0
// - sm: 0
// - md: 0
// - lg: 0
// - xl: 0
// - mac: 0
// - maxw: 0

/**
 * Generates `container-*` utitiles
 */
export default function ({ theme, addComponents }: PluginProps): void {
  // breakpoints
  const breakpoints: Breakpoints = theme("breakpoints");
  if (!isObject(breakpoints)) {
    return;
  }
  // make sure zero has 0
  breakpoints["zero"] = 0;
  // sorted breakponints keys
  const sortedBreakpointKeys = Object.entries(breakpoints)
    .sort((a, b) => a[1] - b[1])
    .map(([key, _]) => key);

  // container mode
  const MODE: ContainerMode = theme("container.mode");

  // unsorted spacing
  const unsortedSpacing: Spacing | BothSpacing = theme("container.spacing");
  if (!isObject(unsortedSpacing)) {
    return;
  }

  // make sure zero exists
  if (MODE === "fixed") {
    // only using zero as key
    (unsortedSpacing as Spacing)["zero"] = 0;
  } else if (MODE === "fluid") {
    // if provided than take it
    // if not make sure zero exists
    if (typeof (unsortedSpacing as Spacing).zero === "number") {
      (unsortedSpacing as Spacing).zero = Math.max(
        0,
        (unsortedSpacing as Spacing)["zero"]
      );
    } else {
      (unsortedSpacing as Spacing)["zero"] = 0;
    }
  } else if (MODE === "both") {
    /* type: both */
    // for common set zero to 0
    if (typeof (unsortedSpacing as Spacing).zero === "number") {
      (unsortedSpacing as Spacing).zero = Math.max(
        0,
        (unsortedSpacing as Spacing)["zero"]
      );
    } else {
      (unsortedSpacing as Spacing)["zero"] = 0;
    }

    // fixed
    if (isObject((unsortedSpacing as BothSpacing).fixed)) {
      // only using zero as key
      (unsortedSpacing as BothSpacing).fixed!["zero"] = 0;
    }
    // fluid
    if (isObject((unsortedSpacing as BothSpacing).fluid)) {
      // if provided than take it
      // if not make sure zero exists
      if (typeof (unsortedSpacing as BothSpacing).fluid!.zero === "number") {
        (unsortedSpacing as BothSpacing).fluid!.zero = Math.max(
          0,
          (unsortedSpacing as BothSpacing).fluid!.zero
        );
      } else {
        (unsortedSpacing as BothSpacing).fluid!["zero"] = (
          unsortedSpacing as Spacing
        ).zero;
      }
    }
  }

  let baseProperties: Partial<BaseProperties> = {
    width: "100%",
    display: "block",
  };

  if (MODE === "fixed" || MODE === "both") {
    // inner padding for container
    const innerPadding: InnerPadding = theme("container.innerPadding");
    if (
      !(
        isObject(innerPadding) ||
        typeof innerPadding === "number" ||
        typeof innerPadding === "string"
      )
    ) {
      return;
    }

    // set container padding
    let baseFixedProperties = {
      ...baseProperties,
      paddingLeft:
        typeof innerPadding === "object"
          ? innerPadding["zero"]
          : innerPadding || 0,
      paddingRight:
        typeof innerPadding === "object"
          ? innerPadding["zero"]
          : innerPadding || 0,
    };

    // ascending order of spacing values
    // include only spacing key:value pair that exist in breakpoint
    const spacing = sortedBreakpointKeys
      .map((key): [string, number] => {
        let value = (unsortedSpacing as Spacing)[key];
        if (
          MODE === "both" &&
          isObject((unsortedSpacing as BothSpacing).fixed) &&
          typeof (unsortedSpacing as BothSpacing).fixed![
            key as keyof typeof breakpoints
          ] === "number"
        ) {
          value = (unsortedSpacing as BothSpacing).fixed![
            key as keyof typeof breakpoints
          ];
        }
        if (typeof value === "number" && (value || value === 0)) {
          return [key, Math.max(0, value)];
        }
        return [key, Infinity];
      })
      .filter(([_, val]) => val !== Infinity);

    const center: boolean = theme("container.center");

    if (!(typeof center === "boolean" && center)) {
      addComponents({
        ".container-left": {
          marginRight: "auto",
          marginLeft: "unset",
        },
        ".container-center": {
          marginRight: "auto",
          marginLeft: "auto",
        },
        ".container-right": {
          marginRight: "unset",
          marginLeft: "auto",
        },
      });
    } else {
      // Centered container with inherit parent width
      baseFixedProperties = {
        ...baseFixedProperties,
        marginRight: "auto",
        marginLeft: "auto",
      };
    }

    // Generates container-* utilities with min-width media queries
    spacing
      .map(([key, value]): [string, number] => [
        key,
        Math.max(0, breakpoints[key] - value * 2),
      ])
      .forEach(([key, _], index, sizes) => {
        let mediaQueryProperties: Record<string, MediaQueryProperties> = {};

        // Genereates container max-width for given and above breakpoints
        // and for below breakpoint, its just 100% of parent width
        // for example,
        // container-lg will generate below media queries
        // - for smaller breakpoints width is "100%" and max-width applied as below
        // - @media (min-width: 1024px) { "max-width": 896px }   (spacing: 64)
        // - @media (min-width: 1280px) { "max-width": 1120px }  (spacing: 80)
        // - @media (min-width: 1440px) { "max-width": 1184px }	 (spacing: 128)
        sizes.forEach(([_key, _value], _index) => {
          if (_key !== "zero" && _index >= index) {
            mediaQueryProperties[`@media (min-width: ${breakpoints[_key]}px)`] =
              {
                maxWidth: _value,
                paddingLeft:
                  typeof innerPadding === "object"
                    ? innerPadding[_key]
                    : innerPadding,
                paddingRight:
                  typeof innerPadding === "object"
                    ? innerPadding[_key]
                    : innerPadding,
              };
          }
        });

        if (key === "zero") {
          /**
           * Generates base container class
           * display
           * ?marginRight
           * ?marginLeft
           * ?paddingLeft
           * ?paddingRight
           * width
           */
          /* Generating here because of css specificity */
          addComponents({
            [MODE === "both" ? ".container-fixed-base" : ".container"]: {
              ...baseFixedProperties,
            },
          });
          addComponents({
            ".container-fixed": {
              ...baseFixedProperties,
              ...mediaQueryProperties,
            },
          });
        } else {
          // Generates container-* classes
          // container-xs
          // container-sm
          // container-md
          // container-lg
          // ...and so on
          /** POC:
           * 1. can i use matchComponents to add arbitary value support?
           * 2. or use css variable trick to override properties for that perticular element -> "lg:[max-width:800px]"
           */
          addComponents({
            [`.container${MODE === "both" ? "-fixed" : ""}-${key}`]: {
              ...mediaQueryProperties,
            },
          });
        }
      });
  }

  if (MODE === "fluid" || MODE === "both") {
    let baseFluidProperties = {
      ...baseProperties,
    };
    delete baseFluidProperties.marginLeft;
    delete baseFluidProperties.marginRight;

    // ascending order of spacing values
    // include only spacing key:value pair that exist in breakpoint
    const spacing = sortedBreakpointKeys
      .map((key): [string, number] => {
        let value = (unsortedSpacing as Spacing)[key];
        if (
          MODE === "both" &&
          isObject((unsortedSpacing as BothSpacing).fluid) &&
          typeof (unsortedSpacing as BothSpacing).fluid![
            key as keyof typeof breakpoints
          ] === "number"
        ) {
          value = (unsortedSpacing as BothSpacing).fluid![
            key as keyof typeof breakpoints
          ];
        }
        if (typeof value === "number" && (value || value === 0)) {
          return [key, Math.max(0, value)];
        }
        return [key, Infinity];
      })
      .filter(([_, val]) => val !== Infinity);

    // set container padding
    baseFluidProperties = {
      ...baseFluidProperties,
      paddingLeft: spacing[0][1] || 0,
      paddingRight: spacing[0][1] || 0,
    } satisfies Omit<Partial<BaseProperties>, "marginLeft" | "marginRight">;

    // Generates container-* utilities with min-width media queries
    spacing.forEach(([key, _], index, sizes) => {
      let mediaQueryProperties: Record<
        string,
        Omit<MediaQueryProperties, "maxWidth">
      > = {};

      // Genereates container left and right padding for given and above breakpoints
      // for example,
      // container-lg will generate below media queries
      // - @media (min-width: 1024px) { "padding-left": 64px, "padding-right": 64px }
      // - @media (min-width: 1280px) { "padding-left": 80px, "padding-right": 80px }
      // - @media (min-width: 1440px) { "padding-left": 128px, "padding-right": 128px }
      sizes.forEach(([_key, _value], _index) => {
        if (_key !== "zero" && _index >= index) {
          mediaQueryProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
            paddingLeft: _value,
            paddingRight: _value,
          };
        }
      });

      if (key === "zero") {
        /**
         * Generates base container class
         * display
         * paddingLeft
         * paddingRight
         * width
         */
        /* Generating here because of css specificity */
        addComponents({
          [MODE === "both" ? ".container-fluid-base" : ".container"]: {
            ...baseFluidProperties,
          },
        });
        addComponents({
          ".container-fluid": {
            ...baseFluidProperties,
            ...mediaQueryProperties,
          },
        });
      } else {
        // Generates container-* classes
        // container-xs
        // container-sm
        // container-md
        // container-lg
        // ...and so on
        /** POC:
         * 1. can i use matchComponents to add arbitary value support?
         * 2. or use css variable trick to override properties for that perticular element -> "lg:[max-width:800px]"
         */
        addComponents({
          [`.container${MODE === "both" ? "-fluid" : ""}-${key}`]: {
            ...mediaQueryProperties,
          },
        });
      }
    });
  }

  // Generate container-none class
  addComponents({
    ".container-none": {
      width: "initial",
      marginLeft: "unset",
      marginRight: "unset",
      paddingLeft: "unset",
      paddingRight: "unset",
      maxWidth: "unset",
      display: "initial",
    },
  });
}
