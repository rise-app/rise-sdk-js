
![RiSE Logo][logo]

# RiSE JavaScript/TypeScript SDK

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
#### Connecting As an application
You can connect your applicatoin on the backend by authenticating it and then updating your application state with the token/session provided. This is useful when you are doing some grunt work.

```js
// Create a new instance
const rise = new RiSE({
  sandbox: true,
  public_key: <public_key>,
  private_key: <private_key>
})

// Store the state specific token and session
let applicationToken, applicationSession

// Authenticate for later requests by the API
rise.authenticateApiUser(
  <channel_uuid>,
  <applicationIdentifier>,
  <applicationPassword>
)
  .then(res => {
    applicationToken = res.token
    applicationSession = res.session
  })
  .catch(err => console.log)
})

```

#### Connecting for one request
Unlike connecting with an application, you should probably forward your user's information to make the request. This is better for analytics and allows for information to be specific for the user requesting information.

```js
const rise = new RiSE({
  sandbox: true,
  public_key: <public_key>
})

rise.<endpoint>.<method>({}, {
  session: <session>,
  token: <token>
})
  .then(res => {

  })
  .catch(err => console.log)
})

```

#### Connecting With Sockets
RiSE also let's you do everything through 2-way sockets either in a browser or your node.js application.

```js
import sockets from '@rise/sdk-js-sockets'
// Create a new instance
const rise = new RiSE({
  sandbox: true,
  public_key: <public_key>,
  private_key: <private_key>,
  sockets: sockets
})

```

## Setup

# Documentation
A quick start documentation, see the full documentation here.

## Responses
Every response from RiSE will include certain properties:

`data` : <Object> An array of objects or an object

Occasionally, the responses will also include:

`token`: <String> the JWT token to use on the next request

`session`: <String> an optional session uuid to use on the next request if no token was provided.

`url` : <String> the canonical endpoint to retrieve the obejct or list again

`urls` : <String[]> the canonical endpoints to retrieve the objects again

`populated`: <Object> an object of properties that were expanded in the response

If the Request was a command, the response will be an event and will also include:

`event_type`: <String> the event name that was generated from the command.

If the Request was an action, the response will also include:

`action`: <String> the action performed

If the Request was for a single object, the response will include:

`object`: <String> the type of the object in the data attribute

If the Request was for multiple objects, the response will include:

`includes`: <String[]> the types of the object in the data attribute

If the Request was for a list of like objects, the response will include:

`list`: <String> the type of like objects in the data attribute 

`limit`: <Number> the number of potential objects in the data attribute

`offset`: <Number> the number from 0 of the total objects in a list

`total`: <Number> total amount of objects that meets the query criteria

`query`: <Object> calculated query

`sort`: <Object> describing how the list is sorted

If this is slightly confusing, don't worry, as each response will always have a `data` property with what you'd typically expect, the other properties are syntactical sugar to be more pragmatic with the responses.

## Example of using ChannelUser

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
}, {
// If you used the authenticateApiUser endpoint, then you don't need to specifiy the token or session, since that will be added to the request automatically.
  token: <token>,
  session: <session>, // if you have an auth token, session isn't required, as that is built into the token
})
  .then((_res) => {
     user = _res.data
    // _res.event_type
    // _res.object
    // _res.url
    // ? _res.session
    // ? _res.token
  })
  .catch((err) => {
    // Handle Error
  })
```

Alternatively, you can pass parameters, query, body, and headers.

```js
let user
rise.channelUser.create({
  name_first: 'First',
  name_last: 'Last',
  username: 'uniqueusername', // RiSE will generate one if this is blank
  email: 'unique_email@example.com' // Required for every user
}, {
  token: <token>,
  session: <session>,
  params: {
    channel_uuid: <channel_uuid>,
  },
  query: {
    attributes: ['user_uuid', 'username', 'roles'],
    populate: ['roles']
  },
  headers: {
    'x-application-my-app-header': 'any header with an "x-application-*" can be used here and will be included in the header of requests made to 3rd party apps passed through RiSE eg. "x-application-my-app-header" will pass "my-app-header" to the third party.'
  }
})
  .then((_res) => {
     user = _res.data

    // _res.event_type
    // _res.object
    // _res.url
    // ? _res.session
    // ? _res.token
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
}, {

})
.then((_res) => {
  user = _res.data
  
  // If the session on RiSE changed, the it will be returned in the response
  if (_res.session) {
    session = _res.session
  }
  // If the token refreshed on RiSE changed, the it will be returned in the response
  if (_res.token) {
    token = _res.token
  }

})
.catch((err) => {
  // Handle Error
})
```

alternatively, Get a User by ID using params
```js
rise.channelUser.get({}, {
  token: <token>,
  params: {
    channel_uuid: <channel_uuid>,
    user_uuid: user.user_uuid
  }
})
.then((_res) => {
  user = _res.data
})
.catch((err) => {
  // Handle Error
})
```

# Notes


##### Subscribing to Commands/Events via webhooks
RiSE commands/events have a lifecycle that mimics a SAGA pattern
- dispatched
- cancelled
- committed

When a command/event is dispatched, your subscription will receive data and be able to transform/act on that data. However, your application should not persist that information until the "committed" lifecycle event has been emitted.  At anytime after a command/event has been dispatched, you may also receive a "cancelled::<command|event>", in which case you should revert any changes you made as assumptions of the state of RiSE.  Once you've received a "committed::<event>" then it's safe to assume that RiSE will not attempt to cancel the command/event. If your application goes offline, or misses the "cancelled" or "committed" event, then your application should wait 1 minute and then retrieve the current state of what you were listening for.
 
 
 
## Contributing

### Release Instructions
When the master is tagged with a release, it will automatically publish to npm, updates the Changelog and bumps the version. The SDK uses the [standard-version library](https://www.npmjs.com/package/standard-version) to manage it all.

To run a patch release: 
```bash
npm run release -- --release-as patch
``` 
and then commit to master. `git push --follow-tags origin master`

You can also test the release by running
```bash
npm run release -- --dry-run --release-as patch
``` 
 
[logo]: https://rise.store/wp-content/uploads/2019/06/rise_sized_75x150_blk-01-01-01.png "RiSE"
[npm-image]: https://img.shields.io/npm/v/@rise/sdk-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@rise/sdk-js
[ci-image]: https://img.shields.io/circleci/project/github/rise-app/rise-sdk-js/master.svg
[ci-url]: https://circleci.com/gh/rise-app/rise-sdk-js/tree/master
[daviddm-image]: http://img.shields.io/david/rise-app/rise-sdk-js.svg?style=flat-square
[daviddm-url]: https://david-dm.org/rise-app/rise-sdk-js
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/rise-app/rise-sdk-js.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/rise-app/rise-sdk-js/coverage
