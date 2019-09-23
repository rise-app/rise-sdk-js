const RiSE = require('../../../dist').RiSE
const adminIdentifier = require('../../fixtures/constants').adminIdentifier
const adminPassword = require('../../fixtures/constants').adminPassword
const channel_uuid = require('../../fixtures/constants').channel_uuid
const public_key = require('../../fixtures/constants').public_key
const private_key = require('../../fixtures/constants').private_key

const assert = require('assert')

describe('# RiSE Channel Category API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, category, product

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

  it.skip('## Should Create a Category', (done) => {

    rise.channelCategory.create({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        category = _res.data
        // console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Category', (done) => {

    rise.channelCategory.update({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid
    })
      .then(_res => {
        category = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Categories', (done) => {

    rise.channelCategory.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        category = _res.data[0]

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Category', (done) => {

    rise.channelCategory.get({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid
    })
      .then(_res => {
        category = _res.data

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List a Channel Category\'s Products', (done) => {

    rise.channelCategory.listProducts({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid
    })
      .then(_res => {
        product = _res.data[0]

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Category\'s Product', (done) => {

    rise.channelCategory.getProduct({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        product = _res.data

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List Public Channel Categories', (done) => {

    rise.channelCategory.listPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        category = _res.data[0]

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Category', (done) => {

    rise.channelCategory.getPublic({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid
    })
      .then(_res => {
        category = _res.data

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List a Public Channel Category\'s Products', (done) => {

    rise.channelCategory.listPublicProducts({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid
    })
      .then(_res => {
        product = _res.data[0]

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Category\'s Product', (done) => {

    rise.channelCategory.getPublicProduct({
      channel_uuid: channel_uuid,
      collection_uuid: category.collection_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        product = _res.data

        console.log('brk category', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
