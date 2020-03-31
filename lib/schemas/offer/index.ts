import joi from '@hapi/joi'
const uuid = joi.string().guid()
import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      product_uuid: uuid.required(),
    }).unknown()
  },

  [COMMANDS.ADD_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.PUBLISH_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      published_scope: joi.string()
    }).unknown()
  },

  [COMMANDS.UNPUBLISH_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      published_scope: joi.string()
    }).unknown()
  },

  [COMMANDS.REMOVE_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_OFFER_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
      variant_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  
  [COMMANDS.ADD_OFFER_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  
  [COMMANDS.UPLOAD_OFFERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_OFFERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.UPLOAD_OFFER_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_OFFER_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_OFFER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_OFFERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_OFFERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },


  [ACTIONS.GET_OFFER_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required(),
      variant_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_OFFER_VARIANTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      offer_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_OFFER_VARIANTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_OFFER_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_OFFER_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_OFFER_METADATA_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_OFFER_METADATA_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
