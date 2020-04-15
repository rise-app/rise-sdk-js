import { Utils } from '../../Utils'
import { fulfillment_service as fulfillmentServiceSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const fulfillment_service = {

  /***********************************
   * FulfillmentService
   ***********************************/

  // Commands
  [COMMANDS.CREATE_FULFILLMENT_SERVICE]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.CREATE_FULFILLMENT_SERVICE].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.CREATE_FULFILLMENT_SERVICE].body),
  },
  [COMMANDS.UPDATE_FULFILLMENT_SERVICE]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.UPDATE_FULFILLMENT_SERVICE].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.UPDATE_FULFILLMENT_SERVICE].body),
  },
  [COMMANDS.PUBLISH_FULFILLMENT_SERVICE]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PUBLISH_FULFILLMENT_SERVICE].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PUBLISH_FULFILLMENT_SERVICE].body),
  },
  [COMMANDS.UNPUBLISH_FULFILLMENT_SERVICE]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PUBLISH_FULFILLMENT_SERVICE].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PUBLISH_FULFILLMENT_SERVICE].body),
  },

  [COMMANDS.SET_FULFILLMENT_SERVICE_RETURNS]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.SET_FULFILLMENT_SERVICE_RETURNS].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.SET_FULFILLMENT_SERVICE_RETURNS].body)
  },
  [COMMANDS.SET_FULFILLMENT_SERVICE_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.SET_FULFILLMENT_SERVICE_SHIPPING].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.SET_FULFILLMENT_SERVICE_SHIPPING].body)
  },

  [COMMANDS.UPLOAD_FULFILLMENT_SERVICES]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.UPLOAD_FULFILLMENT_SERVICES].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.UPLOAD_FULFILLMENT_SERVICES].body),
  },
  [COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES].params),
    body: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.commands[COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES].body),
  },

  // Actions
  [ACTIONS.GET_FULFILLMENT_SERVICE]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.GET_FULFILLMENT_SERVICE].params)
  },
  [ACTIONS.GET_FULFILLMENT_SERVICE_RETURNS]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.GET_FULFILLMENT_SERVICE_RETURNS].params)
  },
  [ACTIONS.GET_FULFILLMENT_SERVICE_SHIPPING]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.GET_FULFILLMENT_SERVICE_SHIPPING].params)
  },

  [ACTIONS.LIST_FULFILLMENT_SERVICES]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.LIST_FULFILLMENT_SERVICES].params)
  },

  [ACTIONS.LIST_FULFILLMENT_SERVICE_EVENTS]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.LIST_FULFILLMENT_SERVICE_EVENTS].params)
  },

  [ACTIONS.GET_FULFILLMENT_SERVICE_UPLOAD]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.GET_FULFILLMENT_SERVICE_UPLOAD].params)
  },
  [ACTIONS.LIST_FULFILLMENT_SERVICE_UPLOADS]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.LIST_FULFILLMENT_SERVICE_UPLOADS].params)
  },

  [ACTIONS.GET_FULFILLMENT_SERVICE_PRIMARY]: {
    params: (data) => Utils.joiPromise(data, fulfillmentServiceSchema.actions[ACTIONS.GET_FULFILLMENT_SERVICE_PRIMARY].params)
  },
}
