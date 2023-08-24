export interface BaseProperties {
  width: "100%";
  display: "block";
  marginLeft?: "auto";
  marginRight?: "auto";
  paddingLeft: string | number;
  paddingRight: string | number;
}

export type ContainerMode = "fixed" | "fluid" | "twin";

export type InnerPadding =
  | number
  | string
  | Record<keyof Breakpoints, number | string>;

export interface MediaQueryProperties {
  maxWidth?: number;
  paddingLeft: number | string;
  paddingRight: number | string;
}

export type Spacing = Record<keyof Breakpoints, number>;

interface FixedContainer extends BaseContainer {
  mode: "fixed";
  center: boolean;
  innerPadding: InnerPadding;
}

interface FluidContainer extends BaseContainer {
  mode: "fluid";
  innerPadding?: never;
  // POC: add this option to align container manually
  center?: never;
}

interface TwinContainer extends BaseContainer {
  mode: "twin";
  center: boolean;
  spacing: TwinSpacing;
  innerPadding: InnerPadding;
}

export interface TwinSpacing extends Spacing {
  fixed?: Spacing;
  fluid?: Spacing;
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

type Container = FixedContainer | FluidContainer | TwinContainer;
