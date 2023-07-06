# Vishesh prettier config

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

# VS code extension
esbenp.prettier-vscode
```

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

you can override [rules][prettier-opts]

```json
{
  "plugins": ["@mrjadeja/vishesh-prettier"]
}
```

<br>

> .prettierignore

- _[Reference][prettier-ignore]_

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
# // your other config
  "scripts": {
#   // your other scripts
+   "check:formatting": "prettier --check \"**/*.{js,ts,html,css,scss,json}\"",
+   "fix:formatting": "prettier --write \"**/*.{js,ts,html,css,scss,json}\""
  }
}
```

<br><br>

## Basic usage

> Check the code formatting against prettier rules

```shell
pnpm check:formatting
```

```shell
npm run check:formatting
```

```shell
yarn check:formatting
```

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

_Last updated on: <kbd>06-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[prettier-opts]: https://prettier.io/docs/en/options.html "Prettier rules documentation"
[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
