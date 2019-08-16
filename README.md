# NextJs boilerplate

[![Build Status](https://travis-ci.org/SerZubkov/nextjs-boilerplate.svg?branch=master)](https://travis-ci.org/SerZubkov/nextjs-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/SerZubkov/nextjs-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/SerZubkov/nextjs-boilerplate?branch=master)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Dependency Status](https://david-dm.org/SerZubkov/nextjs-boilerplate.svg)](https://david-dm.org/SerZubkov/nextjs-boilerplate)
[![devDependency Status](https://david-dm.org/SerZubkov/nextjs-boilerplate/dev-status.svg)](https://david-dm.org/SerZubkov/nextjs-boilerplate?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/SerZubkov/nextjs-boilerplate.svg)](https://greenkeeper.io/)

Set of base classes and utilities to build unobtrusive list models. 
This is abstract codebase which can be used to implement bridges to end-user frameworks (such as [Angular bridge](https://github.com/eastbanctechru/right-angled)).

## How to build the project

To build the project, follow these steps:

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. From the project folder, execute the following command to install project dependencies:

  ```shell
  yarn install
  ```
3. From the project folder, execute the following command to build the source code:

  ```shell
  yarn build
  ```
## How to run tests

You can run tests in Chrome with watch mode by executing the following command: 

  ```shell
  yarn test:watch
  ```
  or execute single run:
  
  ```shell
  yarn test
  ```

You can also use [Yarn](https://yarnpkg.com/)
