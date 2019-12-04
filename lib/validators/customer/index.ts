import { Utils } from '../../Utils'
import { customer as customerSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const customer = {

  // COMMANDS
  [COMMANDS.CREATE_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.CREATE_CUSTOMER].params),
    body: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.CREATE_CUSTOMER].body)
  },
  [COMMANDS.UPDATE_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPDATE_CUSTOMER].params),
    body: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPDATE_CUSTOMER].body),
  },
  [COMMANDS.SET_CUSTOMER_BILLING]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_BILLING].params),
    body: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_BILLING].body)
  },
  [COMMANDS.SET_CUSTOMER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.SET_CUSTOMER_SHIPPING].body)
  },


  // ACTIONS
  [ACTIONS.GET_PUBLIC_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_PUBLIC_CUSTOMER].params)
  },
  [ACTIONS.FIND_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_CUSTOMER].params)
  },
  [ACTIONS.FIND_PUBLIC_CUSTOMER]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_PUBLIC_CUSTOMER].params)
  },
  [ACTIONS.LIST_CUSTOMERS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.LIST_CUSTOMERS].params)
  },
  [ACTIONS.FIND_CUSTOMERS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.FIND_CUSTOMERS].params)
  },
  [ACTIONS.GET_CUSTOMER_BILLING]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_BILLING].params)
  },
  [ACTIONS.GET_CUSTOMER_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_SHIPPING].params)
  }
}
