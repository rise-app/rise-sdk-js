import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_COLLECTION]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.ADD_COLLECTION]: joi.object().keys({
    channel_uuid: uuid.required(),
    collection_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.UPDATE_COLLECTION]: joi.object().keys({
    channel_uuid: uuid.required(),
    collection_uuid: uuid.required(),
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_COLLECTION]: joi.object().keys({
    channel_uuid: uuid.required(),
    collection_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_COLLECTION]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),


  [ACTIONS.LIST_COLLECTIONS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_COLLECTIONS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
