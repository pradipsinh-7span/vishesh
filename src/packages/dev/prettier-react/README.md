# Vishesh prettier config

#### **<kbd>React.js</kbd> + <kbd>prettier-plugin-tailwindcss</kbd> + <kbd>clsx</kbd>**

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
React.js: v17 or higher
Tailwindcss: v3 or higher

# VS code extension
esbenp.prettier-vscode
```

<br><br>

## Install

```shell
# Run this scripts in sequence

1. pnpm dlx install-peerdeps vishesh-prettier -P -D
# Run the 2nd script only after 1st completes
2. pnpm dlx install-peerdeps vishesh-prettier-react -P -D
```

```shell
# Run this scripts in sequence

1. npm exec install-peerdeps vishesh-prettier -- -D
# Run the 2nd script only after 1st completes
2. npm exec install-peerdeps vishesh-prettier-react -- -D
```

```shell
# Run this scripts in sequence

1. yarn dlx install-peerdeps vishesh-prettier -Y -D
# Run the 2nd script only after 1st completes
2. yarn dlx install-peerdeps vishesh-prettier-react -Y -D
```

<br><br>

## Setup

1\. Setup [Vishesh tsconfig-react][tsconfig-react] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh eslint-react][eslint-react] &nbsp;&nbsp;(_if not already_)

3\. Setup [Tailwindcss][tailwindcss] &nbsp;&nbsp;(_if not already_)

4\. Create two new files at the root of your repository `.prettierrc` and `.prettierignore`.

<br>

> .prettierrc

you can override [options][prettier-opts]

```json
{
  "plugins": ["vishesh-prettier-react"]
}
```

<br>

> .prettierignore

- _[Reference][prettier-ignore] for ignore files_

```
.git
.next
dist
dist-ssr
node_modules
tsconfig.tsbuildinfo
types
*-lock.*
```

<br><br>

## Basic scripts

Add scripts to check formatting

```diff
# package.json

{
# // ...
  "scripts": {
#   // ...
+   "check:formatting": "prettier --check \"**/*.{ts,tsx,html,css,json}\"",
+   "fix:formatting": "prettier --write \"**/*.{ts,tsx,html,css,json}\""
  },
# // ...
}
```

<br><br>

## Basic usage

> Check the code formatting against prettier options

```shell
pnpm check:formatting
```

```shell
npm run check:formatting
```

```shell
yarn check:formatting
```

<br>

> Fix the code formatting

```shell
pnpm fix:formatting
```

```shell
npm run fix:formatting
```

```shell
yarn fix:formatting
```

<br><br>

---

_Last updated on July 23, 2023_

[pre]: #prerequisite "Prerequisite"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
[eslint-react]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/eslint-react/README.md "Vishesh eslint react documentation"
[tsconfig-react]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/tsconfig-react/README.md "Vishesh tsconfig react documentation"
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
[prettier-opts]: https://prettier.io/docs/en/options.html "Prettier rules documentation"
[tailwindcss]: https://tailwindcss.com/docs/installation/framework-guides "Setup tailwindcss"
[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore official documentation"
