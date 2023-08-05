// breakpoints
// zero: 0
// xs: 375
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// mac: 1440
// maxw: 1920

import type {
  BothSpacing,
  Breakpoints,
  ContainerMode,
  InnerPadding,
  PluginProps,
  Spacing,
} from "..";

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
  const breakpoints = (theme("breakpoints") || {}) as Breakpoints;
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
  // make sure zero exists
  if (MODE === "fixed") {
    // only using zero as key
    unsortedSpacing["zero"] = 0;
  } else if (MODE === "fluid") {
    // if provided than take it
    // if not make sure zero exists
    if ("zero" in unsortedSpacing) {
      unsortedSpacing.zero = Math.max(0, unsortedSpacing["zero"]);
    } else {
      unsortedSpacing["zero"] = 0;
    }
  } else if (MODE === "both") {
    /* type: both */
    // for common set zero to 0
    unsortedSpacing["zero"] = 0;
    // fixed
    if ("fixed" in (unsortedSpacing as BothSpacing)) {
      // only using zero as key
      (unsortedSpacing as BothSpacing).fixed!["zero"] = 0;
    }
    // fluid
    if ("fluid" in (unsortedSpacing as BothSpacing)) {
      // if provided than take it
      // if not make sure zero exists
      if ("zero" in (unsortedSpacing as BothSpacing).fluid!) {
        (unsortedSpacing as BothSpacing).fluid!.zero = Math.max(
          0,
          (unsortedSpacing as BothSpacing).fluid!.zero
        );
      } else {
        (unsortedSpacing as BothSpacing).fluid!["zero"] = 0;
      }
    }
  }

  let baseProperties: Partial<BaseProperties> = {
    width: "100%",
    display: "block",
  };

  if (MODE === "fixed" || MODE === "both") {
    // ascending order of spacing values
    // include only spacing key:value pair that exist in breakpoint
    const spacing = sortedBreakpointKeys
      .map((key): [string, number] => {
        let value = unsortedSpacing[key];
        if (
          MODE === "both" &&
          (unsortedSpacing as BothSpacing).fixed?.[
            key as keyof typeof breakpoints
          ]
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

    if (!theme("container.center")) {
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
      baseProperties = {
        ...baseProperties,
        marginRight: "auto",
        marginLeft: "auto",
      };
    }

    // inner padding for container
    const innerPadding: InnerPadding = theme("container.innerPadding") || {};

    // set container padding
    baseProperties = {
      ...baseProperties,
      paddingLeft: innerPadding["zero"] || 0,
      paddingRight: innerPadding["zero"] || 0,
    };

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
                paddingLeft: innerPadding[_key],
                paddingRight: innerPadding[_key],
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
              ...baseProperties,
            },
          });
          addComponents({
            ".container-fixed": {
              ...baseProperties,
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
          /* POC: can i use matchComponents to add arbitary value support? */
          addComponents({
            [`.container${MODE === "both" ? "-fixed" : ""}-${key}`]: {
              ...mediaQueryProperties,
            },
          });
        }
      });
  }

  if (MODE === "fluid" || MODE === "both") {
    // ascending order of spacing values
    // include only spacing key:value pair that exist in breakpoint
    const spacing = sortedBreakpointKeys
      .map((key): [string, number] => {
        let value = unsortedSpacing[key];
        if (
          MODE === "both" &&
          (unsortedSpacing as BothSpacing).fluid?.[
            key as keyof typeof breakpoints
          ]
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

    let baseFluidProperties = {
      ...baseProperties,
    };
    delete baseFluidProperties.marginLeft;
    delete baseFluidProperties.marginRight;

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
        /* POC: can i use matchComponents to add arbitary value support? */
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

  /* LATER THE CLASS GENEREATES, HIGHER THE SPECIFICITY IT HAS */
}

type BaseProperties = {
  width: "100%";
  display: "block";
  marginLeft?: "auto";
  marginRight?: "auto";
  paddingLeft: string | number;
  paddingRight: string | number;
};

type MediaQueryProperties = {
  maxWidth?: number;
  paddingLeft: number | string;
  paddingRight: number | string;
};
