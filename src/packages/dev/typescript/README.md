# Vishesh typescript config

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

```json
{
  "extends": "@mrjadeja/vishesh-typescript",
  // your other config / overrides
  "compilerOptions": {
    // your other compiler options
  }
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

<br><br><br><br>

---

_Last updated on: <kbd>05-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
