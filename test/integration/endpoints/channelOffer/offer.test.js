const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Offer API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, offer, variant

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

  it.skip('## Should Create a Offer', (done) => {

    rise.channelOffer.create({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        offer = _res.data
        // console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Offer', (done) => {

    rise.channelOffer.update({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        offer = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Offers', (done) => {

    rise.channelOffer.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        offer = _res.data[0]

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should Search Channel Offers', (done) => {

    rise.channelOffer.search({
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

  it('### Should Get a Channel Offer', (done) => {

    rise.channelOffer.get({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        offer = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Channel Offer By Handle', (done) => {

    rise.channelOffer.getByHandle({
      channel_uuid: channel_uuid,
      handle: offer.handle
    })
      .then(_res => {
        offer = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Channel Offer\'s Variants', (done) => {

    rise.channelOffer.listVariants({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        variant = _res.data[0]

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Channel Offer\'s Variant', (done) => {

    rise.channelOffer.getVariant({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid,
      variant_uuid: variant.variant_uuid
    })
      .then(_res => {
        variant = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List Public Channel Offers', (done) => {

    rise.channelOffer.listPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        offer = _res.data[0]

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Search Public Channel Offers', (done) => {

    rise.channelOffer.searchPublic({
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

  it('### Should Get a Public Channel Offer', (done) => {

    rise.channelOffer.getPublic({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        offer = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Public Channel Offer By Handle', (done) => {

    rise.channelOffer.getPublicByHandle({
      channel_uuid: channel_uuid,
      handle: offer.handle
    })
      .then(_res => {
        offer = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Public Channel Offer\'s Variants', (done) => {

    rise.channelOffer.listPublicVariants({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        variant = _res.data[0]

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Offer\'s Variant', (done) => {

    rise.channelOffer.getPublicVariant({
      channel_uuid: channel_uuid,
      offer_uuid: offer.offer_uuid,
      variant_uuid: variant.variant_uuid
    })
      .then(_res => {
        variant = _res.data

        console.log('brk offer', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
