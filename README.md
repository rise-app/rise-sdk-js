# RiSE JS SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Strongly typed Node SDK for RiSE. RiSE is a developer focused eCommerce Platform as a Service that gives teams the industry's finest control over the development process and integration into their existing or new applications.

# Installation

```
npm install @rise/rise-js-sdk --save
```

# Documentation

# Usage

### Getting started
As an application
```js
// Create a new instance
const rise = new RiSE({
  sandbox: true,
  public_key: <public_key>,
  private_key: <private_key>
})

// Authenticate for later requests by the API
rise.authenticateApiUser(
  <channel_uuid>,
  <adminIdentifier>,
  <adminPassword>
)
  .then(res => {
    <adminToken> = res.token
    adminSession = res.session
  })
  .catch(err => console.log)
})

```

## Setup

# Notes


[npm-image]: https://img.shields.io/npm/v/@rise/sdk-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rise/sdk-js
[ci-image]: https://img.shields.io/circleci/project/github/rise-app/rise-sdk-js/master.svg
[ci-url]: https://circleci.com/gh/rise-app/rise-sdk-js/tree/master
[daviddm-image]: http://img.shields.io/david/rise-app/rise-sdk-js.svg?style=flat-square
[daviddm-url]: https://david-dm.org/rise-app/rise-sdk-js
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/rise-app/rise-sdk-js.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/rise-app/rise-sdk-js/coverage
