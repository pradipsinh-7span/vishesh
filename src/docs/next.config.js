import withNextra from "nextra";

const base = process.env.NODE_ENV === "development" ? "" : "/vishesh";

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
})({
  /* Next.js config */
  output: "export",
  distDir: "dist",
  basePath: base,
  assetPrefix: base,
  images: {
    unoptimized: true,
  },
});
