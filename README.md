![Schematic depiction of a function](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Function_machine2.svg/440px-Function_machine2.svg.png)

# Functions

Collection of commonly used function based components, hooks and utils.

[![CI status](https://github.com/koendirkvanesterik/functions/workflows/ci/badge.svg?branch=main)](https://github.com/koendirkvanesterik/functions/actions?query=branch%3Amain+workflow%3Aci)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![Jest](https://img.shields.io/badge/tested%20with-jest-cc00ff.svg)](https://jestjs.io//)
[![React](https://img.shields.io/badge/based%20on-react-cc00ff.svg)](https://reactjs.org/)
[![Typescript](https://img.shields.io/badge/typed%20with-typescript-cc00ff.svg)](https://www.typescriptlang.org/)

- [About](#about)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)
- Packages
  - [`Label`](./packages/Label#readme)
- [Concepts](#concepts)

## About

In the course of developing various frontend projects it became clear that a specific set of functions (components, hooks, utils, etc.) were implemented over and over again. Implemented per project yet their respective functionality did not change, which contradicts the spirit of the ![DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). This repository was initiated in order to honor this principle - to globalize said functions and make them available across projects.
