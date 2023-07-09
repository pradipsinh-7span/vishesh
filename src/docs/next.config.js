import withNextra from "nextra";

export default withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
})({
  /* Next.js config */
  output: "export",
  distDir: "dist",
  basePath: "/vishesh",
  assetPrefix: "/vishesh",
  images: {
    unoptimized: true,
  },
});
