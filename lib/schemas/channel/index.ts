import joi from 'joi'
import { ACTIONS, COMMANDS } from '../../enums'
const uuid = joi.string().guid()

export const channel = joi.object().keys({
  channel_uuid: uuid.required(),
  // handle: joi.string().required(),
  // title: joi.string().required(),
  // published: joi.boolean()
})

export const commands = {
  [COMMANDS.CREATE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.UPDATE]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
