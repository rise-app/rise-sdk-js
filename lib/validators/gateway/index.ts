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
  [COMMANDS.PUBLISH_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PUBLISH_GATEWAY].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PUBLISH_GATEWAY].body),
  },
  [COMMANDS.UNPUBLISH_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PUBLISH_GATEWAY].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PUBLISH_GATEWAY].body),
  },
  [COMMANDS.UPLOAD_GATEWAYS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.UPLOAD_GATEWAYS].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.UPLOAD_GATEWAYS].body),
  },
  [COMMANDS.PROCESS_UPLOADED_GATEWAYS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PROCESS_UPLOADED_GATEWAYS].params),
    body: (data) => Utils.joiPromise(data, gatewaySchema.commands[COMMANDS.PROCESS_UPLOADED_GATEWAYS].body),
  },

  // Actions
  [ACTIONS.GET_GATEWAY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.GET_GATEWAY].params)
  },
  [ACTIONS.GET_GATEWAY_UPLOAD]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.GET_GATEWAY_UPLOAD].params)
  },
  [ACTIONS.LIST_GATEWAYS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.LIST_GATEWAYS].params)
  },
  [ACTIONS.LIST_GATEWAY_EVENTS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.LIST_GATEWAY_EVENTS].params)
  },
  [ACTIONS.LIST_GATEWAY_UPLOADS]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.LIST_GATEWAY_UPLOADS].params)
  },
  [ACTIONS.GET_GATEWAY_PRIMARY]: {
    params: (data) => Utils.joiPromise(data, gatewaySchema.actions[ACTIONS.GET_GATEWAY_PRIMARY].params)
  },
}
