const RiSE = require('../../../dist').RiSE
const adminIdentifier = process.env.RISE_ADMIN
const adminPassword = process.env.RISE_PASSWORD
const channel_uuid = process.env.RISE_CHANNEL
const public_key = process.env.RISE_PUBLIC
const private_key = process.env.RISE_PRIVATE

const assert = require('assert')

describe('# RiSE Channel Customer API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, customer

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
})