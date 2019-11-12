import { Utils } from '../../Utils'
import { gateway as gatewaySchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const gateway = {

  /***********************************
   * Gateway
   ***********************************/

  // Commands
  [COMMANDS.CREATE_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.CREATE_GATEWAY].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.CREATE_GATEWAY].body),
  },
  [COMMANDS.UPDATE_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.UPDATE_GATEWAY].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.UPDATE_GATEWAY].body),
  },

  // Actions
  [ACTIONS.GET_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[ACTIONS.GET_GATEWAY].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[ACTIONS.GET_GATEWAY].body),
  },
  [ACTIONS.LIST_GATEWAYS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[ACTIONS.LIST_GATEWAYS].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[ACTIONS.LIST_GATEWAYS].body),
  },
}
