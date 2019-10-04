# RiSE JS SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Strongly typed Node SDK for RiSE. RiSE is a developer focused eCommerce Platform as a Service that gives teams the industry's finest control over the development process and integration into their existing or new applications.

# Installation

```
npm install @rise/sdk-js --save
```

# Usage

RiSE separates requests into 3 major categories:
- Command
- Event
- Action

### Commands
Commands are any type of request that will result in something being modified eg. create a user

### Event
An Event is a request listener that something has been modified eg, a user was created

### Action
An Action is a request made that does not modify anything eg, retrieve a user.

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

# Documentation
A quick start documentation, see the full documentation here.

## ChannelUser

### Commands

Create a User

```js
let user
rise.channelUser.create({
    channel_uuid: <channel_uuid>,
    name_first: 'First',
    name_last: 'Last',
    username: 'uniqueusername',
    email: 'unique_email@example.com'
}, {})
  .then((_res) => {
     user = _res.data
  })
  .catch((err) => {
    // Handle Error
  })
```

### Actions

Get a User by ID
```js
rise.channelUser.get({
    channel_uuid: <channel_uuid>,
    user_uuid: user.user_uuid
}, {})
.then((_res) => {
  user = _res.data
})
.catch((err) => {
  // Handle Error
})
```

# Notes


[npm-image]: https://img.shields.io/npm/v/@rise/sdk-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rise/sdk-js
[ci-image]: https://img.shields.io/circleci/project/github/rise-app/rise-sdk-js/master.svg
[ci-url]: https://circleci.com/gh/rise-app/rise-sdk-js/tree/master
[daviddm-image]: http://img.shields.io/david/rise-app/rise-sdk-js.svg?style=flat-square
[daviddm-url]: https://david-dm.org/rise-app/rise-sdk-js
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/rise-app/rise-sdk-js.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/rise-app/rise-sdk-js/coverage
