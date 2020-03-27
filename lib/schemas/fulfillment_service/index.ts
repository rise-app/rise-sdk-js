import joi from '@hapi/joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'


export const fulfillment_service = {
  channel_uuid: uuid,
  service_uuid: uuid,
}

export const commands = {
  [COMMANDS.CREATE_FULFILLMENT_SERVICE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },

  [COMMANDS.UPDATE_FULFILLMENT_SERVICE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      service_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },

  [COMMANDS.PUBLISH_FULFILLMENT_SERVICE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      service_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },

  [COMMANDS.UNPUBLISH_FULFILLMENT_SERVICE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      service_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },

  [COMMANDS.UPLOAD_FULFILLMENT_SERVICES]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },

  [COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...fulfillment_service,
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_FULFILLMENT_SERVICE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      service_uuid: uuid.required()
    })
  },

  [ACTIONS.LIST_FULFILLMENT_SERVICES]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    })
  },

  [ACTIONS.LIST_FULFILLMENT_SERVICE_EVENTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      service_uuid: uuid.required()
    })
  },

  [ACTIONS.LIST_FULFILLMENT_SERVICE_UPLOADS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    })
  },


}
