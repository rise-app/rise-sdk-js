const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Auth API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, recovery

  describe('## Password Recovery', () => {

    it.skip('### Should send recovery directions and return redirect', (done) => {

      rise.channelAuth.setRecovery({
        channel_uuid: channel_uuid,
        email: ''
      })
        .then(_res => {
          assert.ok(_res.redirect)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should reset local password', (done) => {

      rise.channelAuth.recover({
        channel_uuid: channel_uuid,
        recovery: recovery
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
