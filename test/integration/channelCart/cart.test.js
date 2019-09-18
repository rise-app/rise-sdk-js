const RiSE = require('../../../dist').RiSE
const adminIdentifier = process.env.RISE_ADMIN
const adminPassword = process.env.RISE_PASSWORD
const channel_uuid = process.env.RISE_CHANNEL
const public_key = process.env.RISE_PUBLIC
const private_key = process.env.RISE_PRIVATE

const assert = require('assert')

describe('# RiSE Channel Cart API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, cart

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

  it('## Should Create a Cart', (done) => {

    rise.channelCart.create({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        cart = _res.data
        // console.log('brk cart', _res)

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
      cart_uuid: cart.cart_uuid
    })
      .then(_res => {
        cart = _res.data

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
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk cart', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should list a Channel Cart\'s items', (done) => {

    rise.channelCart.listItems({
      channel_uuid: channel_uuid,
      cart_uuid: cart.cart_uuid
    })
      .then(_res => {
        cart = _res.data

        console.log('brk cart', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
