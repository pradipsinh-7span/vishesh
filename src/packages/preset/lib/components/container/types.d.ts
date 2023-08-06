export interface BaseProperties {
  width: "100%";
  display: "block";
  marginLeft?: "auto";
  marginRight?: "auto";
  paddingLeft: string | number;
  paddingRight: string | number;
}

export interface BothSpacing extends Spacing {
  fixed?: Spacing;
  fluid?: Spacing;
}

export type ContainerMode = "fixed" | "fluid" | "both";

// TODO: accept single number also for setting same value to all breakpoint
export type InnerPadding = Record<keyof Breakpoints, number | string>;

interface ContainerFixed extends BaseContainer {
  mode: "fixed";
  center: boolean;
  innerPadding: InnerPadding;
}

interface ContainerFluid extends BaseContainer {
  mode: "fluid";
  innerPadding?: never;
  // TODO: add this option to align container manually
  center?: never;
}

interface ContainerBoth extends BaseContainer {
  mode: "both";
  center: boolean;
  spacing: BothSpacing;
  innerPadding: InnerPadding;
}

export interface MediaQueryProperties {
  maxWidth?: number;
  paddingLeft: number | string;
  paddingRight: number | string;
}

interface BaseContainer {
  mode: ContainerMode;
  spacing: Spacing;
  /**
   * @deprecated
   * > 🚨 Do not use
   */
  screens?: never;
  /**
   * @deprecated
   * > 🚨 Do not use
   */
  padding?: never;
}

type Container = ContainerFixed | ContainerFluid | ContainerBoth;
