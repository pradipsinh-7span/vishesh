# Vishesh Preset

_The tailwind css preset to rapidly build any UI_

<br>

> 📺 Youtube video added soon. <br>
> ⏳ end of July 2023

<br>

## Topics

- [🤞 Prerequisite][pre]
- [📲 Install][install]
- [⚙️ Setup][which]
  - [🔧 Setup ESM][esm]
  - [🔧 Setup CJS][cjs]
- [✨ Features][features]
  - [Breakpoints][breakpoints]
  - [Container][container]
    - [Fixed container][fixed]
    - [Fluid container][fluid]

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

# Tailwindcss
v3 or higher
```

<br><br>

## Install

```shell
pnpm add -D @mrjadeja/vishesh-preset
```

```shell
npm i -D @mrjadeja/vishesh-preset
```

```shell
yarn add -D @mrjadeja/vishesh-preset
```

<br><br>

## Setup

1\. Setup [Tailwindcss][tailwindcss] &nbsp;&nbsp;(_if not already_)

- [upgrade to v3][migrate-to-v3] if running on v2

2\. go to your tailwind config file. then, identify which package to install by looking at the way your config file were exported. <br>
**ESM**: `export default` <br>
**CJS**: &nbsp; `module.exports`

<br>

### Setup ESM

you can extend or override [config][tailwind-config]

```diff
# tailwind.config.js

# your imports
+ import vishesh from "@mrjadeja/vishesh-preset";

# remove tailwindcss auto suggestion
- /** @type {import('tailwindcss').Config} */
# add tailwindcss + vishesh-preset auto suggestion
+ /** @type {import('@mrjadeja/vishesh-preset/types').VisheshPreset} */
  export default {
+   presets: [vishesh],
    content: [____],
    theme: {
#     //  your overide config area
      extend: {
#     // your extend config area
      }
    },
    plugins: [____]
  }
```

<br>

### Setup CJS

you can extend or override [config][tailwind-config]

```diff
# tailwind.config.cjs

# your imports

# remove tailwindcss auto suggestion
- /** @type {import('tailwindcss').Config} */
# add tailwindcss + vishesh-preset auto suggestion
+ /** @type {import('@mrjadeja/vishesh-preset/types').VisheshPreset} */
  module.exports = {
+   presets: [require("@mrjadeja/vishesh-preset")],
    content: [____],
    theme: {
#     // your overide config area
      extend: {
#       // your extend config area
      }
    },
    plugins: [____]
  }
```

<br>

---

<br>

# Features

### Vishesh was shipped with _default configurations to start_. you can configure it in your own way ✌️

<br>

> **👉 &nbsp; configure vishesh with `theme.extend`**

<br><br>

## Breakpoints

Breakpoints are more familiar word with responsive desing. So, we **disabled `screens` and added `breakpoints`.**
<br>

These breakpoints are not just regular breakpoints. Vishesh generates a bunch of other breakpoint variants. <br>
It has `minimum` + `maximum` + `range` variants included.
<br><br>

Detailed explaination was given below the codeblock. 👇

```diff
# Default breakpoints are in pixels
{
  content: [____],
  theme: {
-    screens: {
-      zero: 0,
-      xs: 375,
-      sm: 640,
-      md: 768,
-      lg: 1024,
-      xl: 1280,
-      mac: 1440,
-      max: 1920,
-    },
    extend: {
#     // defaults values are there
#     // no need to add
#     // just for reference
+     breakpoints: {
+       zero: 0,
+       xs: 375,
+       sm: 640,
+       md: 768,
+       lg: 1024,
+       xl: 1280,
+       mac: 1440,
+       max: 1920,
+     },
    }
  },
  plugins: [____]
}
```

<br>

### **The Why❓**

We all experienced that minimum or maximum breakpoints are not enough. if we are using tailwind then, we need to manually create such breakpoints.<br>

Less often, we are in a situation that for mobile we have one design, then on tablet we have other design. but, on desktop we have design that is similar to mobile. **we have to reset the styles 😓.**
<br><br>

### **The Solution** ✌️

<br>

\*_For below table, reference is taken from the default breakpoints_

| Type    | Variant     | Media Query                                          |
| :------ | :---------- | :--------------------------------------------------- |
| Minimum | `xs:`       | `@media (min-width: 375px)`                          |
|         | `sm:`       | `@media (min-width: 640px)`                          |
|         | `md:`       | `@media (min-width: 768px)`                          |
|         | `lg:`       | `@media (min-width: 1024px)`                         |
|         | `xl:`       | `@media (min-width: 1280x)`                          |
|         | `mac:`      | `@media (min-width: 1440px)`                         |
|         | `max:`      | `@media (min-width: 1920px)`                         |
| &nbsp;  |             |                                                      |
| Maximum | `zero-xs:`  | `@media (min-width: 0px) and (max-width: 374px)`     |
|         | `zero-sm:`  | `@media (min-width: 0px) and (max-width: 639px)`     |
|         | `zero-md:`  | `@media (min-width: 0px) and (max-width: 767px)`     |
|         | `zero-lg:`  | `@media (min-width: 0px) and (max-width: 1023px)`    |
|         | `zero-xl:`  | `@media (min-width: 0px) and (max-width: 1279x)`     |
|         | `zero-mac:` | `@media (min-width: 0px) and (max-width: 1439px)`    |
|         | `zero-max:` | `@media (min-width: 0px) and (max-width: 1919px)`    |
| &nbsp;  |             |                                                      |
| Range   | `xs-sm:`    | `@media (min-width: 375px) and (max-width: 639px)`   |
|         | `lg-mac:`   | `@media (min-width: 1024px) and (max-width: 1439px)` |
|         | `md-max:`   | `@media (min-width: 768px) and (max-width: 1919px)`  |
|         | ...         | and so on...                                         |
|         |             |                                                      |

\*_List of all availabe ranges_

|           |           |           |           |           |            |
| --------- | --------- | --------- | --------- | --------- | ---------- |
| `xs-sm:`  | `sm-md:`  | `md-lg:`  | `lg-xl:`  | `xl-mac:` | `mac-max:` |
| `xs-md:`  | `sm-lg:`  | `md-xl:`  | `lg-mac:` | `xl-max:` |            |
| `xs-lg:`  | `sm-xl:`  | `md-mac:` | `lg-max:` |           |            |
| `xs-xl:`  | `sm-mac:` | `md-max:` |           |           |            |
| `xs-mac:` | `sm-max:` |           |           |           |            |
| `xs-max:` |           |           |           |           |            |

<br>

### Basic Usage

```js
class="sm:p-5 zero-md:bg-red-500 sm-md:p-4"
```

<br>

---

<br><br>

## Container

A container in responsive web design is a wrapper element that provides a structured and adaptable layout for content. <br>
Tailwind has a container. but, it is very limited. <br><br>

> ⚠️ Vishesh container is tightly bounded with `breakpoints`. so, it only generates container classes for breakpoints that's defined in the configurations.

<br>

There are two types of containers: <br>

1. Fixed <br>
   It is a container with a predetermined width that adjusts its size at every breakpoint. This enables the layout to seamlessly adapt to various screen sizes while preserving a consistent width within each breakpoint, ensuring a cohesive and visually appealing design across different devices. <br>

2. Fluid <br>
   It dynamically adapts its width to fit the available space, while simultaneously adjusting its padding at different breakpoints. This ensures that the container scales proportionally, maintains a flexible layout, and retains consistent spacing and alignment. <br>

<br>

### **Setup**

```diff
# Default breakpoints are in pixels
{
  content: [____],
  theme: {
-   container: {
-     center: true,
-     padding: {
-       DEFAULT: '1rem',
-       sm: '2rem',
-       lg: '4rem',
-       xl: '5rem',
-       '2xl': '6rem',
-     },
-   },
    extend: {
#     // defaults values are there
#     // no need to add
#     // just for reference
+     container: {
+       mode: "fixed",
+       center: true,
+       initialPadding: {
+         active: true,
+         value: 16,
+         resetOn: "sm"
+       },
+       spacing: {
+         xs: 16,
+         sm: 28,
+         md: 40,
+         lg: 64,
+         xl: 80,
+         mac: 128
+       }
+     }
    }
  },
  plugins: [____]
}
```

<br><br>

### **Container Configurations**

The container configurations allow you to customize the behavior and appearance of the container component. <br><br>

| Configuration  | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| mode           | Determines the container mode: `fixed` or `fluid`.                                                   |
| center         | Determines if the container should be centered: `true` or `false` (only applicable in `fixed` mode). |
| initialPadding | Configures the initial padding of the container.                                                     |
| spacing        | Defines the maximum width of the container at different breakpoints.                                 |
|                |                                                                                                      |

<br>

### Mode

- `fixed`: Generates a container with a fixed width that adjusts its size at different breakpoints.
- `fluid`: Generates a container that dynamically adapts its width to fit the available space.

### Center

- `true`: Creates a centered container with equal margins on both sides (only applicable in `fixed` mode).
- `false`: Generates separate classes for left, center, and right alignment.

### Initial Padding

- `active`: Determines if the initial padding is active or not.
- `value`: Specifies the value of the initial padding in pixels.
- `resetOn`: Specifies the breakpoint where the initial padding should be reset.

### Spacing

- Defines the width of the container at different breakpoints

<br>

---

<br>

```css
/* vishesh generates base container class as below */

.container {
  width: 100%;
  display: block;
  /* if center is true */
  margin-left: auto;
  margin-right: auto;
  /* if initialPading */
  /* active: true */
  /* value: 16 */
  /* resetOn: "xs" */
  @media (max-width: 375px) {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

---

<br><br>

## Fixed container

\*_please refer_ [breakpoints][breakpoints] <br>
**breakpoint - (2 \* spacing) = container max width**

| Class           | spacing | <375px | ≥375px | ≥640px | ≥768px | ≥1024px | ≥1280px | ≥1440px | ≥1920px |
| :-------------- | :------ | :----- | :----- | :----- | :----- | :------ | :------ | :------ | :------ |
| `container`     | 0       | 100%   | 100%   | 100%   | 100%   | 100%    | 100%    | 100%    | 100%    |
| `container-xs`  | 16      | 100%   | 343px  | 584px  | 688px  | 896px   | 1120px  | 1184px  | 1184px  |
| `container-sm`  | 28      | 100%   | 100%   | 584px  | 688px  | 896px   | 1120px  | 1184px  | 1184px  |
| `container-md`  | 40      | 100%   | 100%   | 100%   | 688px  | 896px   | 1120px  | 1184px  | 1184px  |
| `container-lg`  | 64      | 100%   | 100%   | 100%   | 100%   | 896px   | 1120px  | 1184px  | 1184px  |
| `container-xl`  | 80      | 100%   | 100%   | 100%   | 100%   | 100%    | 1120px  | 1184px  | 1184px  |
| `container-mac` | 128     | 100%   | 100%   | 100%   | 100%   | 100%    | 100%    | 1184px  | 1184px  |

<br>

_If center is set to false, the following classes are generated:_ <br>
`container-left` - Aligns the container to the left. <br>
`container-center` - Centers the container horizontally. <br>
`container-right` - Aligns the container to the right. <br><br>

```css
/* Vishesh generates container-none class */
/* to reset the fixed container */

.container-none {
  width: initial;
  margin-left: unset;
  margin-right: unset;
  max-width: unset;
  display: initial;
}
```

<br>

> 🚨 **Please consider [css specificity][specificity] when using `container-none`**

<br>

### Basic usage

```js
class="container container-md"
```

<br>

---

<br><br>

## Fluid container

\*_please refer_ [breakpoints][breakpoints] <br>
**100% - (2 \* spacing) = container width**

| Class           | spacing | <375px | ≥375px      | ≥640px      | ≥768px      | ≥1024px      | ≥1280px      | ≥1440px      | ≥1920px      |
| :-------------- | :------ | :----- | :---------- | :---------- | :---------- | :----------- | :----------- | :----------- | :----------- |
| `container`     | 0       | 100%   | 100%        | 100%        | 100%        | 100%         | 100%         | 100%         | 100%         |
| `container-xs`  | 16      | 100%   | 100% - 32px | 100% - 56px | 100% - 80px | 100% - 128px | 100% - 160px | 100% - 256px | 100% - 256px |
| `container-sm`  | 28      | 100%   | 100%        | 100% - 56px | 100% - 80px | 100% - 128px | 100% - 160px | 100% - 256px | 100% - 256px |
| `container-md`  | 40      | 100%   | 100%        | 100%        | 100% - 80px | 100% - 128px | 100% - 160px | 100% - 256px | 100% - 256px |
| `container-lg`  | 64      | 100%   | 100%        | 100%        | 100%        | 100% - 128px | 100% - 160px | 100% - 256px | 100% - 256px |
| `container-xl`  | 80      | 100%   | 100%        | 100%        | 100%        | 100%         | 100% - 160px | 100% - 256px | 100% - 256px |
| `container-mac` | 128     | 100%   | 100%        | 100%        | 100%        | 100%         | 100%         | 100% - 256px | 100% - 256px |

<br>

```css
/* Vishesh generates container-none class */
/* to reset the fluid container */

.container-none {
  width: initial;
  padding-left: unset;
  padding-right: unset;
  display: initial;
}
```

<br>

> 🚨 **Please consider [css specificity][specificity] when using `container-none`**

<br>

### Basic usage

```js
class="container container-md"
```

<br><br>

---

_Last updated on: <kbd>07-07-2023</kbd>_

[pre]: #prerequisite "Prerequisite"
[tailwindcss]: https://tailwindcss.com/docs/installation/framework-guides "Setup tailwindcss"
[tailwind-config]: https://tailwindcss.com/docs/configuration#configuration-options "Tailwindcss configuration documentation"
[migrate-to-v3]: https://tailwindcss.com/docs/upgrade-guide "Migrate tailwind to v3 from v2"
[install]: #install "Install"
[which]: #setup "Setup"
[esm]: #setup-esm "Setup es modules"
[cjs]: #setup-cjs "Setup common js"
[features]: #features "Features"
[breakpoints]: #breakpoints "Breakpoints"
[container]: #container "Container"
[fixed]: #fixed-container "Fixed container"
[fluid]: #fluid-container "Fluid container"
[specificity]: https://www.youtube.com/watch?v=c0kfcP_nD9E "CSS Specificity"
