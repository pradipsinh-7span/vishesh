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
  Merge,
  PluginProps,
  Spacing,
} from "..";

// container
// center: boolean
// initialPadding:
//   active: boolean
//   value: boolean or spacing key
//   resetOn: spacing key
// spacing: key:value pair that mapped to breakpoints
// - xs: 16
// - sm: 28
// - md: 40
// - lg: 64
// - xl: 80
// - mac: 128

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
          unsortedSpacing["zero"]
        );
      } else {
        (unsortedSpacing as BothSpacing).fluid!["zero"] = 0;
      }
    }
  }

  // ascending order of spacing values
  // include only spacing key:value pair that exist in breakpoint
  const spacing = sortedBreakpointKeys
    .map((key): [string, number] => {
      const value = unsortedSpacing[key];
      if (typeof value === "number" && (value || value === 0)) {
        return [key, Math.max(0, value)];
      }
      return [key, Infinity];
    })
    .filter(([_, val]) => val !== Infinity);

  const normalProperties: NormalProperties = {
    width: "100%",
    display: "block",
  };

  let containerClass: ContainerClass = { ...normalProperties };

  if (MODE === "fixed") {
    // inner padding for container
    const innerPadding: InnerPadding = theme("container.innerPadding") || {};

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
      containerClass = {
        ...containerClass,
        marginRight: "auto",
        marginLeft: "auto",
      };
    }

    // set container padding
    containerClass = {
      ...containerClass,
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
        type MediaQueryMaxWidth = {
          maxWidth: number;
          paddingRight: number | string;
          paddingLeft: number | string;
        };
        let mediaProperties = {} as
          | Record<string, MediaQueryMaxWidth>
          | InnerPadding;

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
            mediaProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
              maxWidth: _value,
              paddingLeft: innerPadding[_key],
              paddingRight: innerPadding[_key],
            };
          }
        });

        // Generates container-* classes
        // container-fixed
        // container-xs
        // container-sm
        // container-md
        // container-lg
        // ...and so on
        if (key === "zero") {
          /**
           * Generates base container class
           * ?marginRight
           * ?marginLeft
           * ?paddingLeft
           * ?paddingRight
           * width
           */
          /* Generating here because of css specificity */
          addComponents({
            ".container": {
              ...containerClass,
            },
          });
          addComponents({
            ".container-fixed": {
              ...containerClass,
              ...mediaProperties,
            },
          });
        } else {
          /** POC: can i use matchComponents to add arbitary value support? */
          addComponents({
            [`.container-${key}`]: {
              ...mediaProperties,
            },
          });
        }
      });
  }

  if (MODE === "fluid") {
    delete containerClass.marginLeft;
    delete containerClass.marginRight;

    // set padding for zero also
    containerClass = {
      ...containerClass,
      paddingLeft: spacing[0][1] || 0,
      paddingRight: spacing[0][1] || 0,
    };

    // Generates container-* utilities with min-width media queries
    spacing.forEach(([key, _], index, sizes) => {
      const mediaProperties: Record<string, MediaQueryPadding> = {};

      // Genereates container left and right padding for given and above breakpoints
      // for example,
      // container-lg will generate below media queries
      // - @media (min-width: 1024px) { "padding-left": 64px, "padding-right": 64px }
      // - @media (min-width: 1280px) { "padding-left": 80px, "padding-right": 80px }
      // - @media (min-width: 1440px) { "padding-left": 128px, "padding-right": 128px }
      sizes.forEach(([_key, _value], _index) => {
        if (_key !== "zero" && _index >= index) {
          mediaProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
            paddingLeft: _value,
            paddingRight: _value,
          };
        }
      });

      // Generates container-* classes
      // container-xs
      // container-sm
      // container-md
      // container-lg
      // ...and so on
      if (key === "zero") {
        /**
         * Generates base container class
         * ?marginRight
         * ?marginLeft
         * ?paddingLeft
         * ?paddingRight
         * width
         */
        /* Generating here because of css specificity */
        addComponents({
          ".container": {
            ...containerClass,
          },
        });
        addComponents({
          ".container-fluid": {
            ...containerClass,
            ...mediaProperties,
          },
        });
      } else {
        /** POC: can i use matchComponents to add arbitary value support? */
        addComponents({
          [`.container-${key}`]: {
            ...mediaProperties,
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

type NormalProperties = {
  marginRight?: "auto";
  marginLeft?: "auto";
  width: "100%";
  display: "block";
};

type MediaQueryPadding = {
  paddingLeft: number;
  paddingRight: number;
};

type ContainerClass = Merge<NormalProperties, Record<any, MediaQueryPadding>>;
