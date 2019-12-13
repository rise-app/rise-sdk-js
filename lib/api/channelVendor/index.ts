import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { vendor } from '../../validators/vendor'
import { COMMANDS, ACTIONS } from '../../enums'

export class ChannelVendor extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/vendors', validator: vendor[COMMANDS.CREATE_VENDOR]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/vendors/:vendor_uuid', validator: vendor[COMMANDS.UPDATE_VENDOR] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid', validator: vendor[ACTIONS.GET_VENDOR] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel's Vendor by Vendor Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/handle/:handle', validator: vendor[ACTIONS.FIND_VENDOR] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Vendors of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/vendors', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/vendors', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/search/vendors', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid/parent', validator: vendor[ACTIONS.GET_VENDOR] })
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor's Ancestor Vendors
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid/ancestors', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid/children', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid/descendants', validator: vendor[ACTIONS.LIST_VENDORS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendors/:vendor_uuid/siblings', validator: vendor[ACTIONS.LIST_VENDORS] })
  @Paginate()
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Vendor CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/vendors', validator: vendor[COMMANDS.UPLOAD_VENDORS] })
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
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/vendors/:upload_uuid', validator: vendor[COMMANDS.PROCESS_UPLOADED_VENDORS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Vendor Inventory CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/vendors/inventory', validator: vendor[COMMANDS.UPLOAD_VENDOR_INVENTORY] })
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
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/vendors/inventory/:upload_uuid', validator: vendor[COMMANDS.PROCESS_UPLOADED_VENDOR_INVENTORY] })
  processInventoryUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Vendor Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/vendors/:upload_uuid', validator: vendor[ACTIONS.GET_VENDOR_UPLOAD_RESULT] })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Vendor Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/vendors', validator: vendor[ACTIONS.LIST_VENDOR_UPLOAD_RESULTS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/vendors/inventory/:upload_uuid', validator: vendor[ACTIONS.GET_VENDOR_INVENTORY_UPLOAD_RESULT] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/vendors/inventory', validator: vendor[ACTIONS.LIST_VENDOR_INVENTORY_UPLOAD_RESULTS] })
  @Paginate()
  listInventoryUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
