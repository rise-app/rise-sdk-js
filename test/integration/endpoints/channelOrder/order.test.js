const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Order API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, order, item, customer, offer

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

  describe('# RiSE Channel Order API Dependencies', () => {

    it('## Should list Public Offers for Order Testing', (done) => {
      done()
    })
    it('## Should Create a Customer for Order Testing', (done) => {
      done()
    })
    it('## Should Create a Cart for Order Testing', (done) => {
      done()
    })
  })
  describe('# RiSE Channel Order API Methods', () => {
    it('## Should list Orders', (done) => {
      done()
    })

    it('## Should get Orders', (done) => {
      done()
    })

    it('## Should set Order payment details', (done) => {
      done()
    })
    it('## Should get Order payment details', (done) => {
      done()
    })
    it('## Should set Order fulfillment details', (done) => {
      done()
    })
    it('## Should get Order fulfillment details', (done) => {
      done()
    })


    it.skip('### Should add Shipping Line on a Order', (done) => {

      rise.channelOrder.addShippingLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it.skip('### Should remove Shipping Line on a Order', (done) => {

      rise.channelOrder.removeShippingLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should list Shipping Lines on a Order', (done) => {

      rise.channelOrder.listShippingLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Should add Tax Line on a Order', (done) => {

      rise.channelOrder.addTaxLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it.skip('### Should remove Tax Line on a Order', (done) => {

      rise.channelOrder.removeTaxLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should list Tax Lines on a Order', (done) => {

      rise.channelOrder.listTaxLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Should add Override Line on a Order', (done) => {

      rise.channelOrder.addOverrideLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it.skip('### Should remove Override Line on a Order', (done) => {

      rise.channelOrder.removeOverrideLine({
        name: 'test',
        price: 100
      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelOrder.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should list Override Lines on a Order', (done) => {

      rise.channelOrder.listOverrideLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          order_uuid: order.order_uuid
        }
      })
        .then(_res => {

          console.log('brk order', _res)
          assert.equal(_res.list, 'ChannelOrder.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.ORDER_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    describe('# RiSE Channel Order Item API Methods', () => {
      it('## Should list Order Items', (done) => {
        done()
      })

      it('## Should get Order Item', (done) => {
        done()
      })

      it('## Should add Order Item', (done) => {
        done()
      })
      it('## Should update Order Item', (done) => {
        done()
      })
      it('## Should remove Order Item', (done) => {
        done()
      })
      it('## Should add/remove Order Item tax lines', (done) => {
        done()
      })
      it('## Should add/remove Order Item shipping lines', (done) => {
        done()
      })
      it('## Should add/remove Order Item pricing override lines', (done) => {
        done()
      })
      it('## Should set Order Item payment details', (done) => {
        done()
      })
      it('## Should get Order Item payment details', (done) => {
        done()
      })
      it('## Should set Order Item fulfillment details', (done) => {
        done()
      })
      it('## Should get Order Item fulfillment details', (done) => {
        done()
      })
    })
  })
})
