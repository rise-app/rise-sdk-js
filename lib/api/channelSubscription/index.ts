import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
import { subscription } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelSubscription extends ApiClass {
  /***********************************
   * Subscription
   ***********************************/

  /**
   * Get a Subscription by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List subscriptions
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTIONS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/subscriptions',
    validator: subscription[COMMANDS.CREATE_SUBSCRIPTION]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid',
    validator: subscription[COMMANDS.UPDATE_SUBSCRIPTION]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/address_billing',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_BILLING_ADDRESS]
  })
  setAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/address_billing',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_BILLING_ADDRESS]
  })
  getAddressBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/address_shipping',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_SHIPPING_ADDRESS]
  })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscriptions Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/address_shipping',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_SHIPPING_ADDRESS]
  })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/customer',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_CUSTOMER]
  })
  setCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/customer',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_CUSTOMER]
  })
  getCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/payment_details',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_PAYMENT_DETAILS]
  })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/payment_details',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_PAYMENT_DETAILS]
  })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/fulfillment_details',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_FULFILLMENT_DETAILS]
  })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/fulfillment_details',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_FULFILLMENT_DETAILS]
  })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Subscription's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_shipping',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_SHIPPING_LINE]
  })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_shipping',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_SHIPPING_LINE]
  })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_shipping',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_SHIPPING_LINES]
  })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Subscription's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_taxes',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_TAX_LINE]
  })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_taxes',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_TAX_LINE]
  })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_taxes',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_TAX_LINES]
  })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Subscription's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_pricing_overrides',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_OVERRIDE_LINE]
  })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_pricing_overrides',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_OVERRIDE_LINE]
  })
  removeOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Override Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/lines_pricing_overrides',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_OVERRIDE_LINES]
  })
  listOverrideLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Renew a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/renew',
    validator: subscription[COMMANDS.RENEW_SUBSCRIPTION]
  })
  renew(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Activate a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/activate',
    validator: subscription[COMMANDS.ACTIVATE_SUBSCRIPTION]
  })
  activate(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Deactivate a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/deactivate',
    validator: subscription[COMMANDS.DEACTIVATE_SUBSCRIPTION]
  })
  deactivate(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Cancel a Subscription
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/cancel',
    validator: subscription[COMMANDS.CANCEL_SUBSCRIPTION]
  })
  cancel(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


/***********************************
 * Subscription Items
 ***********************************/

export class ChannelSubscriptionItem extends ApiClass {

  /**
   * Create a Subscription Item from Offer/Offer Variant
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items',
    validator: subscription[COMMANDS.CREATE_SUBSCRIPTION_ITEM]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Bulk Create Subscription Items from Offers/Offer Variants
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items',
    validator: subscription[COMMANDS.CREATE_SUBSCRIPTION_ITEMS]
  })
  bulkCreate(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Subscription Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid',
    validator: subscription[COMMANDS.UPDATE_SUBSCRIPTION_ITEM]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_ITEM]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Set a Subscription's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/payment_details',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_ITEM_PAYMENT_DETAILS]
  })
  setPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/payment_details',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_ITEM_PAYMENT_DETAILS]
  })
  getPaymentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Subscription's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/fulfillment_details',
    validator: subscription[COMMANDS.SET_SUBSCRIPTION_ITEM_FULFILLMENT_DETAILS]
  })
  setFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/fulfillment_details',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_ITEM_FULFILLMENT_DETAILS]
  })
  getFulfillmentDetails(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Subscription's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_shipping',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_SHIPPING_LINE]
  })
  addShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Item's Shipping Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_shipping',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_SHIPPING_LINE]
  })
  removeShippingLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Item's Shipping Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_shipping',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_SHIPPING_LINES]
  })
  listShippingLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add a Subscription's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_taxes',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_TAX_LINE]
  })
  addTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Item's Tax Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_taxes',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_TAX_LINE]
  })
  removeTaxLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Item's Tax Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_taxes',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_TAX_LINES]
  })
  listTaxLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add a Subscription's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: subscription[COMMANDS.ADD_SUBSCRIPTION_OVERRIDE_LINE]
  })
  addOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Subscription's Item's Override Line
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: subscription[COMMANDS.REMOVE_SUBSCRIPTION_OVERRIDE_LINE]
  })
  removeOverrideLine(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List a Subscription's Item's Override Lines
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid/lines_pricing_overrides',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_OVERRIDE_LINES]
  })
  listOverrideLines(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Subscription Item
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items/:item_uuid',
    validator: subscription[ACTIONS.GET_SUBSCRIPTION_ITEM]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Subscription Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/subscriptions/:subscription_uuid/items',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTION_ITEMS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Search All Subscriptions of a given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/subscriptions',
    validator: subscription[ACTIONS.FIND_SUBSCRIPTIONS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Subscriptions from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/subscriptions',
    validator: subscription[ACTIONS.LIST_SUBSCRIPTIONS]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Subscriptions from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/subscriptions',
    validator: subscription[ACTIONS.FIND_SUBSCRIPTIONS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}
