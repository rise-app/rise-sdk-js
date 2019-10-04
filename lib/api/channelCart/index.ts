import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { cart } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelCart extends ApiClass {
  /***********************************
   * Cart
   ***********************************/

  /**
   * Get a Cart by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: cart[ACTIONS.GET_CART] })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * List carts
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts', validator: cart[ACTIONS.LIST_CARTS] })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Create a Cart
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/carts', validator: cart[COMMANDS.CREATE_CART] })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Update a Cart
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: cart[COMMANDS.UPDATE_CART] })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/address_billing', validator: cart[COMMANDS.SET_CART_BILLING] })
  setAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_billing', validator: cart[ACTIONS.GET_CART_BILLING] })
  getAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/address_shipping', validator: cart[COMMANDS.SET_CART_SHIPPING] })
  setAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Carts Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_shipping', validator: cart[ACTIONS.GET_CART_SHIPPING] })
  getAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/customer', validator: cart[COMMANDS.SET_CART_CUSTOMER]})
  setCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/customer', validator: cart[ACTIONS.GET_CART_CUSTOMER] })
  getCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: cart[COMMANDS.SET_CART_PAYMENT] })
  setPaymentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: cart[ACTIONS.GET_CART_PAYMENT_DETAILS] })
  getPaymentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/payment_details', validator: cart[COMMANDS.SET_CART_FULFILLMENT] })
  setFulfillmentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/fulfillment_details', validator: cart[ACTIONS.GET_CART_FULFILLMENT_DETAILS] })
  getFulfillmentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }


  /**
   * Checkout a Cart
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/checkout', validator: cart[COMMANDS.CHECKOUT_CART] })
  checkout(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Close a Cart
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/close', validator: cart[COMMANDS.CLOSE_CART] })
  close(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}


/***********************************
 * Cart Items
 ***********************************/

export class ChannelCartItem extends ApiClass {

  /**
   * Create a Cart Item from Offer/Offer Variant
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: cart[COMMANDS.CREATE_CART_ITEM] })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Bulk Create Cart Items from Offers/Offer Variants
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: cart[COMMANDS.CREATE_CART_ITEMS]})
  bulkCreate(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Update a Cart Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: cart[COMMANDS.UPDATE_CART_ITEM] })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Remove a Cart Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: cart[COMMANDS.REMOVE_CART_ITEM] })
  remove(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }



  /**
   * Set a Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: cart[COMMANDS.SET_CART_ITEM_PAYMENT] })
  setPaymentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: cart[ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS] })
  getPaymentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Set a Cart's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/payment_details', validator: cart[COMMANDS.SET_CART_ITEM_FULFILLMENT] })
  setFulfillmentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart's Fulfillment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid/fulfillment_details', validator: cart[ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS] })
  getFulfillmentDetails(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Cart Item
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: cart[ACTIONS.GET_CART_ITEM] })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * List Cart Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: cart[ACTIONS.LIST_CART_ITEMS] })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
