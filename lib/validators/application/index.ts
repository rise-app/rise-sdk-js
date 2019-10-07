import { Utils } from '../../Utils'
import { application as applicationSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const application = {

  /***********************************
   * Application
   ***********************************/

  // Commands
  [COMMANDS.CREATE_APPLICATION]: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.CREATE_APPLICATION]),
  [COMMANDS.UPDATE_APPLICATION]: (data) => Utils.joiPromise(data, applicationSchema.commands[COMMANDS.UPDATE_APPLICATION]),

  // Actions
  [ACTIONS.GET_APPLICATION]: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.GET_APPLICATION]),
  [ACTIONS.LIST_APPLICATIONS]: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.LIST_APPLICATIONS]),

  [ACTIONS.SUBSCRIBE_APPLICATION]: (data) => Utils.joiPromise(data, applicationSchema.actions[ACTIONS.SUBSCRIBE_APPLICATION]),

}
