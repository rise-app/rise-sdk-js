export const AUTH_ACTIONS = {
  'GET_SESSION': 'channel.session.get',
  'GET_SESSION_USER': 'channel.session.user.get',
  'GET_SESSION_CART': 'channel.session.cart.get',
  'GET_SESSION_CART_BILLING': 'channel.session.cart.address_billing.get',
  'GET_SESSION_CART_SHIPPING': 'channel.session.cart.address_shipping.get',
  'GET_SESSION_CART_PAYMENT': 'channel.session.cart.payment_details.get',
  'GET_SESSION_CART_ITEM': 'channel.session.cart.item.get',
  'LIST_SESSION_CART_ITEMS': 'channel.session.cart.item.list',
  'GET_SESSION_CHANNEL': 'channel.session.channel.get',
  'LIST_SESSION_CHANNELS': 'channel.session.channel.list',
  'LIST_SESSION_ROLES': 'channel.session.role.list',
  'GET_SESSION_CUSTOMER': 'channel.session.customer.get',
  'GET_SESSION_CUSTOMER_BILLING': 'channel.session.customer.address_billing.get',
  'GET_SESSION_CUSTOMER_SHIPPING': 'channel.session.customer.address_shipping.get',
  'LIST_SESSION_CUSTOMER_ACCOUNTS': 'channel.session.customer.account.list',
  'LIST_SESSION_CUSTOMER_CARTS': 'channel.session.customer.cart.list',
  'LIST_SESSION_CUSTOMER_FEEDS': 'channel.session.customer.feed.list',
  'GET_SESSION_CUSTOMER_ORDER': 'channel.session.customer.order.get',
  'LIST_SESSION_CUSTOMER_ORDERS': 'channel.session.customer.order.list',
  'LIST_SESSION_CUSTOMER_ORDER_ITEMS': 'channel.session.customer.order.item.list',
  'LIST_SESSION_CUSTOMER_SOURCES': 'channel.session.customer.source.list',
  'LIST_SESSION_CUSTOMER_USERS': 'channel.session.customer.user.list',
}

export const AUTH_COMMANDS = {
  'CHECKOUT_SESSION_CART': 'checkout.channel.session.cart',
  'UPDATE_SESSION_CART': 'update.channel.session.cart',
  'CHANGE_SESSION_CART': 'change.channel.session.cart',
  'SET_SESSION_CART_BILLING': 'set.channel.session.cart.address_billing',
  'SET_SESSION_CART_SHIPPING': 'set.channel.session.cart.address_shipping',
  'SET_SESSION_CART_PAYMENT': 'set.channel.session.cart.payment_details',
  'CREATE_SESSION_CART_ITEM': 'create.channel.session.cart.item',
  'UPDATE_SESSION_CART_ITEM': 'update.channel.session.cart.item',
  'REMOVE_SESSION_CART_ITEM': 'remove.channel.session.cart.item',

  'UPDATE_SESSION_CUSTOMER': 'update.channel.session.customer',
  'CHANGE_SESSION_CUSTOMER': 'change.channel.session.customer',
  'SET_SESSION_CUSTOMER_BILLING': 'srt.channel.session.customer.address_billing',
  'SET_SESSION_CUSTOMER_SHIPPING': 'srt.channel.session.customer.address_shipping',

  'SET_RECOVERY': 'set.recovery.user',
  'RECOVER': 'recover.user',
  // 'START_SESSION': 'start.channel.session',
  // 'END_SESSION': 'end.channel.session',

  'UPDATE_SESSION_USER': 'update.channel.session.user',

  'REGISTER_USER': 'register.channel.user',
  'LOGIN_USER': 'login.channel.user',
  'LOGOUT_USER': 'logout.channel.user',
}

export const AUTH_EVENTS = {
  'RECOVERY_SET': 'user.recovery.set',
  'RECOVERED': 'user.recovered',

  'SESSION_USER_UPDATED': 'channel.session.user.updated'

  // 'SESSION_STARTED': 'channel.session.started',
  // 'SESSION_ENDED': 'channel.session.ended',
  // 'USER_REGISTERED': 'channel.user.registered',
  // 'USER_LOGGED_IN': 'channel.user.logged_in',
  // 'USER_LOGGED_OUT': 'channel.user.logged_out',
}
