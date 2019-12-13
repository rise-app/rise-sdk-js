export const VENDOR_COMMANDS = {
  'CREATE_VENDOR': 'create.channel.:channel_uuid.vendor',
  'UPDATE_VENDOR': 'update.channel.:channel_uuid.vendor.:vendor_uuid',
  'DESTROY_VENDOR': 'destroy.channel.:channel_uuid.vendor.:vendor_uuid',

  'SET_VENDOR_BILLING': 'set.channel.:channel_uuid.vendor.:vendor_uuid.address_billing',
  'SET_VENDOR_SHIPPING': 'set.channel.:channel_uuid.vendor.:vendor_uuid.address_shipping',
  'SET_VENDOR_PRIMARY_FULFILLMENT_SERVICE': 'set.channel.:channel_uuid.vendor.:vendor_uuid.fulfillment_service_primary',

  'UPLOAD_VENDORS': 'upload.channel.:channel_uuid.list.vendor',
  'PROCESS_UPLOADED_VENDORS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.vendor',
  'UPLOAD_VENDOR_INVENTORY': 'upload.channel.:channel_uuid.vendor.list.inventory',
  'PROCESS_UPLOADED_VENDOR_INVENTORY': 'process.channel.:channel_uuid.vendor.upload.:upload_uuid.list.inventory',

  'ADD_VENDOR_PRODUCT': 'add.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid',
  'ADD_VENDOR_PRODUCTS': 'add.channel.:channel_uuid.vendor.:vendor_uuid.list.product',
  'UPDATE_VENDOR_PRODUCT': 'update.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid',
  'REMOVE_VENDOR_PRODUCT': 'remove.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid',

  'ADD_VENDOR_PRODUCT_VARIANT': 'add.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid',
  'ADD_VENDOR_PRODUCT_VARIANTS': 'add.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.list.variant',
  'UPDATE_VENDOR_PRODUCT_VARIANT': 'update.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid',
  'REMOVE_VENDOR_PRODUCT_VARIANT': 'remove.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid',
  'DECREMENT_VENDOR_PRODUCT_VARIANT': 'decrement.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid',
  'DECREMENT_VENDOR_PRODUCT_VARIANTS': 'decrement.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.list.variant',
  'INCREMENT_VENDOR_PRODUCT_VARIANT': 'increment.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid',
  'INCREMENT_VENDOR_PRODUCT_VARIANTS': 'increment.channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.list.variant',
}
export const VENDOR_ACTIONS = {
  'GET_VENDOR': 'channel.vendor.get',
  'LIST_VENDORS': 'channel.vendor.list',
  'FIND_VENDOR': 'channel.vendor.get',
  'FIND_VENDORS': 'channel.vendor.list',
  'GET_VENDOR_PRODUCT': 'channel.vendor.product.get',
  'LIST_VENDOR_PRODUCTS': 'channel.vendor.product.list',
  'GET_VENDOR_PRODUCT_VARIANT': 'channel.vendor.product.variant.get',
  'LIST_VENDOR_PRODUCT_VARIANTS': 'channel.vendor.product.variant.list',
  'LIST_VENDOR_EVENTS': 'channel.vendor.event.list',
  'GET_VENDOR_BILLING': 'channel.vendor.address_billing.get',
  'GET_VENDOR_SHIPPING': 'channel.vendor.address_shipping.get',
  'GET_VENDOR_PRIMARY_FULFILLMENT_SERVICE': 'channel.vendor.fulfillment_service_primary.get',

  'GET_VENDOR_UPLOAD': 'channel.vendor.upload.get',
  'LIST_VENDOR_UPLOADS': 'channel.vendor.upload.list',
  'GET_VENDOR_UPLOAD_RESULT': 'channel.vendor.upload_result.get',
  'LIST_VENDOR_UPLOAD_RESULTS': 'channel.vendor.upload_result.list',

  'GET_VENDOR_INVENTORY_UPLOAD_RESULT': 'channel.vendor.inventory.upload_result.get',
  'LIST_VENDOR_INVENTORY_UPLOAD_RESULTS': 'channel.vendor.inventory.upload_result.list',
  'GET_VENDOR_INVENTORY_UPLOAD': 'channel.vendor.inventory.upload.get',
  'LIST_VENDOR_INVENTORY_UPLOADS': 'channel.vendor.inventory.upload.list',

}
export const VENDOR_EVENTS = {
  'VENDOR_CREATED': 'channel.:channel_uuid.vendor.:vendor_uuid.created',
  'VENDOR_UPDATED': 'channel.:channel_uuid.vendor.:vendor_uuid.updated',
  'VENDOR_DESTROYED': 'channel.:channel_uuid.vendor.:vendor_uuid.destroyed',
  'VENDORS_UPLOADED': 'channel.:channel_uuid.vendor.uploaded.list',
  'VENDORS_UPLOAD_PROCESSED': 'channel.:channel_uuid.vendor.upload.processed.list',
  'VENDORS_INVENTORY_UPLOADED': 'channel.:channel_uuid.vendor.inventory.uploaded.list',
  'VENDORS_INVENTORY_UPLOAD_PROCESSED': 'channel.:channel_uuid.vendor.inventory.upload.processed.list',

  'VENDOR_PRODUCT_ADDED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.added',
  'VENDOR_PRODUCTS_ADDED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.added.list',
  'VENDOR_PRODUCT_UPDATED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.updated',
  'VENDOR_PRODUCT_REMOVED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.removed',

  'VENDOR_PRODUCT_VARIANT_ADDED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid.added',
  'VENDOR_PRODUCT_VARIANTS_ADDED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.added.list',
  'VENDOR_PRODUCT_VARIANT_UPDATED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid.updated',
  'VENDOR_PRODUCT_VARIANT_REMOVED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid.removed',

  'VENDOR_PRODUCT_VARIANT_DECREMENTED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid.decremented',
  'VENDOR_PRODUCT_VARIANT_INCREMENTED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.:variant_uuid.incremented',
  'VENDOR_PRODUCT_VARIANTS_DECREMENTED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.decremented.list',
  'VENDOR_PRODUCT_VARIANTS_INCREMENTED': 'channel.:channel_uuid.vendor.:vendor_uuid.product.:product_uuid.variant.incremented.list',

  'VENDOR_BILLING_SET': 'channel.:channel_uuid.vendor.:vendor_uuid.address_billing.set',
  'VENDOR_SHIPPING_SET': 'channel.:channel_uuid.vendor.:vendor_uuid.address_shipping.set',
  'VENDOR_PRIMARY_FULFILLMENT_SERVICE_SET': 'channel.:channel_uuid.vendor.:vendor_uuid.fulfillment_service_primary.set',
}
