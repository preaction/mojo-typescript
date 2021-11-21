
# Typescript and Mojolicious

This is an example of how to get
[Typescript](https://www.typescriptlang.org) working with
[Mojolicious](https://mojolicious.org). To also get end-to-end (e2e)
tests with [Playwright](http://playwright.dev), see [kraih's Playwright
and Mojolicious](https://dev.to/kraih/playwright-and-mojolicious-21hn).

This repository includes a configuration for Typescript. Since
Typescript cannot yet bundle itself into a single file, this repository
uses [Webpack](https://webpack.js.org) to bundle the application for the
web. There are other ways to load your compiled app, but they require
ES6 modules (not well-supported) or some custom boilerplate for [AMD
modules](https://en.wikipedia.org/wiki/Asynchronous_module_definition).

# How to Run?

    $ cpanm -n --installdeps .
    ...
    $ npm i
    ...
    $ npx webpack
    ...
    $ ./myapp.pl daemon
    Web application available at http://127.0.0.1:3000

# See Also

* [Webpack installation guide](https://webpack.js.org/guides/installation/)
* [Webpack Typescript guide](https://webpack.js.org/guides/typescript/)
* [Typescript tsconfig.json guide](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
