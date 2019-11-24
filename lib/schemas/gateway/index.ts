import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'


export const gateway = {
  channel_uuid: uuid,
  gateway_uuid: uuid,
}

export const commands = {
  [COMMANDS.CREATE_GATEWAY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [COMMANDS.UPDATE_GATEWAY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      gateway_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [COMMANDS.PUBLISH_GATEWAY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      gateway_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [COMMANDS.UNPUBLISH_GATEWAY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      gateway_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [COMMANDS.UPLOAD_GATEWAYS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [COMMANDS.PROCESS_UPLOADED_GATEWAYS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_GATEWAY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      gateway_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [ACTIONS.GET_GATEWAY_PRIMARY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [ACTIONS.LIST_GATEWAYS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [ACTIONS.LIST_GATEWAY_EVENTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      gateway_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },

  [ACTIONS.LIST_GATEWAY_UPLOADS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }),
    body: joi.object().keys({
      ...gateway,
    }).unknown()
  },


}
