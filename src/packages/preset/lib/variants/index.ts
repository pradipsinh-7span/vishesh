import breakpoints from "./breakpoints";

import type { PluginProps } from "..";

export default function (props: PluginProps): void {
  !!props.visheshCorePlugins.breakpoints && breakpoints(props);
}
