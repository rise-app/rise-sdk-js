import { Utils } from '../../Utils'
import {customer as customerSchema} from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const customer = {
  // Commands
  'create': (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.CREATE_CUSTOMER]),
  'update': (data) => Utils.joiPromise(data, customerSchema.commands[COMMANDS.UPDATE_CUSTOMER]),

  // Actions
  'get': (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.GET_CUSTOMER]),
  'list': (data) => Utils.joiPromise(data, customerSchema.actions[ACTIONS.LIST_CUSTOMERS])
}
