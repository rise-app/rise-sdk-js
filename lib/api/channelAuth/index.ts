import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { user, auth } from '../../validators'
import { COMMANDS, ACTIONS } from '../../enums'

export class ChannelAuth extends ApiClass {
  /**
   * Validate current token, and refresh if possible
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: auth[ACTIONS.GET_SESSION_USER] })
  validateToken(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: auth[ACTIONS.GET_SESSION_USER] })
  session(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: auth[ACTIONS.GET_SESSION_CART] })
  sessionCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Update Current Session's Cart
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart', validator: auth[COMMANDS.UPDATE_SESSION_CART] })
  updateSessionCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Cart's Items
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/items', validator: auth[ACTIONS.LIST_SESSION_CART_ITEMS] })
  sessionCartItems(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Current Session's Cart Item(s)
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/session/cart/items', validator: auth[COMMANDS.CREATE_SESSION_CART_ITEM] })
  createSessionCartItems(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Current Session's Cart Item(s)
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: auth[ACTIONS.GET_SESSION_CART_ITEM] })
  getSessionCartItem(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Current Session's Cart Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: auth[COMMANDS.UPDATE_SESSION_CART_ITEM] })
  updateSessionCartItem(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Current Session's Cart Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/auth/session/cart/items/:item_uuid', validator: auth[COMMANDS.REMOVE_SESSION_CART_ITEM] })
  removeSessionCartItem(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart's Shipping Address
   * (If Customer in Session, defaults to Customer Shipping Address if not set)
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: auth[ACTIONS.GET_SESSION_CART_SHIPPING] })
  sessionCartShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set Current Session's Cart's Shipping Address
   * (If Customer in Session, defaults to Customer Shipping Address if not set)
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: auth[COMMANDS.SET_SESSION_CART_SHIPPING] })
  setSessionCartShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart's Billing Address
   * (If Customer in Session, defaults to Customer Billing Address if not set)
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: auth[ACTIONS.GET_SESSION_CART_BILLING] })
  sessionCartBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set Current Session's Cart's Billing Address
   * (If Customer in Session, defaults to Customer Billing Address if not set)
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: auth[COMMANDS.SET_SESSION_CART_BILLING] })
  setSessionCartBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: auth[ACTIONS.GET_SESSION_CART_PAYMENT] })
  sessionCartPayment(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Set Current Session's Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: auth[COMMANDS.SET_SESSION_CART_PAYMENT] })
  setSessionCartPayment(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Checkout Current Session's Cart
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/checkout', validator: auth[COMMANDS.CHECKOUT_SESSION_CART] })
  checkoutSessionCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: auth[ACTIONS.GET_SESSION_CUSTOMER] })
  sessionCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update the Current Session's Customer
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer', validator: auth[COMMANDS.UPDATE_SESSION_CUSTOMER] })
  updateSessionCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: auth[ACTIONS.GET_SESSION_CART_SHIPPING] })
  sessionCustomerShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Current Session's Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: auth[COMMANDS.SET_SESSION_CART_SHIPPING] })
  setSessionCustomerShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: auth[ACTIONS.GET_SESSION_CART_SHIPPING] })
  sessionCustomerBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set Current Session's Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: auth[COMMANDS.SET_SESSION_CART_SHIPPING] })
  setSessionCustomerBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Open Carts
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/carts', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_CARTS] })
  sessionCustomerCarts(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Feeds
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/feeds', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_FEEDS] })
  sessionCustomerFeeds(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Gateway Accounts
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/accounts', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS] })
  sessionCustomerGatewayAccounts(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Gateway Account Sources
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/sources', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_SOURCES] })
  sessionCustomerGatewaySources(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Previous Orders
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_ORDERS] })
  sessionCustomerOrders(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Previous Orders
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders/:order_uuid', validator: auth[ACTIONS.GET_SESSION_CUSTOMER_ORDER] })
  getSessionCustomerOrder(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session's Customer's Previous Orders
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders/:order_uuid/items', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS] })
  listSessionCustomerOrderItems(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List the other Users who have access to the Session Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/users', validator: auth[ACTIONS.LIST_SESSION_CUSTOMER_USERS] })
  sessionCustomerUsers(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Current Channel for the Session's User
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user[ACTIONS.GET_USER] })
  sessionChannel(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List the other Channels this User has Roles for
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user[ACTIONS.GET_USER] })
  sessionChannels(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's User's Roles
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: auth[ACTIONS.LIST_SESSION_ROLES] })
  sessionRoles(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current User in Session
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: auth[ACTIONS.GET_SESSION_USER] })
  sessionUser(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Register a User into Session
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: auth[COMMANDS.REGISTER_USER] })
  register(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Login Session
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: auth[COMMANDS.LOGIN_USER] })
  login(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Logout of Current Session
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: auth[COMMANDS.LOGOUT_USER] })
  logout(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Send recovery directions to user
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/recover', validator: auth[COMMANDS.SET_RECOVERY]})
  setRecovery(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Use recovery token to reset unauthorized user
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/recover', validator: auth[COMMANDS.RECOVER] })
  recover(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Current User in Session
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/user', validator: auth[COMMANDS.UPDATE_SESSION_USER] })
  updateSessionUser(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
