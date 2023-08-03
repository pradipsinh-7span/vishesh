import plugin from "tailwindcss/plugin";

import components from "./components";

import type { PluginProps, VisheshPreset } from ".";

import themeDefaults from "./themeDefaults";
import variants from "./variants";

const Theme: Partial<VisheshPreset> = {
  theme: {
    // disabled with override as core pluging not working
    screens: {},
  },
  corePlugins: {
    container: false,
  },
  // TODO: provide option to disable vishesh plugins "visheshCore"
  plugins: [
    plugin((props: PluginProps): void => {
      variants(props);
      components(props);
    }, themeDefaults),
  ],
};

export default Theme;
