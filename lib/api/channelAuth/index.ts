import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { user, auth } from '../../validators'
import { COMMANDS } from '../../enums'

export class ChannelAuth extends ApiClass {
  /**
   * Validate current token, and refresh if possible
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user.session })
  validateToken(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Current Session
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user.session })
  session(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user.session })
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
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart', validator: user.session })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/items', validator: user.session })
  sessionCartItems(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Current Session's Cart Item(s)
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/session/cart/items', validator: user.session })
  createSessionCartItems(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Get Current Session's Cart's Shipping Address
   * (If Customer in Session, defaults to Customer Shipping Address if not set)
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: user.session })
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
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_shipping', validator: user.session })
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
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: user.session })
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
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/address_billing', validator: user.session })
  setSessionCartBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: user.session })
  sessionCartPayment(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Set Current Session's Cart's Payment Details
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/cart/payment_details', validator: user.session })
  setSessionCartPayment(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user.session })
  sessionCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update the Current Session's Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer', validator: user.session })
  updateSessionCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current Session's Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: user.session })
  sessionCustomerShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Update Current Session's Customer's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_shipping', validator: user.session })
  setSessionCustomerShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Get Current Session's Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: user.session })
  sessionCustomerBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Set Current Session's Customer's Billing Address
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/auth/session/customer/address_billing', validator: user.session })
  setSessionCustomerBilling(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Open Carts
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/carts', validator: user.session })
  sessionCustomerCarts(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Feeds
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/feeds', validator: user.session })
  sessionCustomerFeeds(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Gateway Accounts
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/accounts', validator: user.session })
  sessionCustomerGatewayAccounts(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Gateway Account Sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/sources', validator: user.session })
  sessionCustomerGatewaySources(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Current Session's Customer's Previous Orders
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/orders', validator: user.session })
  sessionCustomerOrders(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List the other Users who have access to the Session Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer/users', validator: user.session })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user.session })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user.session })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user.session })
  sessionRoles(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Current User in Session
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user.session })
  sessionUser(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Register a User into Session
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  register(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Login Session
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  login(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Logout of Current Session
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
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

}
