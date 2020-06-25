const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Cart API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, cart, item, customer, offer

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

  describe('# RiSE Channel Cart API Dependencies', () => {

    it('## Should Create a Customer for Cart Testing', (done) => {

      rise.channelCustomer.create({
        // channel_uuid: channel_uuid,
        accepts_marketing: true,
        address_shipping: {
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        },
        address_billing: {
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        }
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCustomer')
          // assert.equal(_res.event_type, EVENTS.CUSTOMER_CREATED)
          customer = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('## Should Get an Offer for Cart Testing', (done) => {

      rise.channelOffer.listPublic({
        // channel_uuid: channel_uuid
      }, {
        query: {
          limit: 1
        }
      })
        .then(_res => {
          offer= _res.data[0]
          assert.equal(_res.list, 'ChannelOffer')
          assert.ok(offer)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

  })

  describe('## RiSE Channel Cart API Methods', () => {

    it('### Should Create a Cart', (done) => {

      rise.channelCart.create({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart')
          // assert.equal(_res.event_type, EVENTS.CART_CREATED)
          cart = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it('### Should Update a Cart', (done) => {

      rise.channelCart.update({
        // channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        notes: 'Well what do we have here?',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart')
          // assert.equal(_res.event_type, EVENTS.CART_UPDATED)

          cart = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it('### Should set Billing Address on a Cart', (done) => {

      rise.channelCart.setAddressBilling({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        address_1: '1600 Pennsylvania Ave NW',
        address_2: '',
        address_3: '',
        company: '',
        city: 'Washington',
        province_code: 'DC',
        country_code: 'US',
        postal_code: '20500',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_billing')
          // assert.equal(_res.event_type, EVENTS.CART_BILLING_ADDRESS_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get Billing Address of Cart', (done) => {

      rise.channelCart.getAddressBilling({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_billing')
          assert.equal(_res.action, ACTIONS.GET_CART_BILLING_ADDRESS)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should set Shipping Address on a Cart', (done) => {

      rise.channelCart.setAddressShipping({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        address_1: '1600 Pennsylvania Ave NW',
        address_2: '',
        address_3: '',
        company: '',
        city: 'Washington',
        province_code: 'DC',
        country_code: 'US',
        postal_code: '20500',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_shipping')
          // assert.equal(_res.event_type, EVENTS.CART_SHIPPING_ADDRESS_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get Shipping Address of Cart', (done) => {

      rise.channelCart.getAddressShipping({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_shipping')
          assert.equal(_res.action, ACTIONS.GET_CART_SHIPPING_ADDRESS)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should set Customer on a Cart', (done) => {

      rise.channelCart.setCustomer({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.customer')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get Customer of a Cart', (done) => {

      rise.channelCart.getCustomer({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.customer')
          assert.equal(_res.action, ACTIONS.GET_CART_CUSTOMER)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Should set Fulfillment on a Cart', (done) => {

      rise.channelCart.setFulfillmentDetails({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.fulfillment_details')
          // assert.equal(_res.event_type, EVENTS.CART_FULFILLMENT_DETAILS_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should get Fulfillment of a Cart', (done) => {

      rise.channelCart.getFulfillmentDetails({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.fulfillment_details')
          assert.equal(_res.action, ACTIONS.GET_CART_FULFILLMENT_DETAILS)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should set Payment on a Cart', (done) => {

      rise.channelCart.setPaymentDetails({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.payment_details')
          // assert.equal(_res.event_type, EVENTS.CART_PAYMENT_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should get Payment of a Cart', (done) => {

      rise.channelCart.getPaymentDetails({

      }, {
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.payment_details')
          assert.equal(_res.action, ACTIONS.GET_CART_PAYMENT_DETAILS)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should add Shipping Line on a Cart', (done) => {

      rise.channelCart.addShippingLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it('### Should remove Shipping Line on a Cart', (done) => {

      rise.channelCart.removeShippingLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Shipping Lines on a Cart', (done) => {

      rise.channelCart.listShippingLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_shipping')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it('### Should add Tax Line on a Cart', (done) => {

      rise.channelCart.addTaxLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it('### Should remove Tax Line on a Cart', (done) => {

      rise.channelCart.removeTaxLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Tax Lines on a Cart', (done) => {

      rise.channelCart.listTaxLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_taxes')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it('### Should add Override Line on a Cart', (done) => {

      rise.channelCart.addOverrideLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it('### Should remove Override Line on a Cart', (done) => {

      rise.channelCart.removeOverrideLine([{
        name: 'test',
        price: 100
      }], {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Override Lines on a Cart', (done) => {

      rise.channelCart.listOverrideLines({

      }, {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {

          console.log('brk cart', _res)
          assert.equal(_res.list, 'ChannelCart.lines_pricing_overrides')
          // assert.equal(_res.event_type, EVENTS.CART_CUSTOMER_SET)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get a Channel Cart', (done) => {

      rise.channelCart.get({}, {
        params: {
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart')
          assert.equal(_res.action, ACTIONS.GET_CART)

          cart = _res.data

          console.log('brk cart', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should List Channel Carts', (done) => {

      rise.channelCart.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCart')
          assert.equal(_res.action, ACTIONS.LIST_CARTS)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk cart', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    describe('### RiSE Channel Cart Item API Methods', () => {

      it('#### Should create a Channel Cart\'s item', (done) => {
        rise.channelCartItem.create({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          offer_uuid: offer.offer_uuid,
          variant_uuid: offer.variant_default_uuid,
          quantity: 1,
          notes: 'Who you gonna call?'
        })
          .then(_res => {
            item = _res.data
            assert.equal(_res.object, 'ChannelCartItem')
            assert.ok(item)

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('#### Should update a Channel Cart\'s item', (done) => {
        rise.channelCartItem.update({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          item_uuid: item.item_uuid,
          // quantity: 2,
          notes: 'Looks like I live here now'
        })
          .then(_res => {
            item = _res.data
            assert.equal(_res.object, 'ChannelCartItem')
            assert.ok(item)

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            console.log(err)
            done(err)
          })
      })

      it.skip('#### Should remove a Channel Cart\'s item', (done) => {
        rise.channelCartItem.remove({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          item_uuid: item.item_uuid
        })
          .then(_res => {
            item = _res.data
            assert.equal(_res.object, 'ChannelCartItem')
            assert.ok(item)

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('#### Should bulk create Channel Cart\'s items', (done) => {
        rise.channelCartItem.bulkCreate(
          [
            {
              offer_uuid: offer.offer_uuid,
              // variant_uuid: offer.variant_default_uuid,
              quantity: 1,
              notes: 'Who you gonna call?'
            }
          ], {
            params: {
              channel_uuid: channel_uuid,
              cart_uuid: cart.cart_uuid,
            }
          })
          .then(_res => {
            item = _res.data[0]

            assert.equal(_res.list, 'ChannelCartItem')
            assert.ok(item)

            console.log('brk cart items', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('#### Should list a Channel Cart\'s items', (done) => {
        rise.channelCartItem.list({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid
        })
          .then(_res => {
            item = _res.data[0]
            assert.equal(_res.list, 'ChannelCartItem')
            assert.equal(_res.action, ACTIONS.LIST_CART_ITEMS)
            assert.ok(item)

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('#### Should get a Channel Cart\'s item', (done) => {
        rise.channelCartItem.get({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          item_uuid: item.item_uuid
        })
          .then(_res => {
            item = _res.data
            assert.equal(_res.object, 'ChannelCartItem')
            assert.equal(_res.action, ACTIONS.GET_CART_ITEM)
            assert.ok(item)

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })
    })

    it.skip('## Should Checkout Cart', (done) => {

      rise.channelCustomer.checkout({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.deepEqual(_res.includes, [
            'ChannelCart',
            'ChannelOrder'
          ])
          // assert.equal(_res.event_type, EVENTS.CUSTOMER_CREATED)
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
