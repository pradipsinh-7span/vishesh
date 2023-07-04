# Vishesh prettier config

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
pnpm dlx install-peerdeps @mrjadeja/vishesh-prettier -P -D
```

```shell
npm exec install-peerdeps @mrjadeja/vishesh-prettier -- -D
```

```shell
yarn dlx install-peerdeps @mrjadeja/vishesh-prettier -Y -D
```

<br><br>

## Setup

Create 2 new files at the root of your repository `.prettierrc` and `.prettierignore`.

<br>

> .prettierrc

```json
{
  "plugins": ["@mrjadeja/vishesh-prettier"]
  // your other config / overrides
}
```

<br>

> .prettierignore

- _[Reference][prettier-ignore]_

```
node_modules
.git
```

<br><br>

## Basic scripts

Add scripts to check formatting your code

```diff
# package.json

{
# // your other config
  "scripts": {
#   // your other scripts
+   "check:formatting": "prettier --check \"**/*.{ts,html,css,json}\"",
+   "fix:formatting": "prettier --write \"**/*.{ts,html,css,json}\""
  }
}
```

<br><br>

## Basic usage

> Check the code formatting against prettier rules

```shell
pnpm check:formatting
```

> Fix the code formatting

```shell
pnpm fix:formatting
```

<br><br><br><br>

---

_Last updated on: <kbd>05-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore official documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
