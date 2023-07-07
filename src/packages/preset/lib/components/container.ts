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
  Breakpoints,
  InitialPadding,
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
 * Generated `container-*` utitiles
 */
export default function ({ theme, addComponents }: PluginProps): void {
  // ascending order of spacing values
  const spacing = Object.entries(
    (theme("container.spacing") || {}) as Spacing
  )?.sort((a, b) => a?.[1] - b?.[1]);
  // breakpoints
  const breakpoints = (theme("breakpoints") || {}) as Breakpoints;

  // 1. include only spacing key:value pair that exist in breakpoint
  //     for example,
  //     if spacing has x key and that doesn't exist in breakpoint
  //     then sizes doesn't include x key
  // 2. Generates container sizes
  //     for example,
  //     if breakpoint is md:768
  //     and spacing is md:40
  //		 then, generates ["md", 688]  (768 - 40 * 2)

  // container key and width
  const sizes = spacing
    ?.map(([key, value]): [string, number] | null => {
      if (key in breakpoints) {
        return [key, breakpoints[key] - value * 2];
      }
      return null;
    })
    ?.filter((x) => x) as [string, number][];

  type NormalProperties = {
    marginRight?: "auto";
    marginLeft?: "auto";
    width: "100%";
    display: "block";
  };

  const normalProperties: NormalProperties = {
    width: "100%",
    display: "block",
  };

  type MediaQueryPadding = {
    paddingLeft: string;
    paddingRight: string;
  };
  type ContainerClass = Merge<NormalProperties, Record<any, MediaQueryPadding>>;
  let containerClass: ContainerClass = { ...normalProperties };

  // add initial padding to container
  const padding: InitialPadding = theme("container.initialPadding");
  if (padding?.active && padding.value) {
    // add the initial padding only if reset breakpoint exist
    const resetOn = (breakpoints?.[padding?.resetOn || ""] || 1) - 1;
    if (resetOn) {
      containerClass = {
        ...containerClass,
        [`@media (max-width: ${resetOn}px)`]: {
          paddingLeft: padding.value,
          paddingRight: padding.value,
        },
      };
    }
  }

  // container mode
  const isFixedMode = theme("container.mode") === "fixed";

  if (isFixedMode) {
    // MODE: fixed

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

    // Generates container-* utilities with min-width media queries
    sizes?.forEach(([key, _], index) => {
      if (key !== "zero") {
        type MediaQueryMaxWidth = { maxWidth: number };
        const mediaProperties: Record<string, MediaQueryMaxWidth> = {};

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
        addComponents({
          [`.container-${key}`]: {
            ...mediaProperties,
          },
        });
      }
    });

    // Generate container-none class
    addComponents({
      ".container-none": {
        width: "initial",
        marginLeft: "unset",
        marginRight: "unset",
        maxWidth: "unset",
        display: "initial",
      },
    });
  } else {
    // MODE: fluid

    // Generates container-* utilities with min-width media queries
    sizes.forEach(([key, _], index) => {
      if (key !== "zero") {
        const mediaProperties: Record<string, MediaQueryPadding> = {};

        // Genereates container left and right padding for given and above breakpoints
        // for example,
        // container-lg will generate below media queries
        // - @media (min-width: 1024px) { "padding-left": 64px, "padding-right": 64px }
        // - @media (min-width: 1280px) { "padding-left": 80px, "padding-right": 80px }
        // - @media (min-width: 1440px) { "padding-left": 128px, "padding-right": 128px }
        sizes.forEach(([_key, __], _index) => {
          if (_key !== "zero" && _index >= index) {
            const padding = spacing.find((size) => size?.[0] === _key)?.[1];
            if (padding) {
              mediaProperties[`@media (min-width: ${breakpoints[_key]}px)`] = {
                paddingLeft: padding + "px",
                paddingRight: padding + "px",
              };
            }
          }
        });

        // Generates container-* classes
        // container-xs
        // container-sm
        // container-md
        // container-lg
        // ...and so on
        /** POC: can i use matchComponents to add arbitary value support? */
        addComponents({
          [`.container-${key}`]: {
            ...mediaProperties,
          },
        });
      }
    });

    // Generate container-none class
    addComponents({
      ".container-none": {
        width: "initial",
        paddingLeft: "unset",
        paddingRight: "unset",
        display: "initial",
      },
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
}
