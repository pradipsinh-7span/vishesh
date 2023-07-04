# Vishesh typescript config for library

<br>

> CLI added soon to minimize manual setup. ✌️

<br>

_Last updated on: <kbd>03-07-2023</kbd>_

<br>

## Topics

- [📲 Install][install]
- [⚙️ Setup][setup]
- [🦾 Basic Scripts][scripts]
- [▶️ Basic Usage][usage]

<br><br>

## Install

```shell
pnpm dlx install-peerdeps @mrjadeja/typescript -P -D -x "pnpm dlx install-peerdeps @mrjadeja/typescript-lib -P -D"
```

```shell
npm exec install-peerdeps @mrjadeja/typescript -- -D -x "npm exec install-peerdeps @mrjadeja/typescript-lib -- -D"
```

```shell
yarn dlx install-peerdeps @mrjadeja/typescript -Y -D -x "yanr dlx install-peerdeps @mrjadeja/typescript-lib -Y -D"
```

<br><br>

## Setup

1. Create a folder at root of the repository with 2 files inside `main.ts` and `index.d.ts`.

- `lib` - a folder that contians below two files
  - `main.d.ts` - your code for the awesome library
  - `index.d.ts` - types for your code

2. Create 2 new files at the root of your repository `tsconfig.json` and `vite.config.ts`.

<br>

> tsconfig.json

```json
{
  "extends": ["@mrjadeja/vishesh-typescript-lib"],
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
+   "check:typescript": "tsc --noEmit=true --emitDeclarationOnly=false",
+   "build": "vite build"
+   "publish": "pnpm build && pnpm publish --access pubilc"
  },
+ "main": "./dist/vishesh-preset.c.js",
+ "module": "./dist/vishesh-preset.js",
+ "types": "./types/vishes-preset.d.ts",
+ "exports": {
+   ".": {
+     "import": {
+       "default": "./dist/vishesh-preset.js",
+       "types": "./types/vishes-preset.d.ts"
+     },
+     "require": {
+       "default": "./dist/vishesh-preset.c.js",
+       "types": "./types/vishes-preset.d.ts"
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

<br>

> Build the library

```shell
pnpm build
```

<br>

> Publish the library

- ⚠️ This is not the complete guild to build and publish the library on npm.
- 📺 You can expect full youtube video guide till current month end (July 2023).

```shell
pnpm publish
```

[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
