import joi from '@hapi/joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_TASK]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  // [COMMANDS.ADD_TASK]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     task_uuid: uuid.required(),
  //   }).unknown(),
  //   body: joi.object().keys({
  //   }).unknown()
  // },

  [COMMANDS.UPDATE_TASK]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      task_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },


  // [COMMANDS.UPLOAD_TASKS]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //   }).unknown()
  // },
  // [COMMANDS.PROCESS_UPLOADED_TASKS]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     upload_uuid: uuid.required(),
  //   }).unknown()
  // },
  // [COMMANDS.UPLOAD_TASK_INVENTORY]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //   }).unknown()
  // },
  // [COMMANDS.PROCESS_UPLOADED_TASK_INVENTORY]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     upload_uuid: uuid.required(),
  //   }).unknown()
  // },
}

export const actions = {
  [ACTIONS.GET_TASK]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      task_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_TASK]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },


  [ACTIONS.LIST_TASKS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_TASKS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  // [ACTIONS.GET_TASK_UPLOAD_RESULT]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     upload_uuid: uuid.required(),
  //   }).unknown()
  // },
  // [ACTIONS.LIST_TASK_UPLOAD_RESULTS]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required()
  //   }).unknown()
  // },
  //
  // [ACTIONS.GET_TASK_INVENTORY_UPLOAD_RESULT]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required(),
  //     upload_uuid: uuid.required(),
  //   }).unknown()
  // },
  // [ACTIONS.LIST_TASK_INVENTORY_UPLOAD_RESULTS]: {
  //   params: joi.object().keys({
  //     channel_uuid: uuid.required()
  //   }).unknown()
  // },
}
