export const FULFILLMENT_COMMANDS = {
  'CREATE_FULFILLMENT': 'create.channel.:channel_uuid.service.:service_uuid.fulfillment',
  'CREATE_FULFILLMENTS': 'create.channel.:channel_uuid.service.:service_uuid.list.fulfillment',
  'UPDATE_FULFILLMENT': 'update.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'DESTROY_FULFILLMENT': 'destroy.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'PARTIALLY_CANCEL_FULFILLMENT': 'partially_cancel.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'CANCEL_FULFILLMENT': 'cancel.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'HOLD_FULFILLMENT': 'hold.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'RELEASE_FULFILLMENT': 'release.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'RETURN_FULFILLMENT': 'return.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'CALCULATE_FULFILLMENT': 'calculate.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'SEND_FULFILLMENT': 'send.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',
  'FULFILL_FULFILLMENT': 'fulfill.channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid',

  'UPLOAD_FULFILLMENTS': 'upload.channel.:channel_uuid.list.fulfillment',
  'PROCESS_UPLOADED_FULFILLMENTS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.fulfillment',



  'CREATE_FULFILLMENT_ITEM': 'create.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item',
  'CREATE_FULFILLMENT_ITEMS': 'create.channel.:channel_uuid.fulfillment.:fulfillment_uuid.list.item',
  'UPDATE_FULFILLMENT_ITEM': 'update.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid',
  'DESTROY_FULFILLMENT_ITEM': 'destroy.channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid',
}

export const FULFILLMENT_ACTIONS = {
  'GET_FULFILLMENT': 'channel.fulfillment.get',
  'LIST_FULFILLMENTS': 'channel.fulfillment.list',

  'GET_FULFILLMENT_ITEM': 'channel.fulfillment.item.get',
  'LIST_FULFILLMENT_ITEMS': 'channel.fulfillment.item.list',
  'LIST_FULFILLMENT_EVENTS': 'channel.fulfillment.event.list',

  'GET_FULFILLMENT_SERVICE': 'channel.fulfillment_service.get',
  'LIST_FULFILLMENT_SERVICES': 'channel.fulfillment_service.list',
  'GET_FULFILLMENT_SERVICE_FULFILLMENT': 'channel.fulfillment_service.fulfillment.get',
  'LIST_FULFILLMENT_SERVICE_FULFILLMENTS': 'channel.fulfillment_service.fulfillment.list',

  'GET_FULFILLMENT_SERVICE_EVENT': 'channel.fulfillment_service.event.get',
  'LIST_FULFILLMENT_SERVICE_EVENTS': 'channel.fulfillment_service.event.list',

  'GET_FULFILLMENT_SERVICE_UPLOAD': 'channel.fulfillment_service.upload.get',
  'LIST_FULFILLMENT_SERVICE_UPLOADS': 'channel.fulfillment_service.upload.list',
}

export const FULFILLMENT_EVENTS = {
  'FULFILLMENT_CREATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.created',
  'FULFILLMENTS_CREATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.created.list',
  'FULFILLMENT_UPDATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.updated',
  'FULFILLMENT_DESTROYED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.destroyed',
  'FULFILLMENT_PARTIALLY_CANCELLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.partially_cancelled',
  'FULFILLMENT_CANCELLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.cancelled',
  'FULFILLMENT_SENT': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.sent',
  'FULFILLMENT_HELD': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.held',
  'FULFILLMENT_RELEASED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.released',
  'FULFILLMENT_RETURNED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.returned',
  'FULFILLMENT_FULFILLED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.fulfilled',
  'FULFILLMENT_CALCULATED': 'channel.:channel_uuid.service.:service_uuid.fulfillment.:fulfillment_uuid.calculated',

  'FULFILLMENTS_UPLOADED': 'channel.:channel_uuid.upload.:upload_uuid.fulfillment.list',
  'FULFILLMENTS_UPLOAD_PROCESSED': 'channel.:channel_uuid.upload.:upload_uuid.processed.fulfillment.list',


  'FULFILLMENT_ITEM_CREATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.created',
  'FULFILLMENT_ITEMS_CREATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.created.list',
  'FULFILLMENT_ITEM_UPDATED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.updated',
  'FULFILLMENT_ITEM_DESTROYED': 'channel.:channel_uuid.fulfillment.:fulfillment_uuid.item.:item_uuid.destroyed',
}
