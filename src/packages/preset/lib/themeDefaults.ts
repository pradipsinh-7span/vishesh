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
      max: 1920,
    },
    container: {
      mode: "fixed",
      center: true,
      initialPadding: {
        active: true,
        value: 16,
        resetOn: "xs",
      },
      spacing: {
        xs: 16,
        sm: 28,
        md: 40,
        lg: 64,
        xl: 80,
        mac: 128,
      },
    },
  },
} satisfies Partial<VisheshPreset>;
