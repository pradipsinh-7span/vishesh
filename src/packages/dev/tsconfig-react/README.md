# Vishesh tsconfig

#### **<kbd>React.js</kbd> + <kbd>Vite</kbd>**

<br>

## Topics

- [🤞 Prerequisite][pre]
- [📲 Install][install]
- [⚙️ Setup][setup]
- [🦾 Basic Scripts][scripts]
- [▶️ Basic Usage][usage]

<br><br>

## Prerequisite

```shell
# Node.js  (choose any)
v14
v16
v18  (Recomended)

# Package manager  (choose any)
pnpm: v8 or higher  (Recomended)
npm: v7 or higher
yarn: v1 or higher

# Tools
React.js: v17 or higher
Vite: v3 or higher
```

<br><br>

## Install

```shell
# Run this scripts in sequence

1. pnpm dlx install-peerdeps vishesh-tsconfig -P -D
# Run the 2nd script only after 1st completes
2. pnpm dlx install-peerdeps vishesh-tsconfig-react -P -D
```

```shell
# Run this scripts in sequence

1. npm exec install-peerdeps vishesh-tsconfig -- -D
# Run the 2nd script only after 1st completes
2. npm exec install-peerdeps vishesh-tsconfig-react -- -D
```

```shell
# Run this scripts in sequence

1. yarn dlx install-peerdeps vishesh-tsconfig -Y -D
# Run the 2nd script only after 1st completes
2. yarn dlx install-peerdeps vishesh-tsconfig-react -Y -D
```

<br><br>

## Setup

1\. Setup [Vite project][vite] &nbsp;&nbsp;(_if not already_) <br>
&nbsp;&nbsp;&nbsp;&nbsp;\- Run vite cli <br>
&nbsp;&nbsp;&nbsp;&nbsp;\- Choose `react` and then `typescript`

2\. Update `tsconfig.json` and `vite.config.ts`.

<br>

> tsconfig.json

- Remove everything and add below json
- you can override [options][tsconfig-opts]

```json
{
  "extends": "vishesh-tsconfig-react",
  "compilerOptions": {}
}
```

<br>

> vite.config.ts

you can override [config][vite-config]

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@package",
        replacement: resolve(__dirname, "./node_modules"),
      },
      {
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "@utils",
        replacement: resolve(__dirname, "./src/utils"),
      },
      {
        find: "@routes",
        replacement: resolve(__dirname, "./src/routes"),
      },
      {
        find: "@api",
        replacement: resolve(__dirname, "./src/api"),
      },
      {
        find: "@store",
        replacement: resolve(__dirname, "./src/store"),
      },
      {
        find: "@layout",
        replacement: resolve(__dirname, "./src/layout"),
      },
    ],
  },
});
```

<br><br>

## Basic scripts

Add script to check types

```diff
# package.json

{
# // ...
  "scripts": {
#   // ...
+   "check:ts": "tsc",
  },
# // ...
}
```

<br><br>

## Basic usage

> Check the types

```shell
pnpm check:ts
```

```shell
npm run check:ts
```

```shell
yarn check:ts
```

<br><br>

---

_Last updated on July 23, 2023_

[pre]: #prerequisite "Prerequisite"
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
[vite-config]: https://vitejs.dev/config/ "Vite configuration documentation"
[tsconfig-opts]: https://www.typescriptlang.org/tsconfig "Typescript compiler options documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
