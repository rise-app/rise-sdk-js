import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate, Upload } from '../../metadata'
import { customer, order } from '../../validators'
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid',
    validator: order[ACTIONS.GET_ORDER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List orders
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders',
    validator: order[ACTIONS.LIST_ORDERS]
  })
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/orders',
    validator: order[ACTIONS.LIST_ORDERS]
  })
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
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/orders',
    validator: order[ACTIONS.LIST_ORDERS]
  })
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
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/orders',
    validator: order[COMMANDS.CREATE_ORDER]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid',
    validator: order[COMMANDS.UPDATE_ORDER]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/address_billing',
    validator: order[COMMANDS.SET_ORDER_BILLING_ADDRESS]
  })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/address_billing',
    validator: order[ACTIONS.GET_ORDER_BILLING_ADDRESS]
  })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping',
    validator: order[COMMANDS.SET_ORDER_SHIPPING_ADDRESS]
  })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Orders Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/address_shipping',
    validator: order[ACTIONS.GET_ORDER_SHIPPING_ADDRESS]
  })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/customer',
    validator: order[COMMANDS.SET_ORDER_CUSTOMER]
  })
  setCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/customer',
    validator: order[ACTIONS.GET_ORDER_CUSTOMER]
  })
  getCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/payment_details',
    validator: order[COMMANDS.SET_ORDER_PAYMENT_DETAILS]
  })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/payment_details',
    validator: order[ACTIONS.GET_ORDER_PAYMENT_DETAILS]
  })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillment_details',
    validator: order[COMMANDS.SET_ORDER_FULFILLMENT_DETAILS]
  })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillment_details',
    validator: order[ACTIONS.GET_ORDER_FULFILLMENT_DETAILS]
  })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping',
    validator: order[COMMANDS.ADD_ORDER_SHIPPING_LINE]
  })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping',
    validator: order[COMMANDS.REMOVE_ORDER_SHIPPING_LINE]
  })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_shipping',
    validator: order[ACTIONS.LIST_ORDER_SHIPPING_LINES]
  })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes',
    validator: order[COMMANDS.ADD_ORDER_TAX_LINE]
  })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes',
    validator: order[COMMANDS.REMOVE_ORDER_TAX_LINE]
  })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_taxes',
    validator: order[ACTIONS.LIST_ORDER_TAX_LINES]
  })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Order's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides',
    validator: order[COMMANDS.ADD_ORDER_OVERRIDE_LINE]
  })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides',
    validator: order[COMMANDS.REMOVE_ORDER_OVERRIDE_LINE]
  })
  removeOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Override Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/lines_pricing_overrides',
    validator: order[ACTIONS.LIST_ORDER_OVERRIDE_LINES]
  })
  listOverrideLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Cancel Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/cancel',
    validator: order[COMMANDS.CANCEL_ORDER]
  })
  cancel(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Refund Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/refund',
    validator: order[COMMANDS.REFUND_ORDER]
  })
  refund(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Pay Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/pay',
    validator: order[COMMANDS.PAY_ORDER]
  })
  pay(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Fulfill Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfill',
    validator: order[COMMANDS.FULFILL_ORDER]
  })
  fulfill(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Close Order
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/close',
    validator: order[COMMANDS.CLOSE_ORDER]
  })
  close(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Upload a Order CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/orders',
    validator: order[COMMANDS.UPLOAD_ORDERS]
  })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Orders Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/orders/:upload_uuid',
    validator: order[COMMANDS.PROCESS_UPLOADED_ORDERS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Order Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/orders/metadata',
    // validator: order[COMMANDS.UPLOAD_ORDER_METADATA]
  })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Order Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/orders/metadata/:upload_uuid',
    // validator: order[COMMANDS.PROCESS_UPLOADED_ORDER_METADATA]
  })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Order Upload Result
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/orders/:upload_uuid',
    // validator: order[ACTIONS.GET_ORDER_UPLOAD_RESULT]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Order Upload Results
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/orders',
    // validator: order[ACTIONS.LIST_ORDER_UPLOAD_RESULTS]
  })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Order Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/orders/metadata/:upload_uuid',
    // validator: order[ACTIONS.GET_ORDER_METADATA_UPLOAD_RESULT]
  })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Order Metadata Upload Results
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/orders/metadata',
    // validator: order[ACTIONS.LIST_ORDER_METADATA_UPLOAD_RESULTS]
  })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  getItem = ChannelOrderItem.prototype.get
  listItems = ChannelOrderItem.prototype.list

  getFulfillment = ChannelOrderFulfillment.prototype.get
  listFulfillments = ChannelOrderFulfillment.prototype.list
  createFulfillment = ChannelOrderFulfillment.prototype.create
  updateFulfillment = ChannelOrderFulfillment.prototype.update
  sendFulfillment = ChannelOrderFulfillment.prototype.send
  cancelFulfillment = ChannelOrderFulfillment.prototype.cancel

  getTransaction = ChannelOrderTransaction.prototype.get
  listTransactions = ChannelOrderTransaction.prototype.list
  createTransaction = ChannelOrderTransaction.prototype.create
  updateTransaction = ChannelOrderTransaction.prototype.update
  authorizeTransaction = ChannelOrderTransaction.prototype.authorize
  captureTransaction = ChannelOrderTransaction.prototype.capture
  refundTransaction = ChannelOrderTransaction.prototype.refund
  voidTransaction = ChannelOrderTransaction.prototype.void
  saleTransaction = ChannelOrderTransaction.prototype.sale
  cancelTransaction = ChannelOrderTransaction.prototype.cancel
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
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/orders/:order_uuid/items',
    validator: order[COMMANDS.CREATE_ORDER_ITEM]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Bulk Create Order Items from Offers/Offer Variants
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/orders/:order_uuid/items',
    validator: order[COMMANDS.CREATE_ORDER_ITEMS]
  })
  bulkCreate(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid',
    validator: order[COMMANDS.UPDATE_ORDER_ITEM]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid',
    validator: order[COMMANDS.REMOVE_ORDER_ITEM]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Set a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details',
    validator: order[COMMANDS.SET_ORDER_ITEM_PAYMENT_DETAILS]
  })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/payment_details',
    validator: order[ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS]
  })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/fulfillment_details',
    validator: order[COMMANDS.SET_ORDER_ITEM_FULFILLMENT_DETAILS]
  })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/fulfillment_details',
    validator: order[ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS]
  })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Order Item
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid',
    validator: order[ACTIONS.GET_ORDER_ITEM]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Order Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items',
    validator: order[ACTIONS.LIST_ORDER_ITEMS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping',
    validator: order[COMMANDS.ADD_ORDER_SHIPPING_LINE]
  })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping',
    validator: order[COMMANDS.REMOVE_ORDER_SHIPPING_LINE]
  })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Item's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_shipping',
    validator: order[ACTIONS.LIST_ORDER_SHIPPING_LINES]
  })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Order's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes',
    validator: order[COMMANDS.ADD_ORDER_TAX_LINE]
  })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes',
    validator: order[COMMANDS.REMOVE_ORDER_TAX_LINE]
  })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Order's Item's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_taxes',
    validator: order[ACTIONS.LIST_ORDER_TAX_LINES]
  })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Order's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: order[COMMANDS.ADD_ORDER_OVERRIDE_LINE]
  })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Order's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/orders/:order_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: order[COMMANDS.REMOVE_ORDER_OVERRIDE_LINE]
  })
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
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions',
    // validator: order[COMMANDS.CREATE_ORDER_TRANSACTION]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid',
    // validator: order[COMMANDS.UPDATE_ORDER_TRANSACTION]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Authorize Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/authorize',
    validator: order[COMMANDS.AUTHORIZE_ORDER_TRANSACTION]
  })
  authorize(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Capture Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/capture',
    validator: order[COMMANDS.CAPTURE_ORDER_TRANSACTION]
  })
  capture(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Sale Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/sale',
    validator: order[COMMANDS.SALE_ORDER_TRANSACTION]
  })
  sale(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Void Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/void',
    validator: order[COMMANDS.VOID_ORDER_TRANSACTION]
  })
  void(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Refund Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/refund',
    validator: order[COMMANDS.REFUND_ORDER_TRANSACTION]
  })
  refund(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Cancel Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/transactions/:transaction_uuid/cancel',
    validator: order[COMMANDS.CANCEL_ORDER_TRANSACTION]
  })
  cancel(data, req?, validated?) {
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
    validator: order[ACTIONS.GET_ORDER_FULFILLMENT]
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
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments',
    validator: order[ACTIONS.LIST_ORDER_FULFILLMENTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments',
    // validator: order[COMMANDS.CREATE_ORDER_FULFILLMENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments/:fulfillment_uuid',
    // validator: order[COMMANDS.UPDATE_ORDER_FULFILLMENT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Send Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments/:fulfillment_uuid/send',
    // validator: order[COMMANDS.SEND_ORDER_FULFILLMENT]
  })
  send(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Cancel Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/orders/:order_uuid/fulfillments/:fulfillment_uuid/cancel',
    // validator: order[COMMANDS.SEND_ORDER_FULFILLMENT]
  })
  cancel(data, req?, validated?) {
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
    route: 'channels/:channel_uuid/orders/:order_uuid/events',
    validator: order[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
