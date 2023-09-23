/* LATER THE CLASS GENEREATES, HIGHER THE SPECIFICITY IT HAS */

/* aspect ratio */
// square: 1/1
// video: 16/9
// photo: 4/3
// photo-wide: 5/4
// photo-wider: 3/2
// photo-widest: 16/9
// cinema: 1.85/1
// cinema-wide: 2.39/1
// cinema-70mm: 2.76/1
// display: 16/9
// display-tall: 16/10
// display-wide: 18/9
// display-wider: 19.5/9
// display-ultrawide: 21/9
// 1/2
// 1/3
// ...
// 2/2, 3/3, ..., 16/16 will be not generated in favour of square
// ...
// 16/15

import { isObject } from "../../utils";

import type { PluginProps } from "../..";

/**
 * Generates `aspect`, `aspect-none` and `ratio-*` utitiles
 */
export default function ({
  theme,
  addComponents,
  matchComponents,
}: PluginProps): void {
  const aspectRatio: AspectRatio = theme("aspectRatio");
  if (!(isObject(aspectRatio) && Object.keys(aspectRatio).length > 0)) {
    return;
  }

  addComponents({
    ".aspect": {
      display: "block",
      width: "100%",
      height: "100%",
      "& > :first-child": {
        display: "block",
        width: "100%",
        height: "auto",
        position: "relative",
        overflow: "hidden",
        paddingTop:
          "calc((var(--vishesh-aspect-h, 1) / var(--vishesh-aspect-w, 1)) * 100%)",
        "& > :first-child": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          "& > img, & > video, & > iframe, & > canvas": {
            width: "100%",
            height: "100%",
          },
        },
      },
    },
    ".aspect-overflow-auto": {
      "& > :first-child": {
        overflow: "auto",
        "& > :first-child": {
          width: "auto",
          height: "auto",
        },
      },
    },
    ".aspect-overflow-x-auto": {
      "& > :first-child": {
        overflowX: "auto",
        "& > :first-child": {
          width: "auto",
        },
      },
    },
    ".aspect-overflow-y-auto": {
      "& > :first-child": {
        overflowY: "auto",
        "& > :first-child": {
          height: "auto",
        },
      },
    },
    ".aspect-overflow-x-hidden": {
      "& > :first-child": {
        overflowX: "hidden",
        "& > :first-child": {
          width: "100%",
        },
      },
    },
    ".aspect-overflow-y-hidden": {
      "& > :first-child": {
        overflowY: "hidden",
        "& > :first-child": {
          height: "100%",
        },
      },
    },
    ".aspect-overflow-hidden": {
      "& > :first-child": {
        overflow: "hidden",
        "& > :first-child": {
          width: "100%",
          height: "100%",
        },
      },
    },
  });

  // generator: 1-16  (default)
  if ("generator" in aspectRatio && /^\d+-\d+$/.test(aspectRatio.generator)) {
    const generator = aspectRatio.generator.split("-");
    delete aspectRatio.generator;
    for (let i = generator[0]; i <= generator[1]; i++) {
      for (let j = generator[0]; j <= generator[1]; j++) {
        if (i !== j) {
          const ratio = `${i}/${j}`;
          aspectRatio[ratio] = ratio;
        }
      }
    }
  }

  matchComponents(
    {
      ratio: (value: string) => {
        const [w, h] = value.split("/");
        return {
          "--vishesh-aspect-w": w,
          "--vishesh-aspect-h": h,
        };
      },
    },
    { values: aspectRatio }
  );

  addComponents({
    ".aspect-none": {
      display: "initial",
      width: "initial",
      height: "initial",
      "& > :first-child": {
        display: "initial",
        width: "initial",
        height: "initial",
        position: "initial",
        overflow: "initial",
        paddingTop: "unset",
        "& > :first-child": {
          position: "initial",
          top: "unset",
          left: "unset",
          width: "initial",
          height: "initial",
          "& > img, & > video, & > iframe, & > canvas": {
            width: "initial",
            height: "initial",
          },
        },
      },
    },
  });
}
