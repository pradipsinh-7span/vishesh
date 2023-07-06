# Vishesh typescript config

#### **<kbd>Vite</kbd> + <kbd>Library</kbd>**

<br>

> CLI added soon to minimize manual setup. ✌️ <br>
> ⏳ till the end of September 2023

> 📺 Youtube video added soon. <br>
> ⏳ till the end of July 2023

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
```

<br><br>

## Install

```shell
# Run this scripts in sequence

1. pnpm dlx install-peerdeps @mrjadeja/typescript -P -D
# Run the 2nd script only after 1st completes
2. pnpm dlx install-peerdeps @mrjadeja/typescript-lib -P -D
```

```shell
# Run this scripts in sequence

1. npm exec install-peerdeps @mrjadeja/typescript -- -D
# Run the 2nd script only after 1st completes
2. npm exec install-peerdeps @mrjadeja/typescript-lib -- -D
```

```shell
# Run this scripts in sequence

1. yarn dlx install-peerdeps @mrjadeja/typescript -Y -D
# Run the 2nd script only after 1st completes
2. yarn dlx install-peerdeps @mrjadeja/typescript-lib -Y -D
```

<br><br>

## Setup

1\. Create a folder at root of the repository with two files inside `main.ts` and `index.d.ts`.

- `lib` - a folder that contians below two files
  - `main.d.ts` - your code for the awesome library
  - `index.d.ts` - types for your code

2\. Create two new files at the root of your repository `tsconfig.json` and `vite.config.ts`.

<br>

> tsconfig.json

you can override [rules][tsconfig-opts]

```json
{
  "extends": "@mrjadeja/vishesh-typescript-lib",
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
```

<br><br>

## Basic scripts

Add scripts to check or build your code

```diff
# package.json

{
# // your other config
  "name": "vishesh-awesome-library",
  "version": "0.1.0",
  "scripts": {
#   // your other scripts
+   "check:typescript": "tsc --noEmit true --emitDeclarationOnly false",
+   "build": "vite build"
+   "publish": "pnpm build && pnpm publish --access pubilc"
  },
+ "types": "./types/vishes-preset.d.ts",
+ "main": "./dist/vishesh-preset.c.js",
+ "module": "./dist/vishesh-preset.js",
+ "exports": {
+   ".": {
+     "import": {
+       "types": "./types/vishes-preset.d.ts",
+       "default": "./dist/vishesh-preset.js"
+     },
+     "require": {
+       "types": "./types/vishes-preset.d.ts",
+       "default": "./dist/vishesh-preset.c.js"
+     }
+   }
+ },
}
```

<br><br>

## Basic usage

> Check the typescript

```shell
pnpm check:typescript
```

```shell
npm run check:typescript
```

```shell
yarn check:typescript
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

- ⚠️ This is not the complete guild to build and publish the library on npm.
- 📺 You can expect the full youtube video guide.

```shell
pnpm publish
```

```shell
npm run publish
```

```shell
yarn publish
```

<br><br>

---

_Last updated on: <kbd>07-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[vite-config]: https://vitejs.dev/config/ "Vite configuration documentation"
[tsconfig-opts]: https://www.typescriptlang.org/tsconfig "Typescript compiler options documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
