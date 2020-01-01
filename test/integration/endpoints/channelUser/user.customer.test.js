const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel User Customer API', () => {

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

    describe('Dependencies', () => {

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
    })

    describe('Methods', () => {

      it('### Should List Channel User Customers', (done) => {

        rise.channelUserCustomer.list({
          // channel_uuid: channel_uuid
        }, {
          params: {
            user_uuid: user.user_uuid
          },
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
  })
})
