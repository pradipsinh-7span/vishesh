import breakpoints from "./breakpoints";

import type { PluginProps, VisheshCorePluginsList } from "..";

export default function (
  props: PluginProps,
  disabledPluginList: VisheshCorePluginsList[]
): void {
  !disabledPluginList.includes("breakpoints") && breakpoints(props);
}
