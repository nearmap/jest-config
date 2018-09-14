# jest-config
Base Jest Configuration for JavaScript projects


## Installation

```bash
npm install --save-dev
```


## Usage

Import `@nearmap/jest-config` in your `./jest.config.js` and use it as a
base for the exported configuration.
You can overwrite any settings you need to change.

```javascript
const config = require('@nearmap/jest-config');

module.exports = {
  ...config,
  setupFiles: [
    'src/testing/setup.js'
  ],
}
```


## Configuration

The base [configuration](./src/index.js) make some assumptions
about your source code and build structure:

```
project-root
  ├── jest.config.js
  ├── package.json
  ├── build
  │   └── cov
  │       ├── lcov-report
  │       │   ├── base.css
  │       │   ├── index.html
  │       │   ├── index.js.html
  │       │   ├── prettify.css
  │       │   ├── prettify.js
  │       │   ├── sort-arrow-sprite.png
  │       │   └── sorter.js
  │       └── lcov.info
  └── src
      ├── foo
      │   ├── bar.js
      │   └── bar.test.js
      ├── index.js
      └── index.test.js
```


### Tests

Tests are all files that match: `./src/**/*.test.js`.
Files in `node_modules` and `build` are ignored.


### Babel code transforms

All `.js` files are transcompiled using `babel-jest`.
Files in `node_modules` and `build` are ignored.


### Mocks

By default mocks are cleared before each test but not reset.

Timers are fake.


### Code Coverage

All files that match `src/**/*.js` must be covered fully.
Reports are put out to `build/cov/lcov-report`.

Remember, just because you have 100% branch coverage it does not mean you
have 100% use case coverage.

Do not write tests to simply get to 100% coverage.

If you find you have uncovered code, find the use case that made you
add the code. If you can't find a use case maybe you don't need the code.
