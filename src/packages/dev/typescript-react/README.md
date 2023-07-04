# Vishesh typescript config for react with vite

<br>

> CLI added soon to minimize manual setup. ✌️

<br>

_Last updated on: <kbd>03-07-2023</kbd>_

<br>

## Topics

- [🤞 Prerequisite][pre]
- [📲 Install][install]
- [⚙️ Setup][setup]
- [🦾 Basic Scripts][scripts]
- [▶️ Basic Usage][usage]

<br><br>

## Prerequisite

> **Node**: 14 or higher <br> **Pnpm**: 8 or higher <br> **Npm**: 7 or higher <br> **Yarn**: 1 or higher

<br><br>

## Install

```shell
pnpm dlx install-peerdeps @mrjadeja/typescript -P -D -x "pnpm dlx install-peerdeps @mrjadeja/typescript-react -P -D"
```

```shell
npm exec install-peerdeps @mrjadeja/typescript -- -D -x "npm exec install-peerdeps @mrjadeja/typescript-react -- -D"
```

```shell
yarn dlx install-peerdeps @mrjadeja/typescript -Y -D -x "yanr dlx install-peerdeps @mrjadeja/typescript-react -Y -D"
```

<br><br>

## Setup

1. Create your project with vite cli.

```shell
pnpm create vite@latest
```

- Select `react` and `typescript`.

2. Update `tsconfig.json` and `vite.config.ts`.

<br>

> tsconfig.json

- Remove everything and add below json

```json
{
  "extends": "@mrjadeja/vishesh-typescript-react",
  // your other config / overrides
  "compilerOptions": {
    // your other compiler options
  }
}
```

<br>

> vite.config.ts

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

Add scripts to check or build your code

```diff
# package.json

{
# // your other config
  "scripts": {
#   // your other scripts
+   "check:typescript": "tsc",
  },
}
```

<br><br>

## Basic usage

> Check the typescript

```shell
pnpm check:typescript
```

```shell
pnpm publish
```

<br><br><br><br>

---

_Last updated on: <kbd>05-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
