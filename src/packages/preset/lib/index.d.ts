import type { Config, ThemeConfig } from "tailwindcss/types/config";

type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A & keyof B
    ? A[K] | B[K]
    : K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};

interface PluginProps {
  theme: Function;
  addComponents: Function;
  matchComponents: Function;
  addVariant: Function;
  config: Function;
}

interface ThemeDefaults {
  breakpoints: Breakpoints;
  container: Container;
  aspectRatio: AspectRatio;
  columns: Columns;
}

type Theme = Merge<ThemeConfig, ThemeDefaults>;

interface VisheshConfig {
  disable: VisheshCorePluginsList[];
}

// To disable vishesh core plugins and enable back tailwindcss core plugins
type VisheshCorePluginsList =
  | "breakpoints"
  | "container"
  | "aspectRatio"
  | "columns";

export interface VisheshPreset extends Config {
  theme: VisheshThemeConfig;
}

type VisheshThemeConfig = Partial<Theme & { extend: Partial<Theme> }>;
