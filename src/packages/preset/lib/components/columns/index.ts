/* LATER THE CLASS GENEREATES, HIGHER THE SPECIFICITY IT HAS */

/* columns */
// columns: min-column-width max-column-count;

import { flattenColorPalette, isObject, isRange } from "../../utils";

import type { PluginProps } from "../..";

/**
 * Generates `cols`, `cols-w-*`, `cols-*` and `columns-none`
 * Generate `cols-dw-*`, `cols-ds-*`, `cols-dc-*` and `cols-divider-none`
 * Generate `cols-gap-*` and `cols-gap-none`
 * Generate `cols-fill-*` classes
 */
export default function ({
  theme,
  addComponents,
  matchComponents,
}: PluginProps): void {
  const columns: Columns = theme("columns");
  if (!(isObject(columns) && Object.keys(columns).length > 0)) {
    return;
  }
  const columnMinWidth = columns.width;
  const columnMaxCount = columns.count;
  const columnDivider = columns.divider;
  const columnDividerWidth = columns.divider?.width;
  const columnDividerStyle = columns.divider?.style;
  const columnDividerColor = columns.divider?.color;
  const columnGap = columns.gap;

  // generate columns and columns-divider class
  // generate cols-fill-* classes
  addComponents({
    ".columns": {
      columns:
        "var(--vishesh-columns-width, auto) var(--vishesh-columns-count, auto)",
      columnRule:
        "var(--vishesh-columns-divider-width, 1px) var(--vishesh-columns-divider-style, solid) var(--vishesh-columns-divider-color, transparent)",
      "& *": {
        columnSpan: "none",
      },
    },
    ".cols-fill-balance": {
      columnFill: "balance",
    },
    ".cols-fill-auto": {
      columnFill: "auto",
    },
  });

  // generate cols-w-* classes
  // add arbitrary value support cols-w-[*]
  if (columnMinWidth && isObject(columnMinWidth)) {
    matchComponents(
      {
        "cols-w": (value: string | number) => {
          return {
            "--vishesh-columns-width": !isNaN(Number(value))
              ? value + "px"
              : value,
          };
        },
      },
      { values: columnMinWidth }
    );
  }

  // generate cols-* classes
  // add arbitrary value support cols-[*]
  if (columnMaxCount && isRange(columnMaxCount)) {
    const [from, to] = columnMaxCount.split("-");
    const counts = {} as Record<string, string>;
    for (let i = +from; i <= +to; i++) {
      counts[`${i}`] = `${i}`;
    }

    matchComponents(
      {
        cols: (value: number) => {
          return {
            "--vishesh-columns-count": value,
          };
        },
      },
      { values: counts }
    );
  }

  if (columnDivider && isObject(columnDivider)) {
    // generate cols-dw class
    // add arbitrary value support cols-dw-[*]
    if (columnDividerWidth && isObject(columnDividerWidth)) {
      matchComponents(
        {
          "cols-dw": (value: string | number) => {
            return {
              "--vishesh-columns-divider-width": !isNaN(Number(value))
                ? value + "px"
                : value,
            };
          },
        },
        {
          values: columnDividerWidth,
        }
      );
    }

    // generate cols-ds class
    // add arbitrary value support cols-ds-[*]
    if (columnDividerStyle && isObject(columnDividerStyle)) {
      matchComponents(
        {
          "cols-ds": (value: string) => {
            return {
              "--vishesh-columns-divider-style": value,
            };
          },
        },
        {
          values: columnDividerStyle,
        }
      );
    }

    // generate cols-dc class
    // add arbitrary value support cols-dc-[*]
    if (columnDividerColor && isObject(columnDividerColor)) {
      matchComponents(
        {
          "cols-dc": (value: string) => {
            return {
              "--vishesh-columns-divider-color": value,
            };
          },
        },
        {
          // borrowed from tailwindcss
          values: (({ DEFAULT: _, ...colors }) => colors)(
            flattenColorPalette(columnDividerColor)
          ),
        }
      );
    }
  }

  // generate cols-gap-* class
  // add arbitrary value support cols-gap-[*]
  if (columnGap && isObject(columnGap)) {
    matchComponents(
      {
        "cols-gap": (value: string | number) => {
          return {
            columnGap: !isNaN(Number(value)) ? value + "px" : value,
          };
        },
      },
      {
        values: columnGap,
      }
    );
  }

  // generate column-none class
  // generate cols-divider-none class
  // generate cols-gap-none class
  // generate cols-fill-none class
  addComponents({
    ".cols-divider-none": {
      columnRule: "unset",
    },
    ".cols-gap-none": {
      columnGap: 0,
    },
    ".cols-fill-none": {
      columnFill: "unset",
    },
    ".columns-none": {
      columns: "unset",
      columnRule: "unset",
      columnGap: 0,
      columnFill: "unset",
    },
  });
}
