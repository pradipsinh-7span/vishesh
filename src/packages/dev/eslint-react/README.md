# Vishesh ESlint config

#### **<kbd>Typescript</kbd>+ <kbd>React.js</kbd> + <kbd>Vite</kbd>**

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
React.js: v17 or higher
Tailwindcss: v3 or higher
Vite: v3 or higher
Typescript: v4 or higher

# VS code extension
dbaeumer.vscode-eslint
```

<br><br>

## Install

```shell
# Run this scripts in sequence

1. pnpm dlx install-peerdeps eslint-config-vishesh -P -D
# Run the 2nd script only after 1st completes
2. pnpm dlx install-peerdeps eslint-config-vishesh-react -P -D
```

```shell
# Run this scripts in sequence

1. npm exec install-peerdeps eslint-config-vishesh -- -D
# Run the 2nd script only after 1st completes
2. npm exec install-peerdeps eslint-config-vishesh-react -- -D
```

```shell
# Run this scripts in sequence

1. yarn dlx install-peerdeps eslint-config-vishesh -Y -D
# Run the 2nd script only after 1st completes
2. yarn dlx install-peerdeps eslint-config-vishesh-react -Y -D
```

<br><br>

## Setup

1\. Setup [Vishesh tsconfig-react][tsconfig-react] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh prettier][prettier-react] &nbsp;&nbsp;(_if not already_)

3\. Setup [Tailwindcss][tailwind] &nbsp;&nbsp;(_if not already_)

4\. Create two new files at the root of your repository `.eslintrc` and `.eslintignore`.

<br>

> .eslintrc

you can override [rules] and [other configs][configure-eslint]

```json
{
  "extends": ["vishesh-react"],
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
+   "lint": "eslint . --ext .ts,.tsx",
+   "fix:lint": "eslint . --ext .ts,.tsx --fix"
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
[tsconfig-react]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/tsconfig-react/README.md "Vishesh typescript react documentation"
[prettier-react]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/prettier-react/README.md "Vishesh prettier react documentation"
[tailwind]: https://tailwindcss.com/docs/installation/framework-guides "Setup tailwindcss"
[rules]: https://eslint.org/docs/latest/rules "Eslint rules reference"
[configure-eslint]: https://eslint.org/docs/latest/use/configure/ "Configure ESlint"
[eslint-ignore]: https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file "Eslint ignore official documentation"
