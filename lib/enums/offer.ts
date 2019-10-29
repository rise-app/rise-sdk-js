export const OFFER_COMMANDS = {
  'CREATE_OFFER': 'create.channel.:channel_uuid.offer',
  'ADD_OFFER': 'add.channel.:channel_uuid.offer.:offer_uuid',
  'UPDATE_OFFER': 'update.channel.:channel_uuid.offer.:offer_uuid',
  'DESTROY_OFFER': 'destroy.channel.:channel_uuid.offer.:offer_uuid',
  'REMOVE_OFFER': 'remove.channel.:channel_uuid.offer.:offer_uuid',
  'PUBLISH_OFFER': 'publish.channel.:channel_uuid.offer.:offer_uuid',
  'CALCULATE_OFFER': 'calculate.channel.:channel_uuid.offer.:offer_uuid',
  'UNPUBLISH_OFFER': 'unpublish.channel.:channel_uuid.offer.:offer_uuid',
  'UNPUBLISH_OFFERS': 'unpublish.channel.:channel_uuid.list.offer',

  'ADD_OFFER_CAMPAIGN': 'add.channel.:channel_uuid.offer.:offer_uuid.campaign:.collection_uuid',
  'REMOVE_OFFER_CAMPAIGN': 'remove.channel.:channel_uuid.offer.:offer_uuid.campaign:.collection_uuid',

  'ADD_OFFER_IMAGE': 'add.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',
  'ADD_OFFER_IMAGES': 'add.channel.:channel_uuid.offer.:offer_uuid.list.image',
  'MOVE_OFFER_IMAGE': 'move.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',
  'REMOVE_OFFER_IMAGE': 'remove.channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid',

  'UPLOAD_OFFERS': 'upload.channel.:channel_uuid.list.offer',
  'PROCESS_UPLOADED_OFFERS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.offer',
  'UPLOAD_OFFER_METADATA': 'upload.channel.:channel_uuid.offer.list.metadata',
  'PROCESS_UPLOADED_OFFER_METADATA': 'process.channel.:channel_uuid.offer.upload.:upload_uuid.list.metadata',

  'ADD_OFFER_VARIANT': 'add.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
  'ADD_OFFER_VARIANTS': 'add.channel.:channel_uuid.offer.list.variant',
  'UPDATE_OFFER_VARIANT': 'update.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
  'REMOVE_OFFER_VARIANT': 'remove.channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid',
  'ADD_OFFER_BILLING_MODEL': 'add.channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid',
  'ADD_OFFER_BILLING_MODELS': 'add.channel.:channel_uuid.offer.:offer_uuid.list.billing_model',
  'REMOVE_OFFER_BILLING_MODEL': 'remove.channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid',

  'ADD_OFFER_UP_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid',
  'ADD_OFFER_UP_SELLS': 'add.channel.:channel_uuid.offer.list.up_sell',
  'REMOVE_OFFER_UP_SELL': 'remove.channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid',

  'ADD_OFFER_CROSS_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid',
  'ADD_OFFER_CROSS_SELLS': 'add.channel.:channel_uuid.offer.list.cross_sell',
  'REMOVE_OFFER_CROSS_SELL': 'remove.channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid',

  'ADD_OFFER_DOWN_SELL': 'add.channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid',
  'ADD_OFFER_DOWN_SELLS': 'add.channel.:channel_uuid.offer.list.down_sell',
  'REMOVE_OFFER_DOWN_SELL': 'remove.:channel_uuid.channel.offer.:offer_uuid.down_sell.:associated_offer_uuid',
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
  'FIND_OFFER_VARIANTS': 'channel.offer.variant.list', // ALIAS
  'GET_PUBLIC_OFFER_VARIANT': 'channel.public.offer.variant.get',
  'LIST_PUBLIC_OFFER_VARIANTS': 'channel.public.offer.variant.list',
  'FIND_PUBLIC_OFFER_VARIANTS': 'channel.public.offer.variant.list', // ALIAS

  'GET_OFFER_UP_SELL': 'channel.offer.up_sell.get',
  'LIST_OFFER_UP_SELLS': 'channel.offer.up_sell.list',
  'GET_OFFER_CROSS_SELL': 'channel.offer.cross_sell.get',
  'LIST_OFFER_CROSS_SELLS': 'channel.offer.cross_sell.list',
  'GET_OFFER_DOWN_SELL': 'channel.offer.down_sell.get',
  'LIST_OFFER_DOWN_SELLS': 'channel.offer.down_sell.list',
}
export const OFFER_EVENTS = {
  'OFFER_CREATED': 'channel.:channel_uuid.offer.:offer_uuid.created',
  'OFFER_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.added',
  'OFFER_UPDATED': 'channel.:channel_uuid.offer.:offer_uuid.updated',
  'OFFER_DESTROYED': 'channel.:channel_uuid.offer.:offer_uuid.destroyed',
  'OFFERS_UPLOADED': 'channel.:channel_uuid.offer.uploaded.list',
  'OFFERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.offer.upload.processed.list',
  'OFFERS_METADATA_UPLOADED': 'channel.:channel_uuid.offer.metadata.uploaded.list',
  'OFFERS_METADATA_UPLOAD_PROCESSED': 'channel.:channel_uuid.offer.metadata.upload.processed.list',
  'OFFER_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.removed',
  'OFFER_PUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.published',
  'OFFER_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.unpublished',
  'OFFERS_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.unpublished.list',
  'OFFER_CALCULATED': 'channel.:channel_uuid.offer.:offer_uuid.calculated',

  'OFFER_VARIANT_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.added',
  'OFFER_VARIANTS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.variant.added.list',
  'OFFER_VARIANT_UPDATED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.updated',
  'OFFER_VARIANT_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.removed',
  'OFFER_VARIANT_PUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.published',
  'OFFER_VARIANT_UNPUBLISHED': 'channel.:channel_uuid.offer.:offer_uuid.variant.:variant_uuid.unpublished',

  'OFFER_BILLING_MODEL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid.added',
  'OFFER_BILLING_MODELS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.added.list',
  'OFFER_BILLING_MODEL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.billing_model.:model_uuid.removed',
  'OFFER_CAMPAIGN_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.campaign.:collection_uuid.added',
  'OFFER_CAMPAIGN_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.campaign.:collection_uuid.removed',

  'OFFER_UP_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid.added',
  'OFFER_UP_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.added.list',
  'OFFER_UP_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.up_sell.:associated_offer_uuid.removed',

  'OFFER_CROSS_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid.added',
  'OFFER_CROSS_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.added.list',
  'OFFER_CROSS_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.cross_sell.:associated_offer_uuid.removed',

  'OFFER_DOWN_SELL_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid.added',
  'OFFER_DOWN_SELLS_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.added.list',
  'OFFER_DOWN_SELL_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.down_sell.:associated_offer_uuid.removed',

  'OFFER_IMAGE_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.added',
  'OFFER_IMAGES_ADDED': 'channel.:channel_uuid.offer.:offer_uuid.image.added.list',
  'OFFER_IMAGE_MOVED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.moved',
  'OFFER_IMAGE_REMOVED': 'channel.:channel_uuid.offer.:offer_uuid.image.:image_uuid.removed',
}
