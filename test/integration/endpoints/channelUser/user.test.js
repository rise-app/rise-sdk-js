const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user

  describe('## As admin/manager user', () => {
    before((done) => {
      rise = new RiSE({
        url: url,
        sandbox: true,
        public_key: public_key,
        private_key: private_key,
        globals: {
          params: {
            channel_uuid
          }
        }
      })

      rise.authenticateApiUser(
        channel_uuid,
        adminIdentifier,
        adminPassword
      )
        .then(res => {
          adminToken = res.token
          adminSession = res.session
          done()
        })
        .catch(err => done(err))
    })

    it('### Should validate token with req params', (done) => {

      rise.channelUser.validateToken({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.session, adminSession)
          assert.ok(_res.token)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should validate token with current session', (done) => {

      const rise2 = new RiSE({
        sandbox: true,
        public_key: public_key,
        private_key: private_key,
        globals: {
          params: {
            channel_uuid
          }
        }
      })

      rise2.channelUser.validateToken({
        channel_uuid: channel_uuid
      }, {
        session: adminSession,
        token: adminToken
      })
        .then(_res => {
          assert.equal(_res.session, adminSession)
          assert.ok(_res.token)
          console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Create a User', (done) => {

      const username = `sdkjstest${Math.floor((Math.random() * 100) + 1)}`

      rise.channelUser.create({
        // channel_uuid: channel_uuid,
        username: username
      })
        .then(_res => {
          user = _res.data
          // console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Update a User', (done) => {

      rise.channelUser.update({
        // channel_uuid: channel_uuid,
        user_uuid: user.user_uuid,
        name_first: 'Hello',
        name_last: 'World'
      })
        .then(_res => {
          user = _res.data
          // assert.equal(user.name_first, 'Hello')
          // assert.equal(user.name_last, 'World')

          // console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get a Channel User', (done) => {

      rise.channelUser.get({
        // channel_uuid: channel_uuid,
        user_uuid: user.user_uuid
      })
        .then(_res => {
          user = _res.data
          // assert.equal(user.name_first, 'Hello')
          // assert.equal(user.name_last, 'World')

          console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should List Channel Users', (done) => {

      rise.channelUser.list({
        // channel_uuid: channel_uuid
      }, {
        query: {
          limit: 1
        }
      })
        .then(_res => {
          // assert.equal(user.name_first, 'Hello')
          // assert.equal(user.name_last, 'World')

          console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
  describe('## As registered user', () => {
    let username, password = 'test1234567'

    before(() => {
      rise = new RiSE({
        sandbox: true,
        public_key: public_key,
        private_key: private_key,
        globals: {
          params: {
            channel_uuid
          }
        }
      })
    })

    it('### Should Register a user', (done) => {

      username = `sdkjstest${Math.floor((Math.random() * 100) + 1)}`

      rise.channelUser.register({
        channel_uuid: channel_uuid,
        username: username,
        password: password
      })
        .then(_res => {
          userSession = _res.session
          userToken = _res.token
          user = _res.data.ChannelUser

          assert.ok(userSession)
          assert.ok(userToken)

          // console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should validate token', (done) => {

      rise.channelUser.validateToken({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          assert.equal(_res.session, userSession)
          assert.ok(_res.token)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session', (done) => {

      rise.channelUser.session({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session cart (Current)', (done) => {

      rise.channelUser.sessionCart({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session customer (Current)', (done) => {

      rise.channelUser.sessionCustomer({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session roles', (done) => {

      rise.channelUser.sessionRoles({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session channel (Current)', (done) => {

      rise.channelUser.sessionChannel({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get user session channels (All Channels)', (done) => {

      // TODO test pagination
      rise.channelUser.sessionChannels({
        channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Update a user', (done) => {

      rise.channelUser.update({
        channel_uuid: channel_uuid,
        user_uuid: user.user_uuid,
        name_first: 'Hello',
        name_last: 'World'
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          user = _res.data
          // assert.equal(user.name_first, 'Hello')
          // assert.equal(user.name_last, 'World')

          // console.log('brk user', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Logout a user', (done) => {

      rise.channelUser.logout({
        // channel_uuid: channel_uuid
      }, {
        token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Login a user', (done) => {

      rise.channelUser.login({
        identifier: username,
        password: password
      }, {
        // token: userToken,
        session: userSession
      })
        .then(_res => {
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
