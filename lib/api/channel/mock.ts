import { EVENTS } from '../../enums'

const { regexdot } = require('@fabrix/regexdot')

export const Channel = {
  get(req) {

  },

  setPrimaryFulfillmentService(req) {
    return {
      event_type: EVENTS.CHANNEL_FULFILLMENT_SERVICE_PRIMARY_SET,
      object: 'Channel.fulfillment_service_primary',
      data: {
        service_uuid: '6d280b53-2438-4279-97e7-4b5234a49c11',
        channel_uuid: '00000000-0000-0000-0000-000000000000',
        service_handle: 'rise-pickup',
        publisher_uuid: '00000000-0000-0000-0000-000000000000',
        published: true,
        published_at: null,
        published_scope: 'private',
        unpublished_at: null,
        live_mode: false,
        created_at: '2020-01-08T20:30:54.138Z',
        updated_at: '2020-01-08T20:30:54.138Z',
        handle: 'rise-pickup',
        name: 'RiSE:Pickup',
        description: 'RiSE:Pickup Fulfillment Service',
        distributes: [ 'pickup', 'digital' ],
        ...req.body
      },
      url: '/api/v1/channels/00000000-0000-0000-0000-000000000000/fulfillment_service_primary'
    }
  },

  getPrimaryFulfillmentService(req) {
    return {
      action: 'channel.fulfillment_service_primary.get',
      object: 'Channel.fulfillment_service_primary',
      data: {
        service_uuid: '6d280b53-2438-4279-97e7-4b5234a49c11',
        channel_uuid: '00000000-0000-0000-0000-000000000000',
        service_handle: 'rise-pickup',
        publisher_uuid: '00000000-0000-0000-0000-000000000000',
        published: true,
        published_at: null,
        published_scope: 'private',
        unpublished_at: null,
        live_mode: false,
        created_at: '2020-01-08T20:30:54.138Z',
        updated_at: '2020-01-08T20:30:54.138Z',
        handle: 'rise-pickup',
        name: 'RiSE:Pickup',
        description: 'RiSE:Pickup Fulfillment Service',
        distributes: [ 'pickup', 'digital' ]
      },
      url: '/api/v1/channels/00000000-0000-0000-0000-000000000000/fulfillment_service_primary'
    }
  }
}
