# Contributing

Thanks for your interest in contributing to Vishesh. Contributions are welcome! 🤗<br>
We appreciate bug reports, feature requests, code improvements, and other forms of contribution. <br>
To contribute to this project, Please take a moment to review this document **before submitting a pull request**.

<br><br>

## Reporting Issues

If you encounter any issues or bugs, please [create an issue][issue] on our GitHub repository. Provide as much detail as possible to help us reproduce and identify the problem.

<br><br>

## Feature Requests

If you have an idea for a new feature or enhancement, feel free to create [a feature request][discussion] on our GitHub repository. Describe the feature or enhancement you would like to see and provide any additional context or examples.

<br><br>

## Pull Requests

We welcome pull requests!

**Please ask first before starting work on any significant new features or bug fix.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors to first [discuss][pull] it.

<br><br>

## Contribute

1\. [Fork][fork] the repository. <br>
2\. Create an [Issue][issue] or [Feature Request][discussion] if not exist. <br>
3\. Branch naming conventions

- Name must be in lowercase
- Name only contain alphanumericals (<kbd>A-Z</kbd>, <kbd>a-z</kbd> and <kbd>0-9</kbd>).
- Must use Hypen (`-`) as seperator
- Name must start with the type of change
  - `feat` - adding new feature
  - `bug` - fixing bug
  - `other` - neither feature nor bug
- Followed by unique identifier of the pakcage
  - `pkg-001` - current package id
  - ⚠️ if changes are in multiple packages then use id of the most significant package
  - [List of the package ids][list-uid]
- Followed by github issue id

  > For example, <br>
  > If issue (_feature request_) url is https://github.com/mrjadeja/vishesh/issues/11, <br>
  > then your branch name must be `feat-pkg-001-11`

4\. Create a new branch for your changes from the `dev`. <br>

- ```shell
  git checkout -b <branch-name> dev
  ```

5\. Make your code changes in the new branch. <br>
6\. Ensure your code adheres to the project's coding style and conventions. <br>

- ```shell
    pnpm lint
  ```

7\. Commit your changes and push the branch to your forked repository. <br>
8\. Submit a pull request from your branch to the main repository (_`dev` branch_). <br><br>

**A project maintainer will review your pull request, provide feedback if necessary, and merge it once it meets the project's requirements.**

<br><br>

## Code Style and Conventions

Follow the existing code style and conventions used in the project. Pay attention to naming conventions, formatting, and documentation standards. <br> <br>

Please run below script to check your code against our code formatting rules:

```shell
pnpm lint
```

To automatically fix any style violations in your code, you can run:

```shell
pnpm fix:lint
```

<br><br>

## License

By contributing to this project, you acknowledge and agree that any contributions you make will be subject to the terms outlined in the project's [LICENSE][license] file.

<br><br>

---

Reference was taken from [Tailwindcss][tailwind-ref] 💖.

_Last updated on Aug 26, 2023_

[fork]: https://github.com/mrjadeja/vishesh/fork "Fork the repository"
[issue]: https://github.com/mrjadeja/vishesh/issues "Create an issue"
[discussion]: https://github.com/mrjadeja/vishesh/discussions/new?category=ideas "Discussion on new feature"
[pull]: https://github.com/mrjadeja/vishesh/discussions/new?category=pull-request "Pull Request discussion"
[list-uid]: https://github.com/mrjadeja/vishesh/blob/main/UID_LIST.md "List of packages unique identifier"
[license]: https://github.com/mrjadeja/vishesh/blob/main/LICENSE "Read license"
[tailwind-ref]: https://github.com/tailwindlabs/tailwindcss/blob/master/.github/CONTRIBUTING.md "Tailwindcss contributing document"
