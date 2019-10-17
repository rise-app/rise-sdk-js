const { RiSE, EVENTS, ACTIONS } = require('../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Token Authentication API', () => {

  let rise, adminToken, adminSession

  it('should authenticate with API User', (done) => {
    rise = new RiSE({
      url: url,
      sandbox: true,
      public_key: public_key,
      private_key: private_key
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
  describe('after authenticating with api', () => {
    it('### Should validate token with req params', (done) => {
      rise.channelUser.validateToken({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.session, adminSession)
          assert.ok(_res.token, adminToken)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
