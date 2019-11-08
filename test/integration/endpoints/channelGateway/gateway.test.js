const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Gateway API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, gateway, item, customer, offer

  before((done) => {
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

  describe('# RiSE Channel Gateway API Dependencies', () => {

  })

  describe('## RiSE Channel Gateway API Methods', () => {

    it.skip('### Should Create a Gateway', (done) => {

      rise.channelGateway.create({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          // assert.equal(_res.event_type, EVENTS.GATEWAY_CREATED)
          gateway = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it.skip('### Should Update a Gateway', (done) => {

      rise.channelGateway.update({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway.gateway_uuid,
        notes: 'Well what do we have here?',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          // assert.equal(_res.event_type, EVENTS.GATEWAY_UPDATED)

          gateway = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get a Channel Gateway', (done) => {

      rise.channelGateway.get({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway.gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.GET_GATEWAY)

          gateway = _res.data

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Channel Gateways', (done) => {

      rise.channelGateway.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.LIST_GATEWAYS)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
