import { Utils } from '../../Utils'
import {order as orderSchema} from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const order = {

  /***********************************
   * Order
   ***********************************/

  // Commands
  [COMMANDS.CREATE_ORDER]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER]),
  [COMMANDS.UPDATE_ORDER]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER]),
  [COMMANDS.SET_ORDER_BILLING]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_BILLING]),
  [COMMANDS.SET_ORDER_SHIPPING]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_SHIPPING]),
  [COMMANDS.SET_ORDER_CUSTOMER]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_CUSTOMER]),
  [COMMANDS.SET_ORDER_BILLING]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_PAYMENT]),
  [COMMANDS.SET_ORDER_FULFILLMENT]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_FULFILLMENT]),
  [COMMANDS.CLOSE_ORDER]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CLOSE_ORDER]),

  // Actions
  [ACTIONS.GET_ORDER]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER]),
  [ACTIONS.LIST_ORDERS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.LIST_ORDERS]),

  [ACTIONS.GET_ORDER_CUSTOMER]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_CUSTOMER]),
  [ACTIONS.GET_ORDER_BILLING]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_BILLING]),
  [ACTIONS.GET_ORDER_SHIPPING]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_SHIPPING]),
  [ACTIONS.GET_ORDER_FULFILLMENT_DETAILS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_FULFILLMENT_DETAILS]),
  [ACTIONS.GET_ORDER_PAYMENT_DETAILS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_PAYMENT_DETAILS]),


  /***********************************
   * Order Items
   ***********************************/

  // Commands
  [COMMANDS.CREATE_ORDER_ITEM]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEM]),
  [COMMANDS.CREATE_ORDER_ITEMS]: (data) => Utils.joiPromiseMap(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEMS]),
  [COMMANDS.UPDATE_ORDER_ITEM]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER_ITEM]),
  [COMMANDS.REMOVE_ORDER_ITEM]: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.REMOVE_ORDER_ITEM]),

  // Actions
  [ACTIONS.GET_ORDER_ITEM]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM]),
  [ACTIONS.LIST_ORDER_ITEMS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.LIST_ORDER_ITEMS]),

  [ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS]),
  [ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS]: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS]),

}
