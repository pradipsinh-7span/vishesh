interface BaseProperties {
  width: "100%";
  display: "block";
  marginLeft?: "auto";
  marginRight?: "auto";
  paddingLeft: string | number;
  paddingRight: string | number;
}

type ContainerMode = "fixed" | "fluid" | "twin";

type InnerPadding =
  | number
  | string
  | Record<keyof Breakpoints, number | string>;

interface MediaQueryProperties {
  maxWidth?: number;
  paddingLeft: number | string;
  paddingRight: number | string;
}

type Spacing = Record<keyof Breakpoints, number>;

interface FixedContainer extends BaseContainer {
  mode: "fixed";
  center: boolean;
  innerPadding: InnerPadding;
}

interface FluidContainer extends BaseContainer {
  mode: "fluid";
  innerPadding?: never;
  center?: never;
}

interface TwinContainer extends BaseContainer {
  mode: "twin";
  center: boolean;
  spacing: TwinSpacing;
  innerPadding: InnerPadding;
}

interface TwinSpacing extends Spacing {
  fixed?: Spacing;
  fluid?: Spacing;
}

interface BaseContainer {
  mode: ContainerMode;
  spacing: Spacing;
  /**
   * > 🚨 Do not use if using vishesh breakpoints
   */
  screens?: never;
  /**
   * > 🚨 Do not use if using vishesh container
   */
  padding?: never;
}

type Container = FixedContainer | FluidContainer | TwinContainer;
