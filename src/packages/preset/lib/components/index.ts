import aspectRatio from "./aspect-ratio";
import columns from "./columns";

import type { PluginProps, VisheshCorePluginsList } from "..";

import container from "./container";

export default function (
  props: PluginProps,
  disabledPluginList: VisheshCorePluginsList[]
): void {
  !disabledPluginList.includes("container") && container(props);
  !disabledPluginList.includes("aspectRatio") && aspectRatio(props);
  !disabledPluginList.includes("columns") && columns(props);
}
