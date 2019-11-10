import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_COLLECTION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.ADD_COLLECTION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      collection_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_COLLECTION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      collection_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_COLLECTION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      collection_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_COLLECTION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },


  [ACTIONS.LIST_COLLECTIONS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_COLLECTIONS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
