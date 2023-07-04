# Vishesh eslint config

## **<kbd>Typescript</kbd> + <kbd>Vite</kbd>**

<br>

> CLI added soon to minimize manual setup. ✌️

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
pnpm dlx install-peerdeps @mrjadeja/eslint-config-vishesh -P -D
```

```shell
npm exec install-peerdeps @mrjadeja/eslint-config-vishesh -- -D
```

```shell
yarn dlx install-peerdeps @mrjadeja/eslint-config-vishesh -Y -D
```

<br><br>

## Setup

Create 2 new files at the root of your repository `.eslintrc` and `.eslintignore`.

<br>

> .eslintrc

```json
{
  "extends": ["@mrjadeja/vishesh"]
  // your other config / overrides
}
```

<br>

> .eslintignore

- _[Reference][eslint-ignore]_

```
node_modules
```

<br><br>

## Basic scripts

Add scripts to lint your code

```diff
# package.json

{
# // your other config
  "scripts": {
#   // your other scripts
+   "lint": "eslint . --ext .ts",
+   "fix:lint": "eslint . --ext .ts --fix"
  }
}
```

<br><br>

## Basic usage

> Check the code against eslint rules

```shell
pnpm lint
```

> Fix the code

```shell
pnpm fix:lint
```

<br><br><br><br>

---

_Last updated on: <kbd>05-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[eslint-ignore]: https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file "Eslint ignore official documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
