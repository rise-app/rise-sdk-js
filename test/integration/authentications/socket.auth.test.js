const { RiSE, EVENTS, ACTIONS } = require('../../../dist')
const sockets = require('@rise/sdk-js-sockets').default

const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Socket Authentication API', () => {

  let rise, adminToken, adminSession

  it('should authenticate with Application API User', (done) => {
    rise = new RiSE({
      url: url,
      sandbox: true,
      public_key: public_key,
      private_key: private_key,
      sockets: sockets
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

  it.skip('should connect application', (done) => {
    rise.application.on('connected', (msg) => {
      done()
    })

    // rise.application.on('*', (msg) => {
    //   done()
    // })

    rise.application.connect()

    rise.application.subscribe('Channel', ['channels'])
  })
})
