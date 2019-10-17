import { Utils } from '../../Utils'
import { customer as customerSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const customer = {
  // COMMANDS
  [COMMANDS.CREATE_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.CREATE_CUSTOMER]),
  [COMMANDS.UPDATE_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPDATE_CUSTOMER]),
  [COMMANDS.SET_CUSTOMER_BILLING]: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_BILLING]),
  [COMMANDS.SET_CUSTOMER_SHIPPING]: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_SHIPPING]),
  
  
  // ACTIONS
  [ACTIONS.GET_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER]),
  [ACTIONS.GET_PUBLIC_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_PUBLIC_CUSTOMER]),
  [ACTIONS.FIND_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_CUSTOMER]),
  [ACTIONS.FIND_PUBLIC_CUSTOMER]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_PUBLIC_CUSTOMER]),
  [ACTIONS.LIST_CUSTOMERS]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.LIST_CUSTOMERS]),
  [ACTIONS.FIND_CUSTOMERS]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_CUSTOMERS]),

  [ACTIONS.GET_CUSTOMER_BILLING]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_BILLING]),
  [ACTIONS.GET_CUSTOMER_SHIPPING]: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_SHIPPING])
}
