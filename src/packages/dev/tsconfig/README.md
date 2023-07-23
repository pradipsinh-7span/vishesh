# Vishesh tsconfig

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
pnpm dlx install-peerdeps vishesh-tsconfig -P -D
```

```shell
npm exec install-peerdeps vishesh-tsconfig -- -D
```

```shell
yarn dlx install-peerdeps vishesh-tsconfig -Y -D
```

<br><br>

## Setup

1\. Setup [Vite project][vite] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh eslint][eslint] &nbsp;&nbsp;(_if not already_)

3\. Setup [Vishesh prettier][prettier] &nbsp;&nbsp;(_if not already_)

4\. Create a new files at the root of your repository `tsconfig.json`.

<br>

> tsconfig.json

you can override [options][tsconfig-opts]

```json
{
  "extends": "vishesh-tsconfig",
  "compilerOptions": {}
}
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
+   "check:ts": "tsc"
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
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
[eslint]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/eslint/README.md "Vishesh eslint documentation"
[prettier]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/prettier/README.md "Vishesh prettier documentation"
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
