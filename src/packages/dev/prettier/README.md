# Vishesh prettier base config

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

# VS code extension
esbenp.prettier-vscode
```

<br><br>

## Install

```shell
pnpm dlx install-peerdeps vishesh-prettier -P -D
```

```shell
npm exec install-peerdeps vishesh-prettier -- -D
```

```shell
yarn dlx install-peerdeps vishesh-prettier -Y -D
```

<br><br>

## Setup

1\. Setup [Vite project][vite] &nbsp;&nbsp;(_if not already_)

2\. Setup [Vishesh eslint][eslint] &nbsp;&nbsp;(_if not already_)

3\. Setup [Vishesh tsconfig][tsconfig] &nbsp;&nbsp;(_if not already_)

4\. Create 2 new files at the root of your repository `.prettierrc` and `.prettierignore`.

<br>

> .prettierrc

you can override [rules][prettier-opts]

```json
{
  "plugins": ["vishesh-prettier"]
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
+   "check:formatting": "prettier --check \"**/*.{js,ts,html,css,scss,json}\"",
+   "fix:formatting": "prettier --write \"**/*.{js,ts,html,css,scss,json}\""
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
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
[eslint]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/eslint/README.md "Vishesh eslint documentation"
[tsconfig]: https://github.com/mrjadeja/vishesh/blob/main/src/packages/dev/tsconfig/README.md "Vishesh tsconfig documentation"
[prettier-opts]: https://prettier.io/docs/en/options.html "Prettier rules documentation"
[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore documentation"
