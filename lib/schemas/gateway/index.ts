import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'


export const gateway = {
  channel_uuid: uuid,
  gateway_uuid: uuid,
}

export const commands = {
  [COMMANDS.CREATE_GATEWAY]: joi.object().keys({
    ...gateway,
    channel_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.UPDATE_GATEWAY]: joi.object().keys({
    ...gateway,
    channel_uuid: uuid.required(),
    gateway_uuid: uuid.required()
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_GATEWAY]: joi.object().keys({
    channel_uuid: uuid.required(),
    gateway_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_GATEWAYS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}