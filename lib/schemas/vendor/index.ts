import joi from '@hapi/joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_VENDOR]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  // [COMMANDS.ADD_VENDOR]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     vendor_uuid: uuid.required(),
  //   }).unknown(),
  //   body: joi.object().keys({
  //   }).unknown()
  // },

  [COMMANDS.UPDATE_VENDOR]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      vendor_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },


  [COMMANDS.UPLOAD_VENDORS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_VENDORS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.UPLOAD_VENDOR_INVENTORY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [COMMANDS.PROCESS_UPLOADED_VENDOR_INVENTORY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
}

export const actions = {
  [ACTIONS.GET_VENDOR]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      vendor_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_VENDOR]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },


  [ACTIONS.LIST_VENDORS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_VENDORS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_VENDOR_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_VENDOR_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_VENDOR_INVENTORY_UPLOAD_RESULT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      upload_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_VENDOR_INVENTORY_UPLOAD_RESULTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
