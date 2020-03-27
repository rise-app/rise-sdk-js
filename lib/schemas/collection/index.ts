import joi from '@hapi/joi'
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


  [COMMANDS.UPLOAD_COLLECTIONS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_COLLECTIONS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.UPLOAD_COLLECTION_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_COLLECTION_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
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

  [ACTIONS.GET_COLLECTION_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_COLLECTION_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_COLLECTION_METADATA_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_COLLECTION_METADATA_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
