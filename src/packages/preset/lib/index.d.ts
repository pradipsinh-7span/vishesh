import type { Config, ThemeConfig } from "tailwindcss/types/config";

export type Breakpoints = Record<string, number>;

interface Container {
  center: boolean;
  initialPadding: InitialPadding;
  spacing: Spacing;
  mode: "fixed" | "fluid";
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

export type InitialPadding = PaddingActive | PaddingInActive;

export type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A & keyof B
    ? A[K] | B[K]
    : K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};
interface PaddingActive {
  active: true;
  value: number;
  resetOn: keyof Breakpoints;
}

interface PaddingInActive {
  active: false;
  value?: never;
  resetOn?: never;
}

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
