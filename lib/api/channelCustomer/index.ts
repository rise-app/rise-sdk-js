import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate, Upload } from '../../metadata'
import { collection, customer } from '../../validators'
import { ACTIONS, COMMANDS, EVENTS } from '../../enums'

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
  @Command({
    method: 'POST', route: 'channels/:channel_uuid/customers',
    validator: customer[COMMANDS.CREATE_CUSTOMER]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/customers/:customer_uuid',
    validator: customer[COMMANDS.UPDATE_CUSTOMER]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/customers', validator: customer[ACTIONS.LIST_CUSTOMERS]})
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search (Customers)
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/customers',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Customers from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/customers',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Customers from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/customers',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  /**
   * Get a Given Channel's Customer's Parent Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/parent',
    validator: customer[ACTIONS.GET_CUSTOMER]
  })
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer's Ancestor Customers
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/ancestors',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  listAncestors(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer's Children Customers
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/children',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  listChildren(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer's Descendant Customers
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/descendants',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer's Siblings Customers
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/siblings',
    validator: customer[ACTIONS.LIST_CUSTOMERS]
  })
  @Paginate()
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing',
    validator: customer[COMMANDS.SET_CUSTOMER_BILLING]
  })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing',
    validator: customer[ACTIONS.GET_CUSTOMER_BILLING]
  })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping',
    validator: customer[COMMANDS.SET_CUSTOMER_SHIPPING]
  })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping',
    validator: customer[ACTIONS.GET_CUSTOMER_SHIPPING]
  })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Customer's Current Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/cart_current',
    validator: customer[ACTIONS.GET_CUSTOMER]
  })
  getCurrentCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Customer's Current Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/user_primary',
    validator: customer[ACTIONS.GET_CUSTOMER]
  })
  getPrimaryUser(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Customer CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/customers',
    validator: customer[COMMANDS.UPLOAD_CUSTOMERS]
  })
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
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/customers/:upload_uuid',
    validator: customer[COMMANDS.PROCESS_UPLOADED_CUSTOMERS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Customer Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/customers/metadata',
    validator: customer[COMMANDS.UPLOAD_CUSTOMER_METADATA]
  })
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
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/customers/metadata/:upload_uuid',
    validator: customer[COMMANDS.PROCESS_UPLOADED_CUSTOMER_METADATA]
  })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/customers/:upload_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER_UPLOAD_RESULT]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Customer Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/customers',
    validator: customer[ACTIONS.LIST_CUSTOMER_UPLOAD_RESULTS]
  })
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/customers/metadata/:upload_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER_METADATA_UPLOAD_RESULT]
  })
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/customers/metadata',
    validator: customer[ACTIONS.LIST_CUSTOMER_METADATA_UPLOAD_RESULTS]
  })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/customers/:customer_uuid',
    validator: customer[ACTIONS.GET_PUBLIC_CUSTOMER]
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Public Customer Details by Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/customers/handle/:handle',
    validator: customer[ACTIONS.FIND_PUBLIC_CUSTOMER]
  })
  getPublicByHandle(data, req?, validated?) {
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

export class ChannelCustomerCampaign extends ApiClass {
}

export class ChannelCustomerCart extends ApiClass {
}

export class ChannelCustomerEvent extends ApiClass {
  /**
   * List Customer's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/events',
    validator: customer[ACTIONS.LIST_CUSTOMER_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/events/:event_uuid',
    // validator: customer[ACTIONS.GET_CUSTOMER_EVENT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/customers/:customer_uuid/events',
    // validator: customer[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCustomerFeed extends ApiClass {
  /**
   * List Customer's feeds
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/feeds',
    // validator: customer[ACTIONS.LIST_CUSTOMER_FEEDS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's feeds
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/feeds/:feed_uuid',
    // validator: customer[ACTIONS.GET_CUSTOMER_FEED]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCustomerOrder extends ApiClass {
  /**
   * List Customer's orders
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/orders',
    validator: customer[ACTIONS.LIST_CUSTOMER_ORDERS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's orders
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/orders/:order_uuid',
    // validator: customer[ACTIONS.GET_CUSTOMER_ORDER]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCustomerGatewayAccount extends ApiClass {
  /**
   * List Customer's accounts
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts',
    validator: customer[ACTIONS.LIST_CUSTOMER_GATEWAY_ACCOUNTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's accounts
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER_GATEWAY_ACCOUNT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's account
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts',
    // validator: customer[COMMANDS.CREATE_CUSTOMER_ACCOUNT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's account
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid',
    // validator: customer[COMMANDS.REMOVE_CUSTOMER_ACCOUNT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCustomerGatewayAccountSource extends ApiClass {

  /**
   * List Customer's sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/sources',
    validator: customer[ACTIONS.LIST_CUSTOMER_GATEWAY_ACCOUNT_SOURCES]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid/sources',
    validator: customer[ACTIONS.LIST_CUSTOMER_GATEWAY_ACCOUNT_SOURCES]
  })
  @Paginate()
  listByAccount(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/sources/:source_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER_GATEWAY_ACCOUNT_SOURCE]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Customer's sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid/sources/:source_uuid',
    validator: customer[ACTIONS.GET_CUSTOMER_GATEWAY_ACCOUNT_SOURCE]
  })
  @Paginate()
  getByAccount(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's source
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid/sources',
    // validator: customer[COMMANDS.CREATE_CUSTOMER_SOURCE]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's source
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/customers/:customer_uuid/accounts/:account_uuid/sources/:source_uuid',
    // validator: customer[COMMANDS.REMOVE_CUSTOMER_SOURCE]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCustomerUser extends ApiClass {
  /**
   * List Customer's users
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/users',
    validator: customer[ACTIONS.LIST_CUSTOMER_USERS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Customer's users
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customers/:customer_uuid/users/:user_uuid',
    // validator: customer[ACTIONS.GET_CUSTOMER_USER]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's user
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/customers/:customer_uuid/users',
    // validator: customer[COMMANDS.CREATE_CUSTOMER_USER]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's user
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/customers/:customer_uuid/users',
    // validator: customer[COMMANDS.ADD_CUSTOMER_USER]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Customer's user
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/customers/:customer_uuid/users',
    // validator: customer[COMMANDS.REMOVE_CUSTOMER_USER]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
