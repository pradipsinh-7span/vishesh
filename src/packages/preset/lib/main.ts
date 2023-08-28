import plugin from "tailwindcss/plugin";

import type { Merge, PluginProps, VisheshCorePlugins, VisheshPreset } from ".";

import components from "./components";

import type { PluginAPI } from "tailwindcss/types/config";

import themeDefaults from "./themeDefaults";
import { isObject } from "./utils";
import variants from "./variants";

const Theme: Partial<VisheshPreset> = {
  theme: {
    // disabled with override as core pluging not working
    screens: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin((props): void => {
      // Fix the typescript
      const visheshProps = props as Merge<PluginAPI, PluginProps>;
      // Set core plugins
      const visheshCorePlugins: VisheshCorePlugins =
        props.config("visheshCorePlugins");
      visheshProps["visheshCorePlugins"] = {
        ...themeDefaults.visheshCorePlugins,
        ...((isObject(visheshCorePlugins) && visheshCorePlugins) ||
          ({} as VisheshCorePlugins)),
      };

      // core plugins
      variants(visheshProps);
      components(visheshProps);
    }, themeDefaults),
  ],
};

export default Theme;
