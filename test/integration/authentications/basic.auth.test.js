const { RiSE, EVENTS, ACTIONS } = require('../../../dist')
const sockets = require('@rise/sdk-js-sockets').default

const { url, adminPassword, adminIdentifier, channel_uuid, appIdentifier, private_key, public_key } = require('../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Token Authentication API', () => {

  let rise, adminToken, adminSession

  it('should authenticate App with Basic Authorization', (done) => {
    rise = new RiSE({
      url: url,
      sandbox: true,
      public_key: public_key,
      private_key: private_key,
      sockets: sockets
    })

    const basic = Buffer.from(`${adminIdentifier}:${adminPassword}`).toString('base64')

    rise.channelUser.session({
      channel_uuid
    }, {
      headers: {
        Authorization: `Basic ${basic}`
      }
    })
      .then(res => {
        adminToken = res.token
        adminSession = res.session
        done()
      })
      .catch(err => done(err))
  })
})
