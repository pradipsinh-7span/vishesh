import plugin from "tailwindcss/plugin";

import type { VisheshPreset, VisheshConfig } from ".";

import components from "./components";
import themeDefaults from "./themeDefaults";
import {
  getDisabledPluginsList,
  isObject,
  transformTailwindConfig,
} from "./utils";
import variants from "./variants";

const visheshConfig = (
  visheshConfig: VisheshConfig
): Partial<VisheshPreset> => {
  // fallbacks
  if (!visheshConfig || !isObject(visheshConfig)) {
    visheshConfig = {
      disable: [],
    };
  }
  if (!Array.isArray(visheshConfig.disable)) {
    visheshConfig.disable = [];
  }

  // Vishesh preset
  const disabledPluginList = getDisabledPluginsList(visheshConfig.disable);
  return {
    ...transformTailwindConfig(disabledPluginList),
    plugins: [
      plugin((props): void => {
        variants(props, disabledPluginList);
        components(props, disabledPluginList);
      }, themeDefaults),
    ],
  };
};

export default visheshConfig;
