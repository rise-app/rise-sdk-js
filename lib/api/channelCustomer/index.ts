import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate, Upload } from '../../metadata'
import { collection, customer } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'
import { ChannelAuth } from '../channelAuth'

export class ChannelCustomer extends ApiClass {
  /**********************************
   * PRIVATE
   **********************************/
  /**
   * Create a Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/customers', validator: customer[COMMANDS.CREATE_CUSTOMER] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer[COMMANDS.UPDATE_CUSTOMER] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer[ACTIONS.GET_CUSTOMER] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers', validator: customer[ACTIONS.LIST_CUSTOMERS] })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: customer[COMMANDS.SET_CUSTOMER_BILLING] })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: customer[ACTIONS.GET_CUSTOMER_BILLING] })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: customer[COMMANDS.SET_CUSTOMER_SHIPPING] })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: customer[ACTIONS.GET_CUSTOMER_SHIPPING] })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Customer's Current Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/cart_current', validator: customer[ACTIONS.GET_CUSTOMER] })
  getCurrentCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Customer's Current Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/user_primary', validator: customer[ACTIONS.GET_CUSTOMER] })
  getPrimaryUser(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**********************************
   * PUBLIC
   **********************************/

  /**
   * Get a Public Customer Details by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/:customer_uuid', validator: customer[ACTIONS.GET_PUBLIC_CUSTOMER] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Public Customer Details by Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/handle/:handle', validator: customer[ACTIONS.FIND_PUBLIC_CUSTOMER] })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Upload a Customer CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/customers', validator: customer[COMMANDS.UPLOAD_CUSTOMERS] })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Customers Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/customers/:upload_uuid', validator: customer[COMMANDS.PROCESS_UPLOADED_CUSTOMERS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Customer Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/customers/metadata', validator: customer[COMMANDS.UPLOAD_CUSTOMER_METADATA] })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Customer Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/customers/metadata/:upload_uuid', validator: customer[COMMANDS.PROCESS_UPLOADED_CUSTOMER_METADATA] })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/customers/:upload_uuid', validator: customer[ACTIONS.GET_CUSTOMER_UPLOAD_RESULT] })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/customers', validator: customer[ACTIONS.LIST_CUSTOMER_UPLOAD_RESULTS] })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Customer Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/customers/metadata/:upload_uuid', validator: customer[ACTIONS.GET_CUSTOMER_METADATA_UPLOAD_RESULT] })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer Metadata Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/customers/metadata', validator: customer[ACTIONS.LIST_CUSTOMER_METADATA_UPLOAD_RESULTS] })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

/**
 * Public Customer Endpoints
 */
export class ChannelPublicCustomer extends ApiClass {
  get = ChannelCustomer.prototype.getPublic
  getByHandle = ChannelCustomer.prototype.getPublicByHandle
  // list = ChannelCustomer.prototype.listPublic
}

export class ChannelCustomerCampaign extends ApiClass {}

export class ChannelCustomerCart extends ApiClass {}

export class ChannelCustomerFeed extends ApiClass {}

export class ChannelCustomerOrder extends ApiClass {}

export class ChannelCustomerGatewayAccount extends ApiClass {}

export class ChannelCustomerGatewayAccountSource extends ApiClass {}

export class ChannelCustomerUser extends ApiClass {}
