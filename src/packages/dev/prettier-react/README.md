# Vishesh prettier config

#### **<kbd>React.js</kbd> + <kbd>prettier-plugin-tailwindcss</kbd> + <kbd>clsx</kbd>**

<br>

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

# Tools
React.js: v17 or higher
Tailwindcss: v3 or higher
Vite: v3 or higher

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

1\. Setup [React.js with Vite][vite] &nbsp;&nbsp;(_if not already_)

2\. Setup [Tailwindcss][tailwindcss] &nbsp;&nbsp;(_if not already_)

3\. Create two new files at the root of your repository `.prettierrc` and `.prettierignore`.

<br>

> .prettierrc

you can override [rules][prettier-opts]

```json
{
  "plugins": ["vishesh-prettier-react"]
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

Add scripts to check formatting your code

```diff
# package.json

{
# // your other config
  "scripts": {
#   // your other scripts
+   "check:formatting": "prettier --check \"**/*.{ts,tsx,html,css,json}\"",
+   "fix:formatting": "prettier --write \"**/*.{ts,tsx,html,css,json}\""
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

_Last updated on: <kbd>08-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[vite]: https://vitejs.dev/guide/#scaffolding-your-first-vite-project "Setup vite project"
[prettier-opts]: https://prettier.io/docs/en/options.html "Prettier rules documentation"
[tailwindcss]: https://tailwindcss.com/docs/installation/framework-guides "Setup tailwindcss"
[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore official documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
