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

  [COMMANDS.UPLOAD_USERS]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.UPLOAD_USERS].params)
  },
  [COMMANDS.PROCESS_UPLOADED_USERS]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.PROCESS_UPLOADED_USERS].params)
  },
  [COMMANDS.UPLOAD_USER_METADATA]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.UPLOAD_USER_METADATA].params)
  },
  [COMMANDS.PROCESS_UPLOADED_USER_METADATA]: {
    params: (data) => Utils.joiPromise(data, userSchema.commands[COMMANDS.PROCESS_UPLOADED_USER_METADATA].params)
  },

  // Actions
  [ACTIONS.GET_USER]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_USER].params)
  },
  [ACTIONS.LIST_USERS]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.LIST_USERS].params)
  },


  [ACTIONS.GET_USER_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_USER_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_USER_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.LIST_USER_UPLOAD_RESULTS].params)
  },
  [ACTIONS.GET_USER_METADATA_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.GET_USER_METADATA_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_USER_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, userSchema.actions[ACTIONS.LIST_USER_METADATA_UPLOAD_RESULTS].params)
  },

}
