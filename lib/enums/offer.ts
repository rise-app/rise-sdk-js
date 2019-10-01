export const OFFER_COMMANDS = {
  'CREATE_OFFER': 'create.channel.offer',
  'ADD_OFFER': 'add.channel.offer',
  'UPDATE_OFFER': 'update.channel.offer',
  'DESTROY_OFFER': 'destroy.channel.offer',
  'REMOVE_OFFER': 'remove.channel.offer',
  'PUBLISH_OFFER': 'publish.channel.offer',
  'CALCULATE_OFFER': 'calculate.channel.offer',
  'UNPUBLISH_OFFER': 'unpublish.channel.offer',
  'UNPUBLISH_OFFERS': 'unpublish.channel.offer.list',

  'ADD_OFFER_CAMPAIGN': 'add.channel.offer.campaign',
  'REMOVE_OFFER_CAMPAIGN': 'remove.channel.offer.campaign',

  'ADD_OFFER_IMAGE': 'add.channel.offer.image',
  'ADD_OFFER_IMAGES': 'add.channel.offer.image.list',
  'MOVE_OFFER_IMAGE': 'move.channel.offer.image',
  'REMOVE_OFFER_IMAGE': 'remove.channel.offer.image',

  'UPLOAD_OFFERS': 'upload.channel.offer',
  'PROCESS_UPLOADED_OFFERS': 'process.upload.channel.offer',
  'UPLOAD_OFFER_METADATA': 'upload.channel.offer.metadata.list',
  'PROCESS_UPLOADED_OFFER_METADATA': 'process.upload.channel.offer.metadata.list',

  'ADD_OFFER_VARIANT': 'add.channel.offer.variant',
  'ADD_OFFER_VARIANTS': 'add.channel.offer.variant.list',
  'UPDATE_OFFER_VARIANT': 'update.channel.offer.variant',
  'REMOVE_OFFER_VARIANT': 'remove.channel.offer.variant',
  'ADD_OFFER_BILLING_MODEL': 'add.channel.offer.billing_model',
  'ADD_OFFER_BILLING_MODELS': 'add.channel.offer.billing_model.list',
  'REMOVE_OFFER_BILLING_MODEL': 'remove.channel.offer.billing_model',

  'ADD_OFFER_UP_SELL': 'add.channel.offer.up_sell',
  'ADD_OFFER_UP_SELLS': 'add.channel.offer.up_sell.list',
  'REMOVE_OFFER_UP_SELL': 'remove.channel.offer.up_sell',

  'ADD_OFFER_CROSS_SELL': 'add.channel.offer.cross_sell',
  'ADD_OFFER_CROSS_SELLS': 'add.channel.offer.cross_sell.list',
  'REMOVE_OFFER_CROSS_SELL': 'remove.channel.offer.cross_sell',

  'ADD_OFFER_DOWN_SELL': 'add.channel.offer.down_sell',
  'ADD_OFFER_DOWN_SELLS': 'add.channel.offer.down_sell.list',
  'REMOVE_OFFER_DOWN_SELL': 'remove.channel.offer.down_sell',
}
export const OFFER_ACTIONS = {
  'GET_OFFER': 'channel.offer.get',
  'FIND_OFFER': 'channel.offer.get', // ALIAS
  'LIST_OFFERS': 'channel.offer.list',
  'FIND_OFFERS': 'channel.offer.list', // ALIAS

  'GET_PUBLIC_OFFER': 'channel.public.offer.get',
  'FIND_PUBLIC_OFFER': 'channel.public.offer.get', // ALIAS
  'LIST_PUBLIC_OFFERS': 'channel.public.offer.list',
  'FIND_PUBLIC_OFFERS': 'channel.public.offer.list', // ALIAS

  'LIST_OFFER_EVENTS': 'channel.offer.event.list',

  'GET_OFFER_CAMPAIGN': 'channel.offer.campaign.get',
  'LIST_OFFER_CAMPAIGNS': 'channel.offer.campaign.list',

  'GET_PUBLIC_OFFER_CAMPAIGN': 'channel.public.offer.campaign.get',
  'LIST_PUBLIC_OFFER_CAMPAIGNS': 'channel.public.offer.campaign.list',

  'GET_OFFER_UPLOAD_RESULT': 'channel.offer.upload_result.get',
  'LIST_OFFER_UPLOAD_RESULTS': 'channel.offer.upload_result.list',
  'GET_OFFER_UPLOAD': 'channel.offer.upload.get',
  'LIST_OFFER_UPLOADS': 'channel.offer.upload.list',

  'GET_OFFER_METADATA_UPLOAD_RESULT': 'channel.offer.metadata.upload_result.get',
  'LIST_OFFER_METADATA_UPLOAD_RESULTS': 'channel.offer.metadata.upload_result.list',
  'GET_OFFER_METADATA_UPLOAD': 'channel.offer.metadata.upload.get',
  'LIST_OFFER_METADATA_UPLOADS': 'channel.offer.metadata.upload.list',

  'GET_OFFER_PRODUCT': 'channel.offer.product.get',

  'GET_OFFER_VARIANT': 'channel.offer.variant.get',
  'LIST_OFFER_VARIANTS': 'channel.offer.variant.list',
  'GET_PUBLIC_OFFER_VARIANT': 'channel.public.offer.variant.get',
  'LIST_PUBLIC_OFFER_VARIANTS': 'channel.public.offer.variant.list',

  'GET_OFFER_UP_SELL': 'channel.offer.up_sell.get',
  'LIST_OFFER_UP_SELLS': 'channel.offer.up_sell.list',
  'GET_OFFER_CROSS_SELL': 'channel.offer.cross_sell.get',
  'LIST_OFFER_CROSS_SELLS': 'channel.offer.cross_sell.list',
  'GET_OFFER_DOWN_SELL': 'channel.offer.down_sell.get',
  'LIST_OFFER_DOWN_SELLS': 'channel.offer.down_sell.list',
}
export const OFFER_EVENTS = {
  'OFFER_CREATED': 'channel.offer.created',
  'OFFER_ADDED': 'channel.offer.added',
  'OFFER_UPDATED': 'channel.offer.updated',
  'OFFER_DESTROYED': 'channel.offer.destroyed',
  'OFFER_REMOVED': 'channel.offer.removed',
  'OFFER_PUBLISHED': 'channel.offer.published',
  'OFFER_UNPUBLISHED': 'channel.offer.unpublished',
  'OFFERS_UNPUBLISHED': 'channel.offer.unpublished.list',
  'OFFER_CALCULATED': 'channel.offer.calculated',

  'OFFER_VARIANT_ADDED': 'channel.offer.variant.added',
  'OFFER_VARIANTS_ADDED': 'channel.offer.variant.added.list',
  'OFFER_VARIANT_UPDATED': 'channel.offer.variant.updated',
  'OFFER_VARIANT_REMOVED': 'channel.offer.variant.removed',

  'OFFERS_UPLOADED': 'channel.offer.uploaded.list',
  'OFFERS_UPLOAD_PROCESSED': 'channel.offer.upload.processed.list',
  'OFFERS_METADATA_UPLOADED': 'channel.offer.metadata.uploaded.list',
  'OFFERS_METADATA_UPLOAD_PROCESSED': 'channel.offer.metadata.upload.processed.list',

  'OFFER_BILLING_MODEL_ADDED': 'channel.offer.billing_model.added',
  'OFFER_BILLING_MODELS_ADDED': 'channel.offer.billing_model.added.list',
  'OFFER_BILLING_MODEL_REMOVED': 'channel.offer.billing_model.removed',

  'OFFER_CAMPAIGN_ADDED': 'channel.offer.campaign.added',
  'OFFER_CAMPAIGN_REMOVED': 'channel.offer.campaign.removed',

  'OFFER_UP_SELL_ADDED': 'channel.offer.up_sell.added',
  'OFFER_UP_SELLS_ADDED': 'channel.offer.up_sell.added.list',
  'OFFER_UP_SELL_REMOVED': 'channel.offer.up_sell.removed',

  'OFFER_CROSS_SELL_ADDED': 'channel.offer.cross_sell.added',
  'OFFER_CROSS_SELLS_ADDED': 'channel.offer.cross_sell.added.list',
  'OFFER_CROSS_SELL_REMOVED': 'channel.offer.cross_sell.removed',

  'OFFER_DOWN_SELL_ADDED': 'channel.offer.downsell.added',
  'OFFER_DOWN_SELLS_ADDED': 'channel.offer.downsell.added.list',
  'OFFER_DOWN_SELL_REMOVED': 'channel.offer.downsell.removed',

  'OFFER_IMAGE_ADDED': 'channel.offer.image.added',
  'OFFER_IMAGES_ADDED': 'channel.offer.image.added.list',
  'OFFER_IMAGE_MOVED': 'channel.offer.image.moved',
  'OFFER_IMAGE_REMOVED': 'channel.offer.image.removed',
}
