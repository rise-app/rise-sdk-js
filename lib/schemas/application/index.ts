import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_APPLICATION]: joi.object().keys({
    channel_uuid: uuid.required(),
    email: joi.string().allow(null)
  }).unknown(),

  [COMMANDS.UPDATE_APPLICATION]: joi.object().keys({
    channel_uuid: uuid.required(),
    application_uuid: uuid.required(),
    email: joi.string().allow(null),
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_APPLICATION]: joi.object().keys({
    channel_uuid: uuid.required(),
    application_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_APPLICATIONS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.SUBSCRIBE_APPLICATION]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
