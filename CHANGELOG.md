# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0.0](https://github.com/mathiasbynens/Array.of/compare/v0.1.1...v1.0.0) - 2020-01-16

### Commits

- [Breaking] convert implementation to use es-abstract and conform to the es-shims API [`3ade017`](https://github.com/mathiasbynens/Array.of/commit/3ade017f2b5bf1576b4db911aa4cc765f87131d9)
- [meta] add `auto-changelog` [`4df2c12`](https://github.com/mathiasbynens/Array.of/commit/4df2c12ac64a0dbac94e18e14c8c6a82cc2cedb6)
- [readme] update readme, rename license file [`72b9ce9`](https://github.com/mathiasbynens/Array.of/commit/72b9ce92cc2e7491d4755be9e3e471181dba4e5d)
- [Tests] use shared travis-ci configs [`4728bff`](https://github.com/mathiasbynens/Array.of/commit/4728bffb7791e8c70049c60364445b0b85dd2e3d)
- [Breaking] add "exports" to `package.json` [`fcd2ef5`](https://github.com/mathiasbynens/Array.of/commit/fcd2ef59a1c6afe24b8ebd5e134365544ba67162)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config` [`2e001c1`](https://github.com/mathiasbynens/Array.of/commit/2e001c1090697ef24e55d1f3f3f1ff2837d5e0c1)
- [meta] create FUNDING.yml [`5176bb5`](https://github.com/mathiasbynens/Array.of/commit/5176bb511c5e938916e75cee5ea592d545122f5f)
- [Test] fix tests for modern node assert.deepEqual [`6d09224`](https://github.com/mathiasbynens/Array.of/commit/6d09224c35e8febdc4806d6b099208dffcea5bcf)
- [Tests] clean up scripts [`13dcfd1`](https://github.com/mathiasbynens/Array.of/commit/13dcfd1846d27f7f327f184937baf37cafd700e7)
- Only apps should have lockfiles [`59e5b2d`](https://github.com/mathiasbynens/Array.of/commit/59e5b2d7c72fabbcfe3c061bf6d879eaf210aa3e)
- [meta] add `safe-publish-latest` [`b71f826`](https://github.com/mathiasbynens/Array.of/commit/b71f826b33069f9c9e8f810bdc24c140a4db1c97)
- [Tests] add `npx aud` in `posttest` [`9c7a022`](https://github.com/mathiasbynens/Array.of/commit/9c7a0226235adc41ccce89536a0152019c80b14b)
- [Tests] allow node 0.9 to fail. [`4823228`](https://github.com/mathiasbynens/Array.of/commit/48232281615c7728efc655a9ab59d19b39de3fda)

## [v0.1.1](https://github.com/mathiasbynens/Array.of/compare/v0.1.0...v0.1.1) - 2016-01-05

### Merged

- [Tests] Add more node versions to test against [`#10`](https://github.com/mathiasbynens/Array.of/pull/10)
- [minor] separate feature detect from polyfill [`#8`](https://github.com/mathiasbynens/Array.of/pull/8)
- [Fix] add function name and test [`#9`](https://github.com/mathiasbynens/Array.of/pull/9)

### Fixed

- Avoid IE8’s broken `Object.defineProperty` [`#6`](https://github.com/mathiasbynens/Array.of/issues/6)

### Commits

- separate feature detect from polyfill [`04053db`](https://github.com/mathiasbynens/Array.of/commit/04053db95bc973c13d90be5d337e8b286c328e5a)
- [Tests] add `npm run lint` [`25caa2f`](https://github.com/mathiasbynens/Array.of/commit/25caa2f4a14097798b2baa03c39b1f6c38a20611)
- add more node version to test against [`c0a2f1f`](https://github.com/mathiasbynens/Array.of/commit/c0a2f1fc70879bb7d0a3acd79c645aad341565bc)
- Link to the final ES6 spec [`b1357f1`](https://github.com/mathiasbynens/Array.of/commit/b1357f139ffc0572f34b7ee5e679cbbc57d8df1f)
- Make the travis config test more version and more robust [`1f13ea5`](https://github.com/mathiasbynens/Array.of/commit/1f13ea56e4f313940bf912974e96178aab81c921)
- [Tests] skip tests that don’t apply to the environment. [`e319d47`](https://github.com/mathiasbynens/Array.of/commit/e319d475abc886e576960f2d412a00e1fcb9c3b5)
- Add guard around test for IE [`033d557`](https://github.com/mathiasbynens/Array.of/commit/033d55730cf1455b0f45c9f755e136021434658f)
- Test in Node v0.12 and io.js [`08f6127`](https://github.com/mathiasbynens/Array.of/commit/08f612700adbf832a212be81cb535fe1bc69cdc8)
- add function name and test [`0595ae0`](https://github.com/mathiasbynens/Array.of/commit/0595ae04cd90cddb32a710bc2c31f6927d743f18)
- README: Explicitly request SVG badges [`37d9c37`](https://github.com/mathiasbynens/Array.of/commit/37d9c378c8bf62bf41b311d95341b57013477124)
- Add tests-only script [`812a8b0`](https://github.com/mathiasbynens/Array.of/commit/812a8b0cbbfb61e36191dd1252ea1824870474d2)
- trailing new line [`e347df7`](https://github.com/mathiasbynens/Array.of/commit/e347df7ab6ba7813e9b1dde290395bfaba5c555f)
- Add trailing new line [`fa1647a`](https://github.com/mathiasbynens/Array.of/commit/fa1647a715837eb381387837354db7ab8bfb1c45)
- Adhere to style guide [`3084f91`](https://github.com/mathiasbynens/Array.of/commit/3084f9156e896625e8f0d1960d22a52c59d69d33)

## v0.1.0 - 2013-12-22

### Fixed

- Optimize `isConstructor` [`#3`](https://github.com/mathiasbynens/Array.of/issues/3)

### Commits

- Initial commit [`f185495`](https://github.com/mathiasbynens/Array.of/commit/f185495cb3c2216ff4ae74bd11ad89e74032df21)
- Ensure no setters are called for the indexes [`bbeef75`](https://github.com/mathiasbynens/Array.of/commit/bbeef75fc657615876ee39ada80f2af3b64d0adb)
- Implement the spec step by step [`4adaf6a`](https://github.com/mathiasbynens/Array.of/commit/4adaf6a8de240e7107412015b73abe436c013cea)
- Add more tests [`eef956b`](https://github.com/mathiasbynens/Array.of/commit/eef956bb7cc1ef662222e5c740e8bc9c80655706)
- Rename variables for optimal readability [`1b234f0`](https://github.com/mathiasbynens/Array.of/commit/1b234f0a860aaaf046412ae865b51458a2f90505)
- Add `Put(result, 'length')` [`5df180f`](https://github.com/mathiasbynens/Array.of/commit/5df180f352c04e52bebfc5f82fd54b0864ff17ea)
- Add some tests [`ea3a39d`](https://github.com/mathiasbynens/Array.of/commit/ea3a39dcf3352dca299dff7f53d6aa33489be03c)
- Revert “Optimize `isConstructor`” [`c33c0f6`](https://github.com/mathiasbynens/Array.of/commit/c33c0f6cee0df5c25e2d10f2d54a0acd78d99f9a)
- Avoid executing inherited setters in tests [`b0edbae`](https://github.com/mathiasbynens/Array.of/commit/b0edbae874a8b44e88ba10940b89160abc7bd8da)
- README: Remove warning [`6093933`](https://github.com/mathiasbynens/Array.of/commit/60939339fa290d6c05928a89d589c2c9dc0e9eed)
