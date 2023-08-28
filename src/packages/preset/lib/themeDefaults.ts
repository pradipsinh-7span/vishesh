import type { VisheshPreset } from ".";

export default {
  theme: {
    breakpoints: {
      zero: 0,
      xs: 375,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      mac: 1440,
      maxw: 1920,
    },
    container: {
      mode: "fixed",
      center: true,
      spacing: {
        zero: 16,
        xs: 16,
        sm: 28,
        md: 40,
        lg: 64,
        xl: 80,
        mac: 128,
        maxw: 240,
      },
      innerPadding: {
        zero: 16,
        xs: 0,
        sm: 0,
        md: 0,
        lg: 0,
        xl: 0,
        mac: 0,
        maxw: 0,
      },
    },
  },
  visheshCorePlugins: {
    breakpoints: true,
    container: true,
  },
} satisfies Partial<VisheshPreset>;
