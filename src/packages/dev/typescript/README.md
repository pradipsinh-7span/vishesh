# Vishesh typescript config

> CLI added soon to minimize manual setup. ✌️ <br>
> ⏳ end of September 2023

> 📺 Youtube video added soon. <br>
> ⏳ end of July 2023

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
pnpm dlx install-peerdeps @mrjadeja/vishesh-typescript -P -D
```

```shell
npm exec install-peerdeps @mrjadeja/vishesh-typescript -- -D
```

```shell
yarn dlx install-peerdeps @mrjadeja/vishesh-typescript -Y -D
```

<br><br>

## Setup

Create a new files at the root of your repository `tsconfig.json`.

<br>

> tsconfig.json

you can override [rules][tsconfig-opts]

```json
{
  "extends": "@mrjadeja/vishesh-typescript",
  "compilerOptions": {}
}
```

<br><br>

## Basic scripts

Add scripts to check your code

```diff
# package.json

{
# // your other config
  "scripts": {
#   // your other scripts
+   "check:typescript": "tsc"
  }
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

<br><br>

---

_Last updated on: <kbd>06-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[tsconfig-opts]: https://www.typescriptlang.org/tsconfig "Typescript compiler options documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
