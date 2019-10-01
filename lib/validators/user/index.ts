import { Utils } from '../../Utils'
import { user as userSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

// TODO refactor keys to match commands/actions
export const user = {

  // Commands
  'register': (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.REGISTER_USER]),
  'login': (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.LOGIN_USER]),
  'logout': (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.LOGOUT_USER]),
  'create': (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.CREATE_USER]),
  'update': (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.UPDATE_USER]),

  // Actions
  'session': (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_SESSION]),
  'get': (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_USER]),
  'list': (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.LIST_USERS])
}
