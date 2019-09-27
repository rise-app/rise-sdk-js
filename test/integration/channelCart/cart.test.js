const RiSE = require('../../../dist').RiSE
const EVENTS = require('../../../dist/enums').EVENTS
const ACTIONS = require('../../../dist/enums').ACTIONS

const adminIdentifier = require('../../fixtures/constants').adminIdentifier
const adminPassword = require('../../fixtures/constants').adminPassword
const channel_uuid = require('../../fixtures/constants').channel_uuid
const public_key = require('../../fixtures/constants').public_key
const private_key = require('../../fixtures/constants').private_key

const assert = require('assert')

describe('# RiSE Channel Cart API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, cart, item, customer

  before((done) => {
    rise = new RiSE({
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

  describe('# RiSE Channel Cart API Dependencies', () => {

  })

  describe('# RiSE Channel Cart API Methods', () => {

    it('## Should Create a Cart', (done) => {

      rise.channelCart.create({
        channel_uuid: channel_uuid
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
    it('## Should Update a Cart', (done) => {

      rise.channelCart.update({
        channel_uuid: channel_uuid,
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


    it('## Should set Billing Address on a Cart', (done) => {

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
          // assert.equal(_res.event_type, EVENTS.CART_ADDRESS_BILLING_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('## Should get Billing Address of Cart', (done) => {

      rise.channelCart.getAddressBilling({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_billing')
          assert.equal(_res.action, ACTIONS.GET_CART_BILLING)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('## Should set Shipping Address on a Cart', (done) => {

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
          // assert.equal(_res.event_type, EVENTS.CART_ADDRESS_SHIPPING_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('## Should get Shipping Address of Cart', (done) => {

      rise.channelCart.getAddressShipping({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.address_shipping')
          assert.equal(_res.action, ACTIONS.GET_CART_SHIPPING)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('## Should set Customer on a Cart', (done) => {

      rise.channelCart.setCustomer({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCart.customer')
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('## Should get Customer of a Cart', (done) => {

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

    it('### Should Get a Channel Cart', (done) => {

      rise.channelCart.get({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
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


    describe('## RiSE Channel Cart Item API Methods', () => {

      it.skip('#### Should create a Channel Cart\'s item', (done) => {
        rise.channelCart.createItem({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          offer_uuid: offer.offer_uuid,
          variant_uuid: offer.variant_uuid,
          quantity: 1,
          notes: 'Who you gonna call?'
        })
          .then(_res => {
            assert.equal(_res.event_type, 'channel.cart.item.created')
            assert.equal(_res.object, 'ChannelCartItem')
            item = _res.data

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('#### Should update a Channel Cart\'s item', (done) => {
        rise.channelCart.updateItem({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          item_uuid: item.item_uuid,
          quantity: 2,
          notes: 'Looks like I live here now'
        })
          .then(_res => {
            assert.equal(_res.object, 'ChannelCartItem')
            item = _res.data

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('#### Should remove a Channel Cart\'s item', (done) => {
        rise.channelCart.removeItem({
          channel_uuid: channel_uuid,
          cart_uuid: cart.cart_uuid,
          item_uuid: item.item_uuid
        })
          .then(_res => {
            assert.equal(_res.object, 'ChannelCartItem')
            item = _res.data

            console.log('brk cart', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

    })


    it.skip('#### Should create Channel Cart\'s items', (done) => {
      rise.channelCart.createItems(
        [{
          offer_uuid: offer.offer_uuid,
          variant_uuid: offer.variant_uuid,
          quantity: 1,
          notes: 'Who you gonna call?'
        }], {
          params: {
            channel_uuid: channel_uuid,
            cart_uuid: cart.cart_uuid,
          }
        })
        .then(_res => {
          assert.equal(_res.event_type, 'channel.cart.item.list.created')
          assert.equal(_res.list, 'ChannelCartItem')

          console.log('brk cart', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('#### Should list a Channel Cart\'s items', (done) => {
      rise.channelCart.listItems({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelCartItem')
          assert.equal(_res.action, ACTIONS.LIST_CART_ITEMS)

          console.log('brk cart', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('#### Should get a Channel Cart\'s item', (done) => {
      rise.channelCart.getItem({
        channel_uuid: channel_uuid,
        cart_uuid: cart.cart_uuid,
        item_uuid: item.item_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCartItem')
          assert.equal(_res.action, ACTIONS.GET_CART_ITEM)
          item = _res.data

          console.log('brk cart', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
