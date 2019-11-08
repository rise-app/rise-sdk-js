import { Utils } from '../../Utils'
import { gateway as gatewaySchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const gateway = {

  /***********************************
   * Gateway
   ***********************************/

  // Commands
  // [COMMANDS.CREATE_GATEWAY]: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.CREATE_GATEWAY]),
  // [COMMANDS.UPDATE_GATEWAY]: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.UPDATE_GATEWAY]),

  // Actions
  [ACTIONS.GET_GATEWAY]: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.GET_GATEWAY]),
  // [ACTIONS.LIST_GATEWAYS]: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.LIST_GATEWAYS]),
}
