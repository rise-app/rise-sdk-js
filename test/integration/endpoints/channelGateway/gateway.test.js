const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Gateway API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, gateway, item, customer, offer

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

  describe('# RiSE Channel Gateway API Dependencies', () => {

  })

  describe('## RiSE Channel Gateway API Methods', () => {

    it.skip('### Should Create a Gateway', (done) => {

      rise.channelGateway.create({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          // assert.equal(_res.event_type, EVENTS.GATEWAY_CREATED)
          gateway = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it.skip('### Should Update a Gateway', (done) => {

      rise.channelGateway.update({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway.gateway_uuid,
        notes: 'Well what do we have here?',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          // assert.equal(_res.event_type, EVENTS.GATEWAY_UPDATED)

          gateway = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get a Channel Gateway', (done) => {

      rise.channelGateway.get({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway.gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.GET_GATEWAY)

          gateway = _res.data

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get channel Gateway Primary', (done) => {

      rise.channelGateway.getPrimary({
        channel_uuid: channel_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.GET_GATEWAY_PRIMARY)

          gateway = _res.data

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Channel Gateways', (done) => {

      rise.channelGateway.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.LIST_GATEWAYS)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Publish a Gateway', (done) => {

      rise.channelGateway.publish({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, COMMANDS.PUBLISH_GATEWAY)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Unpublish a Gateway', (done) => {

      rise.channelGateway.unpublish({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, COMMANDS.UNPUBLISH_GATEWAY)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Gateway Events', (done) => {

      rise.channelGateway.listEvents({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelEvent')
          assert.equal(_res.action, ACTIONS.LIST_GATEWAY_EVENTS)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Create a Gateway Event', (done) => {

      rise.channelGateway.createEvent({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelEvent')
          assert.equal(_res.action, COMMANDS.CREATE_GATEWAY_EVENT)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Upload Gateways', (done) => {

      rise.channelGateway.upload({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, COMMANDS.UPLOAD_GATEWAYS)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get Upload Results', (done) => {

      rise.channelGateway.getUploadResults({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.GET_GATEWAY_UPLOAD)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Process Uploaded Gateways', (done) => {

      rise.channelGateway.processUpload({
        channel_uuid: channel_uuid,
        upload_uuid: upload_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, COMMANDS.PROCESS_UPLOADED_GATEWAYS)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get Gateway Upload', (done) => {

      rise.channelGateway.getUpload({
        channel_uuid: channel_uuid,
        upload_uuid: upload_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, COMMANDS.GET_GATEWAY_UPLOAD)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it.skip('### Should Search Gateways', (done) => {

      rise.channelGateway.search({
        channel_uuid: channel_uuid,
        gateway_uuid: gateway_uuid
      }, {
        query: {
          term: 'test'
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelGateway')
          assert.equal(_res.action, ACTIONS.LIST_GATEWAYS)

          console.log('brk gateway', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
