import type { Merge, VisheshCorePluginsList, VisheshThemeConfig } from ".";
import type { CorePluginList } from "tailwindcss/types/generated/corePluginList";

export const deepCopy = (x: Object | Array<any>) =>
  JSON.parse(JSON.stringify(x));

const dependencyList: Record<VisheshCorePluginsList, VisheshCorePluginsList[]> =
  {
    breakpoints: ["breakpoints"],
    container: ["container", "breakpoints"],
    aspectRatio: ["aspectRatio"],
    columns: ["columns"],
  };

// borrowed from tailwindcss
// @ts-ignore
export const flattenColorPalette = (colors) =>
  Object.assign(
    {},
    // @ts-ignore
    ...Object.entries(colors ?? {}).flatMap(([color, values]) =>
      typeof values == "object"
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === "DEFAULT" ? "" : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }]
    )
  );

export const getDisabledPluginsList = (
  disabledVisheshCorePlugins: VisheshCorePluginsList[]
) => {
  return Object.entries(dependencyList)
    .map(([key, value]) => {
      if (
        value.some((plugin: any) => disabledVisheshCorePlugins.includes(plugin))
      ) {
        return key;
      }
      return;
    })
    .filter(Boolean) as VisheshCorePluginsList[];
};

export const isObject = (obj: any): boolean => {
  return obj && typeof obj === "object" && !Array.isArray(obj);
};

export const isRange = (range: string): boolean => /^\d+-\d+$/.test(range);

export const transformTailwindConfig = (
  disabledVisheshCorePlugins: VisheshCorePluginsList[]
) => {
  const theme: Partial<VisheshThemeConfig> = {
    // disabled with override as corePlugins not working
    screens: {},
  };
  const corePlugins: Partial<Record<CorePluginList, boolean>> = {
    container: false,
    aspectRatio: false,
    columns: false,
  };

  // vishesh core plugins and tailwindcss core plugins mapping
  const corePluginsMapping: Record<
    VisheshCorePluginsList,
    Merge<CorePluginList, "screens">
  > = {
    breakpoints: "screens",
    container: "container",
    aspectRatio: "aspectRatio",
    columns: "columns",
  };
  // disabled tailwindcss core plugin with override
  // there is an issue or plugin doesn't exist in tailwindcss
  const caveatPlugins: Merge<CorePluginList, "screens">[] = ["screens"];
  // if dev disables the vishesh core plugins then,
  // enable back the tailwindcss core plugins
  disabledVisheshCorePlugins.forEach((corePlugin) => {
    if (caveatPlugins.includes(corePluginsMapping[corePlugin])) {
      delete theme[corePluginsMapping[corePlugin] as CorePluginList];
    } else {
      delete corePlugins[corePluginsMapping[corePlugin] as CorePluginList];
    }
  });

  return { theme, corePlugins };
};
