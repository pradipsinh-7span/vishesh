# Vishesh prettier config react

<br>

## **<kbd>prettier-plugin-tailwindcss</kbd> + <kbd>clsx</kbd>**

<br>

> CLI added soon to minimize manual setup. ✌️

<br>

_Last updated on: <kbd>03-07-2023</kbd>_

<br>

## Topics

- [📲 Install][install]
- [⚙️ Setup][setup]
- [🦾 Basic Scripts][scripts]
- [▶️ Basic Usage][usage]

<br><br>

## Install

```shell
pnpm dlx install-peerdeps @mrjadeja/prettier -P -D -x "pnpm dlx install-peerdeps @mrjadeja/prettier-react -P -D"
```

```shell
npm exec install-peerdeps @mrjadeja/prettier -- -D -x "npm exec install-peerdeps @mrjadeja/prettier-react -- -D"
```

```shell
yarn dlx install-peerdeps @mrjadeja/prettier -Y -D -x "yanr dlx install-peerdeps @mrjadeja/prettier-react -Y -D"
```

<br><br>

## Setup

Create 2 new files at the root of your repository `.prettierrc` and `.prettierignore`.

<br>

> .prettierrc

```json
{
  "plugins": ["@mrjadeja/vishesh-prettier-react"]
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

> Fix the code formatting

```shell
pnpm fix:formatting
```

[prettier-ignore]: https://prettier.io/docs/en/ignore.html "Prettier ignore official documentation"
[install]: #install "Install"
[setup]: #setup "Setup"
[scripts]: #basic-scripts "Basic Scripts"
[usage]: #basic-usage "Basic Usage"
