import { Utils } from '../../Utils'
import {cart as cartSchema} from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const cart = {

  /***********************************
   * Cart
   ***********************************/

  // Commands
  [COMMANDS.CREATE_CART]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART].body),
  },
  [COMMANDS.UPDATE_CART]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART].body)
  },
  [COMMANDS.SET_CART_BILLING]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_BILLING].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_BILLING].body),
  },
  [COMMANDS.SET_CART_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_SHIPPING].body),
  },
  [COMMANDS.SET_CART_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_CUSTOMER].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_CUSTOMER].body),
  },
  [COMMANDS.SET_CART_FULFILLMENT]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_FULFILLMENT].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_FULFILLMENT].body),
  },
  [COMMANDS.CHECKOUT_CART]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CHECKOUT_CART].params)
  },

  // Actions
  [ACTIONS.GET_CART]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART].params)
  },

  [ACTIONS.LIST_CARTS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.LIST_CARTS].params)
  },

  [ACTIONS.GET_CART_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_CUSTOMER].params)
  },

  [ACTIONS.GET_CART_BILLING]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_BILLING].params)
  },

  [ACTIONS.GET_CART_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_SHIPPING].params)
  },

  [ACTIONS.GET_CART_FULFILLMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_FULFILLMENT_DETAILS].params)
  },

  [ACTIONS.GET_CART_PAYMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_PAYMENT_DETAILS].params)
  },


  /***********************************
   * Cart Items
   ***********************************/

  // Commands
  [COMMANDS.CREATE_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEM].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEM].body)
  },
  [COMMANDS.CREATE_CART_ITEMS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEM].params),
    body: (data) => Utils.joiPromiseMap(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEM].body)
  },
  [COMMANDS.UPDATE_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART_ITEM].params),
    body: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART_ITEM].body),
  },
  [COMMANDS.REMOVE_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.REMOVE_CART_ITEM].params)
  },

  // Actions
  [ACTIONS.GET_CART_ITEM]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM].params)
  },
  [ACTIONS.LIST_CART_ITEMS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.LIST_CART_ITEMS].params)
  },

  [ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS].params)
  },
  [ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS].params)
  },

}
