import { Utils } from '../../Utils'
import {order as orderSchema} from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const order = {

  /***********************************
   * Order
   ***********************************/

  // Commands
  [COMMANDS.CREATE_ORDER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER].body),
  },
  [COMMANDS.UPDATE_ORDER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER].body)
  },
  [COMMANDS.SET_ORDER_BILLING]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_BILLING].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_BILLING].body),
  },
  [COMMANDS.SET_ORDER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_SHIPPING].body),
  },
  [COMMANDS.SET_ORDER_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_CUSTOMER].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_CUSTOMER].body),
  },
  [COMMANDS.SET_ORDER_FULFILLMENT]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_FULFILLMENT].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.SET_ORDER_FULFILLMENT].body),
  },
  [COMMANDS.CLOSE_ORDER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CLOSE_ORDER].params)
  },

  // Actions
  [ACTIONS.GET_ORDER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER].params)
  },

  [ACTIONS.LIST_ORDERS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.LIST_ORDERS].params)
  },

  [ACTIONS.GET_ORDER_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_CUSTOMER].params)
  },

  [ACTIONS.GET_ORDER_BILLING]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_BILLING].params)
  },

  [ACTIONS.GET_ORDER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_SHIPPING].params)
  },

  [ACTIONS.GET_ORDER_FULFILLMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_FULFILLMENT_DETAILS].params)
  },

  [ACTIONS.GET_ORDER_PAYMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_PAYMENT_DETAILS].params)
  },


  /***********************************
   * Order Items
   ***********************************/

  // Commands
  [COMMANDS.CREATE_ORDER_ITEM]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEM].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEM].body)
  },
  [COMMANDS.CREATE_ORDER_ITEMS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEM].params),
    body: (data) => Utils.joiPromiseMap(data, orderSchema.commands[COMMANDS.CREATE_ORDER_ITEM].body)
  },
  [COMMANDS.UPDATE_ORDER_ITEM]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER_ITEM].params),
    body: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.UPDATE_ORDER_ITEM].body),
  },
  [COMMANDS.REMOVE_ORDER_ITEM]: {
    params: (data) => Utils.joiPromise(data, orderSchema.commands[COMMANDS.REMOVE_ORDER_ITEM].params)
  },

  // Actions
  [ACTIONS.GET_ORDER_ITEM]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM].params)
  },
  [ACTIONS.LIST_ORDER_ITEMS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.LIST_ORDER_ITEMS].params)
  },

  [ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS].params)
  },
  [ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS]: {
    params: (data) => Utils.joiPromise(data, orderSchema.actions[ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS].params)
  },

}
