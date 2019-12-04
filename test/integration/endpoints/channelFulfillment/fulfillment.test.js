const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const {url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key} = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Fulfillment API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, fulfillment, fulfillmentItem, customer, offer

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

  describe('# RiSE Channel Fulfillment API Dependencies', () => {

  })

  describe('## RiSE Channel Fulfillment API Methods', () => {

    it.skip('### Should Create a Fulfillment', (done) => {

      rise.channelFulfillment.create({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillment')
          // assert.equal(_res.event_type, EVENTS.Fulfillment_CREATED)
          Fulfillment = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it.skip('### Should Update a Fulfillment', (done) => {

      rise.channelFulfillment.update({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment.fulfillment_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillment')


          fulfillment = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get a Channel Fulfillment', (done) => {

      rise.channelFulfillment.get({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment.fulfillment_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillment')
          assert.equal(_res.action, ACTIONS.GET_FULFILLMENT)

          fulfillment = _res.data

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Channel Fulfillments', (done) => {

      rise.channelFulfillment.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, ACTIONS.LIST_FULFILLMENTS)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Create a Fulfillment Item', (done) => {

      rise.channelFulfillmentItem.create({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment.fulfillment_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, COMMANDS.CREATE_FULFILLMENT_ITEM)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Update a Fulfillment Item', (done) => {

      rise.channelFulfillmentItem.update({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment.fulfillment_uuid,
        fulfillmentItem_uuid: item.fulfillmentItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, COMMANDS.UPDATE_FULFILLMENT_ITEM)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Destroy a Fulfillment Item', (done) => {

      rise.channelFulfillmentItem.delete({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid,
        fulfillmentItem_uuid: item.fulfillmentItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, COMMANDS.DESTROY_FULFILLMENT_ITEM)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Should Get a Fulfillment Item', (done) => {

      rise.channelFulfillmentItem.get({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid,
        fulfillmentItem_uuid: item.fulfillmentItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, ACTIONS.GET_FULFILLMENT_ITEM)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Fulfillment Items', (done) => {

      rise.channelFulfillmentItem.list({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment.fulfillment_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillment')
          assert.equal(_res.action, ACTIONS.LIST_FULFILLMENT_ITEMS)

          console.log('brk Fulfillment', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

  })
})
