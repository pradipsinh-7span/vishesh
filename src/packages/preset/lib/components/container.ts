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

  // container mode
  const MODE: ContainerMode = theme("container.mode");

  // spacing
  const unorderedSpacing: Spacing | BothSpacing = theme("container.spacing");
  // make sure zero exists
  if (MODE === "fixed") {
    // only using zero as key
    unorderedSpacing["zero"] = 0;
  } else if (MODE === "fluid") {
    // if provided than take it
    // if not make sure zero exists
    if ("zero" in unorderedSpacing) {
      unorderedSpacing.zero = Math.max(0, unorderedSpacing["zero"]);
    } else {
      unorderedSpacing["zero"] = 0;
    }
  } else if (MODE === "both") {
    /* type: both */
    // for common set zero to 0
    unorderedSpacing["zero"] = 0;
    // fixed
    if ("fixed" in (unorderedSpacing as BothSpacing)) {
      // only using zero as key
      (unorderedSpacing as BothSpacing).fixed!["zero"] = 0;
    }
    // fluid
    if ("fluid" in (unorderedSpacing as BothSpacing)) {
      // if provided than take it
      // if not make sure zero exists
      if ("zero" in (unorderedSpacing as BothSpacing).fluid!) {
        (unorderedSpacing as BothSpacing).fluid!.zero = Math.max(
          0,
          unorderedSpacing["zero"]
        );
      } else {
        (unorderedSpacing as BothSpacing).fluid!["zero"] = 0;
      }
    }
  }

  // ascending order of spacing values
  // include only spacing key:value pair that exist in breakpoint
  const spacing = Object.entries(unorderedSpacing)
    ?.filter(([key, value]) => key in breakpoints && (value || value === 0))
    ?.sort((a, b) => a[1] - b[1]);

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
      ?.map(([key, value]): [string, number] => [
        key,
        Math.max(0, breakpoints[key] - value * 2),
      ])
      ?.forEach(([key, _], index, sizes) => {
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
        sizes
          ?.sort((a, b) => a[1] - b[1]) // as "sm" is coming before the "xs"
          .forEach(([_key, _value], _index) => {
            if (_value && _key !== "zero" && _index >= index) {
              mediaProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
                maxWidth: _value,
                paddingLeft: innerPadding[_key] || 0,
                paddingRight: innerPadding[_key] || 0,
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
        /** POC: can i use matchComponents to add arbitary value support? */
        if (key === "zero") {
          addComponents({
            ".container-fixed": {
              ...containerClass,
              ...mediaProperties,
            },
          });
        } else {
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
    spacing
      ?.map(([key, value]): [string, number] => [key, Math.max(0, value)])
      ?.forEach(([key, _], index) => {
        const mediaProperties: Record<string, MediaQueryPadding> = {};

        // Genereates container left and right padding for given and above breakpoints
        // for example,
        // container-lg will generate below media queries
        // - @media (min-width: 1024px) { "padding-left": 64px, "padding-right": 64px }
        // - @media (min-width: 1280px) { "padding-left": 80px, "padding-right": 80px }
        // - @media (min-width: 1440px) { "padding-left": 128px, "padding-right": 128px }
        spacing.forEach(([_key, _value], _index) => {
          if (_value && _key !== "zero" && _index >= index) {
            mediaProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
              paddingLeft: _value + "px",
              paddingRight: _value + "px",
            };
          }
        });

        // Generates container-* classes
        // container-xs
        // container-sm
        // container-md
        // container-lg
        // ...and so on
        /** POC: can i use matchComponents to add arbitary value support? */
        if (key === "zero") {
          addComponents({
            [".container-fluid"]: {
              ...containerClass,
              ...mediaProperties,
            },
          });
        } else {
          addComponents({
            [`.container-${key}`]: {
              ...mediaProperties,
            },
          });
        }
      });
  }

  /**
   * Generates base container class
   * ?marginRight
   * ?marginLeft
   * ?paddingLeft
   * ?paddingRight
   * width
   */
  addComponents({
    ".container": {
      ...containerClass,
    },
  });

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

type NormalProperties = {
  marginRight?: "auto";
  marginLeft?: "auto";
  width: "100%";
  display: "block";
};

type MediaQueryPadding = {
  paddingLeft: string;
  paddingRight: string;
};

type ContainerClass = Merge<NormalProperties, Record<any, MediaQueryPadding>>;
