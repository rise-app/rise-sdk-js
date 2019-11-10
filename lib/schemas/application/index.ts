import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_APPLICATION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
      email: joi.string().allow(null)
    }).unknown()
  },

  [COMMANDS.UPDATE_APPLICATION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      application_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      email: joi.string().allow(null),
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_APPLICATION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      application_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_APPLICATIONS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.SUBSCRIBE_APPLICATION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
