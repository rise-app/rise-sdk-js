export const FULFILLMENT_SERVICE_COMMANDS = {
  'CREATE_FULFILLMENT_SERVICE': 'create.channel.:channel_uuid.fulfillment_service',
  'ADD_FULFILLMENT_SERVICE': 'add.channel.:channel_uuid.fulfillment_service.:service_uuid',
  'UPDATE_FULFILLMENT_SERVICE': 'update.channel.:channel_uuid.fulfillment_service.:service_uuid',
  'DESTROY_FULFILLMENT_SERVICE': 'destroy.channel.:channel_uuid.fulfillment_service.:service_uuid',
  'PUBLISH_FULFILLMENT_SERVICE': 'publish.channel.:channel_uuid.fulfillment_service.:service_uuid',
  'UNPUBLISH_FULFILLMENT_SERVICE': 'unpublish.channel.:channel_uuid.fulfillment_service.:service_uuid',

  'SET_FULFILLMENT_SERVICE_RETURNS': 'set.channel.:channel_uuid.fulfillment_service.:service_uuid.address_returns',
  'SET_FULFILLMENT_SERVICE_SHIPPING': 'set.channel.:channel_uuid.fulfillment_service.:service_uuid.address_shipping',

  'UPLOAD_FULFILLMENT_SERVICES': 'upload.channel.:channel_uuid.list.fulfillment_service',
  'PROCESS_UPLOADED_FULFILLMENT_SERVICES': 'process.channel.:channel_uuid.upload.:upload_uuid.list.fulfillment_service',

}

export const FULFILLMENT_SERVICE_ACTIONS = {
  'GET_FULFILLMENT_SERVICE': 'channel.fulfillment_service.get',
  'LIST_FULFILLMENT_SERVICES': 'channel.fulfillment_service.list',
  'GET_FULFILLMENT_SERVICE_FULFILLMENT': 'channel.fulfillment_service.fulfillment.get',
  'LIST_FULFILLMENT_SERVICE_FULFILLMENTS': 'channel.fulfillment_service.fulfillment.list',

  'GET_FULFILLMENT_SERVICE_SHIPPING': 'channel.fulfillment_service.address.shipping.get',
  'GET_FULFILLMENT_SERVICE_RETURNS': 'channel.fulfillment_service.address.returns.get',

  'GET_FULFILLMENT_SERVICE_EVENT': 'channel.fulfillment_service.event.get',
  'LIST_FULFILLMENT_SERVICE_EVENTS': 'channel.fulfillment_service.event.list',

  'GET_FULFILLMENT_SERVICE_UPLOAD': 'channel.fulfillment_service.upload.get',
  'LIST_FULFILLMENT_SERVICE_UPLOADS': 'channel.fulfillment_service.upload.list',
}

export const FULFILLMENT_SERVICE_EVENTS = {
  'FULFILLMENT_SERVICE_CREATED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.created',
  'FULFILLMENT_SERVICE_ADDED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.added',
  'FULFILLMENT_SERVICE_UPDATED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.updated',
  'FULFILLMENT_SERVICE_DESTROYED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.destroyed',
  'FULFILLMENT_SERVICE_PUBLISHED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.published',
  'FULFILLMENT_SERVICE_UNPUBLISHED': 'channel.:channel_uuid.fulfillment_service.:service_uuid.unpublished',

  'FULFILLMENT_SERVICE_RETURNS_SET': 'channel.:channel_uuid.fulfillment_service.:service_uuid.address_returns.set',
  'FULFILLMENT_SERVICE_SHIPPING_SET': 'channel.:channel_uuid.fulfillment_service.:service_uuid.address_shipping.set',

  'FULFILLMENT_SERVICES_UPLOADED': 'channel.:channel_uuid.fulfillment_service.uploaded.list',
  'FULFILLMENT_SERVICES_UPLOAD_PROCESSED': 'channel.:channel_uuid.fulfillment_service.upload.processed.list',
}
