import type { Config, ThemeConfig } from "tailwindcss/types/config";

export type Breakpoints = Record<string, number>;

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

export type ContainerMode = "fixed" | "fluid" | "both";
export type InnerPadding = Record<keyof Breakpoints, number>;
interface ContainerFixed extends BaseContainer {
  mode: "fixed";
  center: boolean;
  innerPadding: InnerPadding;
}
interface ContainerFluid extends BaseContainer {
  mode: "fluid";
  innerPadding?: never;
  center?: never;
}
interface ContainerBoth extends BaseContainer {
  mode: "both";
  center: boolean;
  innerPadding: InnerPadding;
}

export type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A & keyof B
    ? A[K] | B[K]
    : K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};

export interface PluginProps {
  theme: Function;
  addComponents: Function;
  addVariant: Function;
}

export type Spacing = Record<keyof Breakpoints, number>;

interface ThemeDefaults {
  breakpoints: Breakpoints;
  container: Container;
}

type Theme = ThemeConfig & ThemeDefaults;

interface VisheshPreset extends Config {
  theme: Partial<Theme & { extend: Partial<Theme> }>;
}
