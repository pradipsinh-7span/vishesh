# Vishesh tsconfig

#### **<kbd>Vite</kbd> + <kbd>Library</kbd>**

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
Vite: v3 or higher
Typescript: v4 or higher
```

<br><br>

## Install

```shell
# Run this scripts in sequence

1. pnpm dlx install-peerdeps vishesh-tsconfig -P -D
# Run the 2nd script only after 1st completes
2. pnpm dlx install-peerdeps vishesh-tsconfig-lib -P -D
```

```shell
# Run this scripts in sequence

1. npm exec install-peerdeps vishesh-tsconfig -- -D
# Run the 2nd script only after 1st completes
2. npm exec install-peerdeps vishesh-tsconfig-lib -- -D
```

```shell
# Run this scripts in sequence

1. yarn dlx install-peerdeps vishesh-tsconfig -Y -D
# Run the 2nd script only after 1st completes
2. yarn dlx install-peerdeps vishesh-tsconfig-lib -Y -D
```

<br><br>

## Setup

1\. Setup [Vishesh eslint-lib][eslint-lib] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh prettier][prettier] &nbsp;&nbsp;(_if not already_)

3\. Create a folder at root of the repository with two files inside `main.ts` and `index.d.ts`.

```shell
lib - a folder that contians below two files
  main.ts - your code for the awesome library
  index.d.ts - types for your code
```

2\. Create two new files at the root of your repository `tsconfig.json` and `vite.config.ts`.

<br>

> tsconfig.json

you can override [options][tsconfig-opts]

```json
{
  "extends": "vishesh-tsconfig-lib",
  "compilerOptions": {}
}
```

<br>

> vite.config.ts

you can override [config][vite-config]

```ts
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
          return "vishesh-awesome-lib.c.js";
        }
        return "vishesh-awesome-lib.js";
      },
      // minify whitespace is disabled for es format
      // Ref: https://vitejs.dev/config/build-options.html#build-minify
      formats: ["es", "cjs"],
    },
  },
});
```

<br><br>

## Basic scripts

Add scripts to check the code, build it and publish

```diff
# package.json

{
# // ...
  "name": "vishesh-awesome-library",
  "version": "0.1.0",
  "scripts": {
#   // ...
+   "check:ts": "tsc --noEmit true --emitDeclarationOnly false",
+   "build": "vite build"
  },
+ "types": "./types/vishesh-awesome-lib.d.ts",
+ "main": "./dist/vishesh-awesome-lib.c.js",
+ "module": "./dist/vishesh-awesome-lib.js",
+ "exports": {
+   ".": {
+     "import": {
+       "types": "./types/vishesh-awesome-lib.d.ts",
+       "default": "./dist/vishesh-awesome-lib.js"
+     },
+     "require": {
+       "types": "./types/vishesh-awesome-lib.d.ts",
+       "default": "./dist/vishesh-awesome-lib.c.js"
+     }
+   }
+ },
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

<br>

> Build the library

```shell
pnpm build
```

```shell
npm run build
```

```shell
yarn build
```

<br>

> Publish the library

⚠️ This is not the complete guild to build and publish the library on npm.

```shell
pnpm publish --access public
```

```shell
npm run publish --access public
```

```shell
yarn publish --access public
```

<br><br>

---

_Last updated on July 23, 2023_

[pre]: #prerequisite "Prerequisite"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
[eslint-lib]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/eslint-lib/README.md "Vishesh eslint library documentation"
[prettier]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/prettier/README.md "Vishesh prettier documentation"
[vite-config]: https://vitejs.dev/config/ "Vite configuration documentation"
[tsconfig-opts]: https://www.typescriptlang.org/tsconfig "Typescript compiler options documentation"
