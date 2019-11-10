import { Utils } from '../../Utils'
import { application as applicationSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const application = {

  /***********************************
   * Application
   ***********************************/

  // Commands
  [COMMANDS.CREATE_APPLICATION]: {
    params: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.CREATE_APPLICATION].params),
    body: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.CREATE_APPLICATION].body)
  },
  [COMMANDS.UPDATE_APPLICATION]: {
    params: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.UPDATE_APPLICATION].params),
    body: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.UPDATE_APPLICATION].body)
  },

  // Actions
  [ACTIONS.GET_APPLICATION]: {
    params: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.GET_APPLICATION].params)
  },
  [ACTIONS.LIST_APPLICATIONS]: {
    params: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.LIST_APPLICATIONS].params)
  },

  [ACTIONS.SUBSCRIBE_APPLICATION]: {
    params: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.SUBSCRIBE_APPLICATION].params)
  },

}
