# Vishesh ESLint base config

#### **<kbd>Typescript</kbd> + <kbd>Vite</kbd>**

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

# VS code extension
dbaeumer.vscode-eslint
```

<br><br>

## Install

```shell
pnpm dlx install-peerdeps eslint-config-vishesh -P -D
```

```shell
npm exec install-peerdeps eslint-config-vishesh -- -D
```

```shell
yarn dlx install-peerdeps eslint-config-vishesh -Y -D
```

<br><br>

## Setup

1\. Setup [Vite project][vite] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh tsconfig][tsconfig] &nbsp;&nbsp;(_if not already_)

3\. Setup [Vishesh prettier][prettier] &nbsp;&nbsp;(_if not already_)

4\. Create two new files at the root of your repository `.eslintrc` and `.eslintignore`.

<br>

> .eslintrc

you can override [rules] and [other configs][configure-eslint]

```json
{
  "extends": ["vishesh"],
  "rules": {}
}
```

<br>

> .eslintignore

_[Reference][eslint-ignore] for ignore files_

```
.git
.husky
.next
dist
dist-ssr
node_modules
tsconfig.tsbuildinfo
types
package.json
*-lock.*
*.config.*
*.json
```

<br><br>

## Basic scripts

Add scripts to lint your code

```diff
# package.json

{
# // ...
  "scripts": {
#   // ...
+   "lint": "eslint . --ext .ts",
+   "fix:lint": "eslint . --ext .ts --fix"
  },
# // ...
}
```

<br><br>

## Basic usage

> Check the code against eslint rules

```shell
pnpm lint
```

```shell
npm run lint
```

```shell
yarn lint
```

<br>

> **Fix the code** <br>

```shell
⚠️ Stage all the files before running fix command

👉 git add .
```

```shell
pnpm fix:lint
```

```shell
npm run fix:lint
```

```shell
yarn fix:lint
```

<br><br>

---

_Last updated on July 23, 2023_

[pre]: #prerequisite "Prerequisite"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
[tsconfig]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/tsconfig/README.md "Vishesh typescript documentation"
[prettier]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/prettier/README.md "Vishesh prettier documentation"
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
[rules]: https://eslint.org/docs/latest/rules "Eslint rules reference"
[configure-eslint]: https://eslint.org/docs/latest/use/configure/ "Configure ESlint"
[eslint-ignore]: https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file "Eslint ignore file official documentation"
