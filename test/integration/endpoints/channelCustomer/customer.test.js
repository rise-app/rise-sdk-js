const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Customer API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, customer

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

  describe('Test Methods', () => {
    it('## Should Create a Customer', (done) => {

      rise.channelCustomer.create({
        channel_uuid: channel_uuid,
        name_first: 'Hello',
        name_last: 'World'
      })
        .then(_res => {
          customer = _res.data
          assert.equal(customer.name_first, 'Hello')
          assert.equal(customer.name_last, 'World')

          // console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it('## Should Update a Customer', (done) => {

      rise.channelCustomer.update({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid,
        name_first: 'Hello',
        name_last: 'World'
      })
        .then(_res => {
          customer = _res.data
          assert.equal(customer.name_first, 'Hello')
          assert.equal(customer.name_last, 'World')

          // console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should set Billing Address on a Customer', (done) => {

      rise.channelCustomer.setAddressBilling({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid,
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
          assert.equal(_res.object, 'ChannelCustomer.address_billing')
          // assert.equal(_res.event_type, EVENTS.CUSTOMER_ADDRESS_BILLING_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get Billing Address of Customer', (done) => {

      rise.channelCustomer.getAddressBilling({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCustomer.address_billing')
          assert.equal(_res.action, ACTIONS.GET_CUSTOMER_BILLING)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should set Shipping Address on a Customer', (done) => {

      rise.channelCustomer.setAddressShipping({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid,
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
          assert.equal(_res.object, 'ChannelCustomer.address_shipping')
          // assert.equal(_res.event_type, EVENTS.CUSTOMER_ADDRESS_SHIPPING_SET)
          console.log('brk res address', _res)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should get Shipping Address of Customer', (done) => {

      rise.channelCustomer.getAddressShipping({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelCustomer.address_shipping')
          assert.equal(_res.action, ACTIONS.GET_CUSTOMER_SHIPPING)
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get a Channel Customer', (done) => {

      rise.channelCustomer.get({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          customer = _res.data
          // assert.equal(customer.name_first, 'Hello')
          // assert.equal(customer.name_last, 'World')

          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should List Channel Customers', (done) => {

      rise.channelCustomer.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)
          // assert.equal(customer.name_last, 'World')

          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get Public Channel Customer', (done) => {

      rise.channelCustomer.getPublic({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          // customer = _res.data
          // assert.equal(customer.name_first, 'Hello')
          // assert.equal(customer.name_last, 'World')

          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get Public Channel Customer', (done) => {

      rise.channelPublicCustomer.get({
        channel_uuid: channel_uuid,
        customer_uuid: customer.customer_uuid
      })
        .then(_res => {
          // customer = _res.data
          // assert.equal(customer.name_first, 'Hello')
          // assert.equal(customer.name_last, 'World')

          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get Public Channel Customer by handle', (done) => {

      rise.channelCustomer.getPublicByHandle({
        channel_uuid: channel_uuid,
        handle: customer.customer_handle
      })
        .then(_res => {
          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get Public Channel Customer by handle', (done) => {

      rise.channelPublicCustomer.getByHandle({
        channel_uuid: channel_uuid,
        handle: customer.customer_handle
      })
        .then(_res => {
          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    // This may never be implemented, this is because it's likely a poor idea
    // to list public customers and instead let the developer decide what
    // customers to actually list in their app and not let it be crawled.
    it.skip('### Should List Public Channel Customers', (done) => {

      rise.channelCustomer.listPublic({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)
          // assert.equal(customer.name_last, 'World')

          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
