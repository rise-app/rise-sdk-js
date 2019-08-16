# RiSE JS SDK

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]

Strongly typed Node SDK for RiSE

# Installation
```
npm install @rise/rise-js-sdk --save
```

# Documentation

# Notes

# Usage

## Setup
Obtain an API key, username, and password, from the RiSE Payment Platform,
and configure the RPG class.

```js
const RPG = require('@calistyle/rise-sdk-js').RPG
const rpg = new RPG({
  apiKey: 'your-api-key',
  username: 'your-username',
  password: 'your-password',
  debug: true,
  sandbox: true
})
```

## Using Promises
Every method returns a chainable promise:

```js
// Create a new customer, customer account, and then a new transaction for that customer:
rpg.customer.addCustomer({
  merchantId: 1,
  email: 'foo-customer@example.com'
}).then((customer) => {
  return rpg.customerAccount.addCustomerAccount({
    merchantId: 1,
    customerId: customer.id,
    accountToken: 'tok_visa'
  })
}).then((account) => {
  return rpg.transaction.addTransactionCC({
    merchantId: 1,
    referenceCustomerId: account.customerId,
    customerAccountId: account.id,
    amount: 1600,
    currency: 'usd'
  })
}).then((transaction) => {
  // New charge created on a new customer
}).catch((err) => {
  // Deal with an error
})
```

[npm-image]: https://img.shields.io/npm/v/@calistyle/rise-sdk-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@calistyle/rise-sdk-js
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/rise-sdk-js/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/rise-sdk-js/tree/master
[daviddm-image]: http://img.shields.io/david/CaliStyle/rise-sdk-js.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/rise-sdk-js
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/CaliStyle/rise-sdk-js.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/CaliStyle/rise-sdk-js/coverage
