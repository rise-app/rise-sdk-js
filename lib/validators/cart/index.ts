import { Utils } from '../../Utils'
import {cart as cartSchema} from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const cart = {

  /***********************************
   * Cart
   ***********************************/

  // Commands
  [COMMANDS.CREATE_CART]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART]),
  [COMMANDS.UPDATE_CART]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART]),
  [COMMANDS.SET_CART_BILLING]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_BILLING]),
  [COMMANDS.SET_CART_SHIPPING]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_SHIPPING]),
  [COMMANDS.SET_CART_CUSTOMER]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_CUSTOMER]),
  [COMMANDS.SET_CART_BILLING]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_PAYMENT]),
  [COMMANDS.SET_CART_FULFILLMENT]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.SET_CART_FULFILLMENT]),
  [COMMANDS.CHECKOUT_CART]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CHECKOUT_CART]),

  // Actions
  [ACTIONS.GET_CART]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART]),
  [ACTIONS.LIST_CARTS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.LIST_CARTS]),

  [ACTIONS.GET_CART_CUSTOMER]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_CUSTOMER]),
  [ACTIONS.GET_CART_BILLING]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_BILLING]),
  [ACTIONS.GET_CART_SHIPPING]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_SHIPPING]),
  [ACTIONS.GET_CART_FULFILLMENT_DETAILS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_FULFILLMENT_DETAILS]),
  [ACTIONS.GET_CART_PAYMENT_DETAILS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_PAYMENT_DETAILS]),


  /***********************************
   * Cart Items
   ***********************************/

  // Commands
  [COMMANDS.CREATE_CART_ITEM]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEM]),
  [COMMANDS.CREATE_CART_ITEMS]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.CREATE_CART_ITEMS]),
  [COMMANDS.UPDATE_CART_ITEM]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.UPDATE_CART_ITEM]),
  [COMMANDS.REMOVE_CART_ITEM]: (data) => Utils.joiPromise(data, cartSchema.commands[COMMANDS.REMOVE_CART_ITEM]),

  // Actions
  [ACTIONS.GET_CART_ITEM]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM]),
  [ACTIONS.LIST_CART_ITEMS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.LIST_CART_ITEMS]),

  [ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS]),
  [ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS]: (data) => Utils.joiPromise(data, cartSchema.actions[ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS]),

}
