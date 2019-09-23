const RiSE = require('../../../dist').RiSE
const adminIdentifier = require('../../fixtures/constants').adminIdentifier
const adminPassword = require('../../fixtures/constants').adminPassword
const channel_uuid = require('../../fixtures/constants').channel_uuid
const public_key = require('../../fixtures/constants').public_key
const private_key = require('../../fixtures/constants').private_key

const assert = require('assert')

describe('# RiSE Channel Offer API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, offer, variant

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
