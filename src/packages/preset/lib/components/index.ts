import container from "./container";

import type { PluginProps } from "..";

export default function (props: PluginProps): void {
  !!props.visheshCorePlugins.breakpoints &&
    !!props.visheshCorePlugins.container &&
    container(props);
}
