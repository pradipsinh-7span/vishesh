import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      outDir: "types",
      copyDtsFiles: true,
      insertTypesEntry: true,
      entryRoot: "./lib",
    }),
  ],
  build: {
    lib: {
      entry: "./lib/main.ts",
      fileName: (format) => {
        if (format === "cjs") {
          return "vishesh-preset.c.js";
        }
        return "vishesh-preset.js";
      },
      // minify whitespace is disabled for es format
      // Ref: https://vitejs.dev/config/build-options.html#build-minify
      formats: ["es", "cjs"],
    },
  },
});
