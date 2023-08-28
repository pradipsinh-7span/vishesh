import type { Container } from "./components/container/types";
import type { Breakpoints } from "./variants/breakpoints/types";
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

interface VisheshCorePlugins {
  breakpoints: boolean;
  container: boolean;
}

export interface PluginProps {
  theme: Function;
  addComponents: Function;
  addVariant: Function;
  config: Function;
  visheshCorePlugins: VisheshCorePlugins;
}

interface ThemeDefaults {
  breakpoints: Breakpoints;
  container: Container;
}

type Theme = ThemeConfig & ThemeDefaults;

interface VisheshPreset extends Config {
  theme: Partial<Theme & { extend: Partial<Theme> }>;
  visheshCore: VisheshCore;
}
