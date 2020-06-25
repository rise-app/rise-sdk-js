import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { vendor } from '../../validators'
import { COMMANDS, ACTIONS } from '../../enums'

export class ChannelVendor extends ApiClass {
  /**
   * Create a Channel Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/vendors',
    validator: vendor[COMMANDS.CREATE_VENDOR]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Channel Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid',
    validator: vendor[COMMANDS.UPDATE_VENDOR]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set an Vendor's Primary Image
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/image_primary',
    // validator: vendor[COMMANDS.SET_VENDOR_PRIMARY_IMAGE]
  })
  setPrimaryImage(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid',
    validator: vendor[ACTIONS.GET_VENDOR]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel's Vendor by Vendor Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/handle/:handle',
    validator: vendor[ACTIONS.FIND_VENDOR]
  })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendors of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Vendors for a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/vendors',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendors from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/descendants/vendors', validator: vendor[ACTIONS.LIST_VENDORS]})
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Vendors from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/vendors',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor's Parent
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/parent',
    validator: vendor[ACTIONS.GET_VENDOR]
  })
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor's Ancestor Vendors
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/ancestors',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  listAncestors(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor's Children Vendors
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/children',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  listChildren(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor's Descendant Vendors
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/descendants',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor's Siblings Vendors
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/siblings',
    validator: vendor[ACTIONS.LIST_VENDORS]
  })
  @Paginate()
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Set a Channel Vendor's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/address_billing',
    validator: vendor[COMMANDS.SET_VENDOR_BILLING_ADDRESS]
  })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Vendor's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/address_billing',
    validator: vendor[ACTIONS.GET_VENDOR_BILLING_ADDRESS]
  })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Vendor's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/address_shipping',
    validator: vendor[COMMANDS.SET_VENDOR_SHIPPING_ADDRESS]
  })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Vendor's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/address_shipping',
    validator: vendor[ACTIONS.GET_VENDOR_SHIPPING_ADDRESS]
  })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get an Vendor's Primary Image by Vendor ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/image_primary',
    // validator: vendor[ACTIONS.GET_VENDOR_PRIMARY_IMAGE]
  })
  getPrimaryImage(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Vendor CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/vendors',
    validator: vendor[COMMANDS.UPLOAD_VENDORS]
  })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Vendors Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/vendors/:upload_uuid',
    validator: vendor[COMMANDS.PROCESS_UPLOADED_VENDORS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Vendor Inventory CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/vendors/inventory',
    validator: vendor[COMMANDS.UPLOAD_VENDOR_INVENTORY]
  })
  @Upload()
  uploadInventory(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Vendor Inventory Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/vendors/inventory/:upload_uuid',
    validator: vendor[COMMANDS.PROCESS_UPLOADED_VENDOR_INVENTORY]
  })
  processInventoryUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/vendors/:upload_uuid',
    validator: vendor[ACTIONS.GET_VENDOR_UPLOAD_RESULT]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/vendors',
    validator: vendor[ACTIONS.LIST_VENDOR_UPLOAD_RESULTS]
  })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Vendor Inventory Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/vendors/inventory/:upload_uuid',
    validator: vendor[ACTIONS.GET_VENDOR_INVENTORY_UPLOAD_RESULT]
  })
  @Paginate()
  getInventoryUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor Inventory Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/vendors/inventory',
    validator: vendor[ACTIONS.LIST_VENDOR_INVENTORY_UPLOAD_RESULTS]
  })
  @Paginate()
  listInventoryUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelVendorEvent extends ApiClass {
  /**
   * List Vendor's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/events',
    validator: vendor[ACTIONS.LIST_VENDOR_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Vendor's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/events/:event_uuid',
    // validator: vendor[ACTIONS.GET_VENDOR_EVENT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Vendor's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/events',
    // validator: vendor[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelVendorFulfillmentService extends ApiClass {

}

export class ChannelVendorProduct extends ApiClass {

  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products',
    validator: vendor[COMMANDS.ADD_VENDOR_PRODUCT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  bulkAdd = this.add

  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid',
    validator: vendor[COMMANDS.UPDATE_VENDOR_PRODUCT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO VALIDATORS
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid',
    validator: vendor[COMMANDS.REMOVE_VENDOR_PRODUCT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor's Products Product Product
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid',
    validator: vendor[ACTIONS.GET_VENDOR_PRODUCT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendor's Product Product Inventories of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products',
    validator: vendor[ACTIONS.LIST_VENDOR_PRODUCTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelVendorProductVariant extends ApiClass {

  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid/variants',
    validator: vendor[COMMANDS.ADD_VENDOR_PRODUCT_VARIANT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  bulkAdd = this.add

  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: vendor[COMMANDS.UPDATE_VENDOR_PRODUCT_VARIANT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO VALIDATORS
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: vendor[COMMANDS.REMOVE_VENDOR_PRODUCT_VARIANT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor's Products Product Variant
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: vendor[ACTIONS.GET_VENDOR_PRODUCT_VARIANT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendor's Product Product Inventories of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/products/:product_uuid/variants',
    validator: vendor[ACTIONS.LIST_VENDOR_PRODUCT_VARIANTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelVendorInventory extends ApiClass {
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/inventory',
    validator: vendor[COMMANDS.ADD_VENDOR_PRODUCT_VARIANT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  bulkAdd = this.add

  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/inventory/:variant_uuid',
    validator: vendor[COMMANDS.UPDATE_VENDOR_PRODUCT_VARIANT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO VALIDATORS
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/inventory/:variant_uuid',
    validator: vendor[COMMANDS.REMOVE_VENDOR_PRODUCT_VARIANT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor's Inventory Product Variant
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/inventory/:variant_uuid',
    validator: vendor[ACTIONS.GET_VENDOR_PRODUCT_VARIANT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendor's Product Variant Inventories of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendors/:vendor_uuid/inventory',
    validator: vendor[ACTIONS.LIST_VENDOR_PRODUCT_VARIANTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Vendor Inventory CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  upload = ChannelVendor.prototype.uploadInventory

  /**
   * Process a Given Channel's Vendor Inventory Upload Result
   * @param data
   * @param req
   * @param validated
   */
  processUpload = ChannelVendor.prototype.processInventoryUpload

  /**
   * Get a Given Channel's Vendor Inventory Upload Result
   * @param data
   * @param req
   * @param validated
   */
  getUpload = ChannelVendor.prototype.getInventoryUpload

  /**
   * List a Given Channel's Vendor Inventory Upload Results
   * @param data
   * @param req
   * @param validated
   */
  listUploads = ChannelVendor.prototype.listInventoryUploads

}
