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

  [COMMANDS.UPLOAD_CUSTOMERS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPLOAD_CUSTOMERS].params)
  },
  [COMMANDS.PROCESS_UPLOADED_CUSTOMERS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.PROCESS_UPLOADED_CUSTOMERS].params)
  },
  [COMMANDS.UPLOAD_CUSTOMER_METADATA]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPLOAD_CUSTOMER_METADATA].params)
  },
  [COMMANDS.PROCESS_UPLOADED_CUSTOMER_METADATA]: {
    params: (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.PROCESS_UPLOADED_CUSTOMER_METADATA].params)
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
  },


  [ACTIONS.GET_CUSTOMER_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_CUSTOMER_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.LIST_CUSTOMER_UPLOAD_RESULTS].params)
  },
  [ACTIONS.GET_CUSTOMER_METADATA_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER_METADATA_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_CUSTOMER_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.LIST_CUSTOMER_METADATA_UPLOAD_RESULTS].params)
  },
}
