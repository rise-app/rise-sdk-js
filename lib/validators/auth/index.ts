import { Utils } from '../../Utils'
import { auth as authSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const auth = {
  // COMMANDS
  [COMMANDS.REGISTER_USER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.REGISTER_USER].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.REGISTER_USER].body),
  },
  [COMMANDS.LOGIN_USER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.LOGIN_USER].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.LOGIN_USER].body),
  },
  [COMMANDS.LOGOUT_USER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.LOGOUT_USER].params),
  },

  [COMMANDS.UPDATE_SESSION_CART]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART].body)
  },
  [COMMANDS.CHECKOUT_SESSION_CART]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART].body)
  },
  [COMMANDS.SET_SESSION_CART_BILLING]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_BILLING].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_BILLING].body)
  },
  [COMMANDS.SET_SESSION_CART_PAYMENT]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_PAYMENT].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_PAYMENT].body)
  },
  [COMMANDS.SET_SESSION_CART_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CART_SHIPPING].body)
  },
  [COMMANDS.CREATE_SESSION_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.CREATE_SESSION_CART_ITEM].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.CREATE_SESSION_CART_ITEM].body)
  },
  [COMMANDS.UPDATE_SESSION_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART_ITEM].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CART_ITEM].body)
  },
  [COMMANDS.REMOVE_SESSION_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.REMOVE_SESSION_CART_ITEM].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.REMOVE_SESSION_CART_ITEM].body)
  },

  [COMMANDS.UPDATE_SESSION_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CUSTOMER].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.UPDATE_SESSION_CUSTOMER].body)
  },
  [COMMANDS.SET_SESSION_CUSTOMER_BILLING]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CUSTOMER_BILLING].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CUSTOMER_BILLING].body)
  },
  [COMMANDS.SET_SESSION_CUSTOMER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CUSTOMER_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_SESSION_CUSTOMER_SHIPPING].body)
  },

  [COMMANDS.SET_RECOVERY]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_RECOVERY].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_RECOVERY].body)
  },
  [COMMANDS.RECOVER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.RECOVER].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.RECOVER].body)
  },

  // Actions
  [ACTIONS.GET_SESSION]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION].params)
  },
  [ACTIONS.GET_SESSION_CART]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CART].params)
  },
  [ACTIONS.GET_SESSION_CART_BILLING]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CART_BILLING].params)
  },
  [ACTIONS.GET_SESSION_CART_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CART_SHIPPING].params)
  },
  [ACTIONS.GET_SESSION_CART_PAYMENT]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CART_PAYMENT].params)
  },

  [ACTIONS.GET_SESSION_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CART_ITEM].params)
  },
  [ACTIONS.LIST_SESSION_CART_ITEMS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CART_ITEMS].params)
  },

  [ACTIONS.GET_SESSION_CHANNEL]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CHANNEL].params)
  },
  [ACTIONS.GET_SESSION_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CUSTOMER].params)
  },
  [ACTIONS.GET_SESSION_CUSTOMER_BILLING]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CUSTOMER].params)
  },
  [ACTIONS.GET_SESSION_CUSTOMER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CUSTOMER].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_CARTS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_CARTS].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_SOURCES]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_SOURCES].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_FEEDS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_FEEDS].params)
  },
  [ACTIONS.GET_SESSION_CUSTOMER_ORDER]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_CUSTOMER_ORDER].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_ORDERS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_ORDERS].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_ORDER_ITEMS].params)
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_USERS]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_CUSTOMER_USERS].params)
  },

  [ACTIONS.LIST_SESSION_ROLES]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.LIST_SESSION_ROLES].params)
  },
  [ACTIONS.GET_SESSION_USER]: {
    params: (data) => Utils.joiPromise(data, authSchema.actions[ACTIONS.GET_SESSION_USER].params)
  },
}
