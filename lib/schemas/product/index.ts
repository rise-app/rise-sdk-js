import joi from 'joi'
const uuid = joi.string().guid()
import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      product_uuid: uuid.required(),
    }).unknown()
  },

  [COMMANDS.ADD_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.PUBLISH_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      published_scope: joi.string()
    }).unknown()
  },

  [COMMANDS.UNPUBLISH_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      published_scope: joi.string()
    }).unknown()
  },

  [COMMANDS.REMOVE_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },


  [COMMANDS.CREATE_PRODUCT_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      product_uuid: uuid.required(),
    }).unknown()
  },

  [COMMANDS.ADD_PRODUCT_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.ADD_PRODUCT_VARIANTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_PRODUCT_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.REMOVE_PRODUCT_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown()
  },

  [COMMANDS.UPLOAD_PRODUCTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_PRODUCTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.UPLOAD_PRODUCT_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_PRODUCT_METADATA]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_PRODUCT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_PRODUCTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_PRODUCTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },


  [ACTIONS.GET_PRODUCT_VARIANT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required(),
      variant_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_PRODUCT_VARIANTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      product_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_PRODUCT_VARIANTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },


  [ACTIONS.GET_PRODUCT_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_PRODUCT_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_PRODUCT_METADATA_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_PRODUCT_METADATA_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
