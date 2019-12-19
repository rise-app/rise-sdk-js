const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel FulfillmentService API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, fulfillmentService

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

  describe('# RiSE Channel FulfillmentService API Dependencies', () => {

  })

  describe('## RiSE Channel FulfillmentService API Methods', () => {

    it.skip('### Should Create a FulfillmentService', (done) => {

      rise.channelFulfillmentService.create({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, EVENTS.FulfillmentService_CREATED)
          fulfillmentService = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it.skip('### Should Update a FulfillmentService', (done) => {

      rise.channelFulfillmentService.update({
        channel_uuid: channel_uuid,
        service_uuid: fulfillmentService.service_uuid,
        notes: 'Well what do we have here?',
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, EVENTS.FulfillmentService_UPDATED)

          fulfillmentService = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get a Channel FulfillmentService', (done) => {

      rise.channelFulfillmentService.get({
        channel_uuid: channel_uuid,
        service_uuid: fulfillmentService.service_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFulfillmentService')
          assert.equal(_res.action, ACTIONS.GET_FULFILLMENT_SERVICE)

          fulfillmentService = _res.data

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should List Channel FulfillmentServices', (done) => {

      rise.channelFulfillmentService.list({

      }, {
        params: {
          channel_uuid
        },
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          assert.equal(_res.action, ACTIONS.LIST_FULFILLMENT_SERVICES)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Publish a FulfillmentService', (done) => {

      rise.channelFulfillmentService.publish({
      }, {
        params: {
          channel_uuid: channel_uuid,
          service_uuid: fulfillmentService.service_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, COMMANDS.PUBLISH_FULFILLMENT_SERVICE)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Unpublish a FulfillmentService', (done) => {

      rise.channelFulfillmentService.unpublish({}, {
        params: {
          channel_uuid: channel_uuid,
          service_uuid: fulfillmentService.service_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, COMMANDS.UNPUBLISH_FULFILLMENT_SERVICE)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List FulfillmentService Events', (done) => {

      rise.channelFulfillmentServiceEvent.list({
      }, {
        params: {
          channel_uuid: channel_uuid,
          service_uuid: fulfillmentService.service_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelEvent')
          assert.equal(_res.action, ACTIONS.LIST_FULFILLMENT_SERVICE_EVENTS)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Create a FulfillmentService Event', (done) => {

      rise.channelFulfillmentServiceEvent.create({
        message: 'Test Event'
      }, {
        params: {
          channel_uuid: channel_uuid,
          service_uuid: fulfillmentService.service_uuid
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelEvent')
          // assert.equal(_res.event_type, COMMANDS.CREATE_FULFILLMENT_SERVICE_EVENT)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Upload FulfillmentServices', (done) => {

      rise.channelFulfillmentService.upload({
        channel_uuid: channel_uuid,
        service_uuid: fulfillmentService.service_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, COMMANDS.UPLOAD_FULFILLMENT_SERVICES)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get Upload Results', (done) => {

      rise.channelFulfillmentService.listUploadResults({
        channel_uuid: channel_uuid,
        service_uuid: fulfillmentService.service_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          assert.equal(_res.action, ACTIONS.GET_FULFILLMENT_SERVICE_UPLOAD)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Process Uploaded FulfillmentServices', (done) => {

      rise.channelFulfillmentService.processUpload({
        channel_uuid: channel_uuid,
        upload_uuid: upload_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          // assert.equal(_res.event_type, COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get FulfillmentService Upload', (done) => {

      rise.channelFulfillmentService.getUpload({
        channel_uuid: channel_uuid,
        upload_uuid: upload_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          assert.equal(_res.action, ACTIONS.GET_FULFILLMENT_SERVICE_UPLOAD)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    it.skip('### Should Search FulfillmentServices', (done) => {

      rise.channelFulfillmentService.search({

      }, {
        params: {
          channel_uuid: channel_uuid,
          service_uuid: fulfillmentService.service_uuid
        },
        query: {
          term: 'test'
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFulfillmentService')
          assert.equal(_res.action, ACTIONS.LIST_FULFILLMENT_SERVICES)

          console.log('brk fulfillmentService', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
