const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Channel API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, channel, item, customer, offer

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

  describe('# RiSE Channel API Dependencies', () => {

  })
  describe('# RiSE Channel API Methods', () => {

    it('### Should Get Supplied Global Channel', (done) => {

      rise.channel.get({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          console.log('BRK', _res)
          assert.equal(_res.object, 'Channel')
          // assert.equal(_res.event_type, EVENTS.CART_CREATED)
          channel = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should List Supplied Channels', (done) => {

      rise.channel.list({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Children', (done) => {

      rise.channel.listChildren({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Siblings', (done) => {

      rise.channel.listSiblings({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Descendants', (done) => {

      rise.channel.listDescendants({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })



    it.skip('### Set Primary Nexus', (done) => {

      rise.channel.setAddressNexus({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Nexus', (done) => {

      rise.channel.getAddressNexus({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Set Primary Vendor', (done) => {

      rise.channel.setPrimaryVendor({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Vendor', (done) => {

      rise.channel.getPrimaryVendor({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Set Primary Customer', (done) => {

      rise.channel.setPrimaryCustomer({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Customer', (done) => {

      rise.channel.getPrimaryCustomer({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Set Primary Feed', (done) => {

      rise.channel.setPrimaryFeed({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Feed', (done) => {

      rise.channel.getPrimaryFeed({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Set Primary Gateway', (done) => {

      rise.channel.setPrimaryGateway({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Gateway', (done) => {

      rise.channel.getPrimaryGateway({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Set Primary Fulfillment Service', (done) => {

      rise.channel.setPrimaryFulfillmentService({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Get Primary Fulfillment Service', (done) => {

      rise.channel.getPrimaryFulfillmentService({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
