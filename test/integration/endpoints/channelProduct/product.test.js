const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Product API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, product, variant

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

  it.skip('## Should Create a Product', (done) => {

    rise.channelProduct.create({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        product = _res.data
        // console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Product', (done) => {

    rise.channelProduct.update({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        product = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Products', (done) => {

    rise.channelProduct.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        product = _res.data[0]

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Products with nested where query', (done) => {

    rise.channelProduct.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 1,
        where: {
          type: 'application'
        }
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 1)
        assert.equal(_res.offset, 0)

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Search Channel Products', (done) => {

    rise.channelProduct.search({
      channel_uuid: channel_uuid
    }, {
      query: {
        term: 'testing',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Channel Product', (done) => {

    rise.channelProduct.get({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        product = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Product By Handle', (done) => {

    rise.channelProduct.getByHandle({
      channel_uuid: channel_uuid,
      handle: product.product_handle
    })
      .then(_res => {
        product = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Channel Product\'s Variants', (done) => {

    rise.channelProduct.listVariants({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        variant = _res.data[0]

        console.log('brk product variants', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List a Channel Product\'s Variants by Product Handle', (done) => {

    rise.channelProduct.listVariantsByHandle({
      channel_uuid: channel_uuid,
      handle: product.product_handle
    })
      .then(_res => {
        // variant = _res.data[0]

        console.log('brk product variants', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Channel Product\'s Variant', (done) => {

    rise.channelProduct.getVariant({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid,
      variant_uuid: variant.variant_uuid
    })
      .then(_res => {
        variant = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List Public Channel Products', (done) => {

    rise.channelProduct.listPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        product = _res.data[0]

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Public Channel Products', (done) => {

    rise.channelProduct.searchPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        term: 'testing',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Public Channel Product', (done) => {

    rise.channelProduct.getPublic({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        product = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Product By Handle', (done) => {

    rise.channelProduct.getPublicByHandle({
      channel_uuid: channel_uuid,
      handle: product.product_handle
    })
      .then(_res => {
        product = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Public Channel Product\'s Variants', (done) => {

    rise.channelProduct.listPublicVariants({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid
    })
      .then(_res => {
        variant = _res.data[0]

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List a Public Channel Product\'s Variants by Product Handle', (done) => {

    rise.channelProduct.listPublicVariantsByHandle({
      channel_uuid: channel_uuid,
      handle: product.product_handle
    })
      .then(_res => {
        variant = _res.data[0]

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Product\'s Variant', (done) => {

    rise.channelProduct.getPublicVariant({
      channel_uuid: channel_uuid,
      product_uuid: product.product_uuid,
      variant_uuid: variant.variant_uuid
    })
      .then(_res => {
        variant = _res.data

        console.log('brk product', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
