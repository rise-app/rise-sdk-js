import { Utils } from '../../Utils'
import { user as userSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

// TODO refactor keys to match commands/actions
export const user = {

  // Commands
  [COMMANDS.CREATE_USER]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.CREATE_USER].params),
    body: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.CREATE_USER].body),
  },
  [COMMANDS.UPDATE_USER]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.UPDATE_USER].params),
    body: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.UPDATE_USER].body),
  },

  // Actions
  [ACTIONS.GET_USER]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_USER].params)
  },
  [ACTIONS.LIST_USERS]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.LIST_USERS].params)
  }
}
