import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
import { order } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelOrder extends ApiClass {

  /***********************************
   * Order
   ***********************************/

  /**
   * Get a Order by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid', validator: order[ACTIONS.GET_ORDER] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List orders
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders', validator: order[ACTIONS.LIST_ORDERS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Orders of a given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/orders',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Orders from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/orders', validator: order[ACTIONS.LIST_ORDERS] })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Orders from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/search/orders', validator: order[ACTIONS.LIST_ORDERS] })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/orders', validator: order[COMMANDS.CREATE_ORDER] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid', validator: order[COMMANDS.UPDATE_ORDER] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/address_billing', validator: order[COMMANDS.SET_ORDER_BILLING] })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/address_billing', validator: order[ACTIONS.GET_ORDER_BILLING] })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping', validator: order[COMMANDS.SET_ORDER_SHIPPING] })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Orders Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping', validator: order[ACTIONS.GET_ORDER_SHIPPING] })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/customer', validator: order[COMMANDS.SET_ORDER_CUSTOMER]})
  setCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/customer', validator: order[ACTIONS.GET_ORDER_CUSTOMER] })
  getCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/payment_details', validator: order[COMMANDS.SET_ORDER_PAYMENT] })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/payment_details', validator: order[ACTIONS.GET_ORDER_PAYMENT_DETAILS] })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/fulfillment_details', validator: order[COMMANDS.SET_ORDER_FULFILLMENT] })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/fulfillment_details', validator: order[ACTIONS.GET_ORDER_FULFILLMENT_DETAILS] })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  /**
   * Add a Order's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping', validator: order[COMMANDS.ADD_ORDER_SHIPPING_LINE] })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping', validator: order[COMMANDS.REMOVE_ORDER_SHIPPING_LINE] })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping', validator: order[ACTIONS.LIST_ORDER_SHIPPING_LINES] })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes', validator: order[COMMANDS.ADD_ORDER_TAX_LINE] })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes', validator: order[COMMANDS.REMOVE_ORDER_TAX_LINE] })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes', validator: order[ACTIONS.LIST_ORDER_TAX_LINES] })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Order's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides', validator: order[COMMANDS.ADD_ORDER_OVERRIDE_LINE] })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides', validator: order[COMMANDS.REMOVE_ORDER_OVERRIDE_LINE] })
  removeOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Override Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides', validator: order[ACTIONS.LIST_ORDER_OVERRIDE_LINES] })
  listOverrideLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  getItem = ChannelOrderItem.prototype.get
  listItems = ChannelOrderItem.prototype.list

  getFulfillment = ChannelOrderFulfillment.prototype.get
  listFulfillments = ChannelOrderFulfillment.prototype.list

  getTransaction = ChannelOrderTransaction.prototype.get
  listTransactions = ChannelOrderTransaction.prototype.list
}



/***********************************
 * Order Items
 ***********************************/

export class ChannelOrderItem extends ApiClass {

  /**
   * Create a Order Item from Offer/Offer Variant
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: order[COMMANDS.CREATE_ORDER_ITEM] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Bulk Create Order Items from Offers/Offer Variants
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: order[COMMANDS.CREATE_ORDER_ITEMS]})
  bulkCreate(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: order[COMMANDS.UPDATE_ORDER_ITEM] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: order[COMMANDS.REMOVE_ORDER_ITEM] })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  /**
   * Set a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details', validator: order[COMMANDS.SET_ORDER_ITEM_PAYMENT] })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details', validator: order[ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS] })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/fulfillment_details', validator: order[COMMANDS.SET_ORDER_ITEM_FULFILLMENT] })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/fulfillment_details', validator: order[ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS] })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid', validator: order[ACTIONS.GET_ORDER_ITEM] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Order Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items', validator: order[ACTIONS.LIST_ORDER_ITEMS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }




  /**
   * Add a Order's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping', validator: order[COMMANDS.ADD_ORDER_SHIPPING_LINE] })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping', validator: order[COMMANDS.REMOVE_ORDER_SHIPPING_LINE] })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Item's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping', validator: order[ACTIONS.LIST_ORDER_SHIPPING_LINES] })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes', validator: order[COMMANDS.ADD_ORDER_TAX_LINE] })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes', validator: order[COMMANDS.REMOVE_ORDER_TAX_LINE] })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Item's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes', validator: order[ACTIONS.LIST_ORDER_TAX_LINES] })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Order's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_pricing_overrides', validator: order[COMMANDS.ADD_ORDER_OVERRIDE_LINE] })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Remove a Order's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_pricing_overrides', validator: order[COMMANDS.REMOVE_ORDER_OVERRIDE_LINE] })
  removeOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Item's Override Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: order[ACTIONS.LIST_ORDER_OVERRIDE_LINES]
  })
  listOverrideLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


/***********************************
 * Order Transaction
 ***********************************/

export class ChannelOrderTransaction extends ApiClass {
  /**
   * Get an Order's Transaction by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid',
    validator: order[ACTIONS.GET_ORDER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List an Order's Transactions
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


/***********************************
 * Order Fulfillments
 ***********************************/

export class ChannelOrderFulfillment extends ApiClass {
  /**
   * Get an Order's Fulfillment by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments/:fulfillment_uuid',
    validator: order[ACTIONS.GET_ORDER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List an Order's Fulfillments
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments/:fulfillment_uuid',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


/***********************************
 * Order Events
 ***********************************/

export class ChannelOrderEvent extends ApiClass {
  /**
   * Get an Order's Event by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/events/:event_uuid',
    validator: order[ACTIONS.GET_ORDER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List an Order's Events
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/events/:event_uuid',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
