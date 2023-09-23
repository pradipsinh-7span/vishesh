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
    aspectRatio: {
      square: "1/1",
      video: "16/9",
      photo: "4/3",
      "photo-wide": "5/4",
      "photo-wider": "3/2",
      "photo-widest": "16/9",
      cinema: "1.85/1",
      "cinema-wide": "2.39/1",
      "cinema-70mm": "2.76/1",
      display: "16/9",
      "display-tall": "16/10",
      "display-wide": "18/9",
      "display-wider": "19.5/9",
      "display-ultrawide": "21/9",
      generator: "1-16",
    },
  },
} satisfies Partial<VisheshPreset>;
