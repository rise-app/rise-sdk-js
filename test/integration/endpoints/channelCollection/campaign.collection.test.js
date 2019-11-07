const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Campaign API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, campaign, offer

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

  it.skip('## Should Create a Campaign', (done) => {

    rise.channelCampaign.create({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        campaign = _res.data
        // console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Campaign', (done) => {

    rise.channelCampaign.update({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid
    })
      .then(_res => {
        campaign = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Campaigns', (done) => {

    rise.channelCampaign.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        campaign = _res.data[0]

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Channel Campaign', (done) => {

    rise.channelCampaign.get({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid
    })
      .then(_res => {
        campaign = _res.data

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Channel Campaign\'s Offers', (done) => {

    rise.channelCampaign.listOffers({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid
    })
      .then(_res => {
        offer = _res.data[0]

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List a Channel Campaign\'s Offers by Campaign Handle', (done) => {

    rise.channelCampaign.listOffersByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {
        // offer = _res.data[0]

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Campaign\'s Offer', (done) => {

    rise.channelCampaign.getOffer({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        offer = _res.data

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List Public Channel Campaigns', (done) => {

    rise.channelCampaign.listPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        campaign = _res.data[0]

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Campaign', (done) => {

    rise.channelCampaign.getPublic({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid
    })
      .then(_res => {
        campaign = _res.data

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Public Channel Campaign By Handle', (done) => {

    rise.channelCampaign.getPublicByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Get a Public Channel Campaign Parent By Handle', (done) => {

    rise.channelCampaign.getPublicParentByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Public Channel Campaign Ancestors By Handle', (done) => {

    rise.channelCampaign.listPublicAncestorsByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  it('### Should List Public Channel Campaign Siblings By Handle', (done) => {

    rise.channelCampaign.listPublicSiblingsByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Public Channel Campaign Children By Handle', (done) => {

    rise.channelCampaign.listPublicChildrenByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Public Channel Campaign Descendants By Handle', (done) => {

    rise.channelCampaign.listPublicDescendantsByHandle({
      channel_uuid: channel_uuid,
      handle: campaign.collection_handle
    })
      .then(_res => {

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List a Public Channel Campaign\'s Offers', (done) => {

    rise.channelCampaign.listPublicOffers({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid
    })
      .then(_res => {
        offer = _res.data[0]

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Campaign\'s Offer', (done) => {

    rise.channelCampaign.getPublicOffer({
      channel_uuid: channel_uuid,
      collection_uuid: campaign.collection_uuid,
      offer_uuid: offer.offer_uuid
    })
      .then(_res => {
        offer = _res.data

        console.log('brk campaign', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
