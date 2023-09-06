# Changelog

All notable changes to this project will be documented in this file.

The format is loosely based on [Keep a Changelog][changelog],
and this project adheres to [Semantic Versioning][semver].

<br>

> `TW:` means tailwindcss

<br><br>

---

## [0.6.0] - 06-09-2023

<br>

### Improved

- #81 &nbsp;-&nbsp; fixed tailwindcss core plugins not working
  - if we disable vishesh preset core plugins, then enable back corrosponding tailwindcss core plugin
  - made vishesh preset itself function and accept plugins to be disabled in array

<br />

### Removed

- #81 &nbsp;-&nbsp; removed `vishehsCorePlugins` option from config

<br /><br />

---

## [0.5.0] - 29-08-2023

<br>

### Added

- added `visheshCorePlugins` to provide option for enabling / disabling core plugins

<br /><br />

---

## [0.4.0] - 26-08-2023

<br>

### Added

- #30 &nbsp;-&nbsp; add breakpoint variant: `only`
- #30 &nbsp;-&nbsp; add inner padding for fixed container
- #30 &nbsp;-&nbsp; add twin container

<br />

### Improved

- #30 &nbsp;-&nbsp; prevent zero from override for breakpoints and fixed container
- #30 &nbsp;-&nbsp; improve css specificity
- #30 &nbsp;-&nbsp; improve typescript
- #30 &nbsp;-&nbsp; improve lib folder and files structure
- #30 &nbsp;-&nbsp; minimize the readme

<br />

### Removed

- #30 &nbsp;-&nbsp; remove todo and POC from the code
- #30 &nbsp;-&nbsp; remove `initialPadding` for fixed container
- #30 &nbsp;-&nbsp; remove full documentaion from readme

<br /><br />

---

## [0.1.8] - 23-07-2023

<br>

### Improved

- #53 &nbsp;-&nbsp; fix references

<br /><br />

---

## [0.1.7] - 23-07-2023

<br>

### Improved

- #18 &nbsp;-&nbsp; improve documentation

<br><br>

---

## [0.1.5] - 08-07-2023

<br>

### Removed

- #21 &nbsp;-&nbsp; removed scope from package name

<br><br>

---

## [0.1.4] - 07-07-2023

<br>

### Improved

- #13 &nbsp;-&nbsp; `max:` -> `maxw:`

<br><br>

---

## [0.1.3] - 07-07-2023

<br>

### Improved

- typos in documentation

<br><br>

---

## [0.1.2] - 07-07-2023

<br>

### Improved

- documentation

<br><br>

---

## [0.1.1] - 05-07-2023

<br>

### Improved

- publish configs

<br><br>

---

## [0.0.1] - 05-07-2023

<br>

### Added

- breakpoints
  - minimum
  - maximum
  - range
- container
  - fixed
  - fluid

<br>

### Removed

- TW: screens
- TW: container

<br><br>

---

## [0.0.0] - 27-05-2023

शुभारम्भः

[0.6.0]: https://github.com/mrjadeja/vishesh/commit/6e5ad8f8...f709c3c1
[0.5.0]: https://github.com/mrjadeja/vishesh/commit/af778dea...6e5ad8f8
[0.4.0]: https://github.com/mrjadeja/vishesh/commit/51b34689...af778dea
[0.1.8]: https://github.com/mrjadeja/vishesh/commit/780a6ee8...51b34689
[0.1.7]: https://github.com/mrjadeja/vishesh/compare/72f2f1c2...780a6ee8
[0.1.5]: https://github.com/mrjadeja/vishesh/compare/ca79ae8...72f2f1c2
[0.1.4]: https://github.com/mrjadeja/vishesh/compare/eb9b099...ca79ae8
[0.1.3]: https://github.com/mrjadeja/vishesh/compare/8881f38...eb9b099
[0.1.2]: https://github.com/mrjadeja/vishesh/compare/6f06e0d...8881f38
[0.1.1]: https://github.com/mrjadeja/vishesh/commit/60e5816f...6f06e0d4 "Update docs and prepare github action workflow"
[0.0.1]: https://github.com/mrjadeja/vishesh/commit/0be58e6a...60e5816f "Initial Setup"
[0.0.0]: https://github.com/mrjadeja/vishesh/commit/0be58e6a1c46e655452249712c55dbc8f496091f "Initial commit"
[changelog]: https://keepachangelog.com/en/1.0.0/ "Keep a changelog guide"
[semver]: https://semver.org/spec/v2.0.0.html "Semantic versioning"
