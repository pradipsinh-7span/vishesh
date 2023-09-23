import aspectRatio from "./aspect-ratio";
import container from "./container";

import type { PluginProps, VisheshCorePluginsList } from "..";

export default function (
  props: PluginProps,
  disabledPluginList: VisheshCorePluginsList[]
): void {
  !disabledPluginList.includes("container") && container(props);
  !disabledPluginList.includes("aspectRatio") && aspectRatio(props);
}
