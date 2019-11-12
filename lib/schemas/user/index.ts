import joi from 'joi'
import { ACTIONS, COMMANDS } from '../../enums'

const uuid = joi.string().guid()

export const general = {
  channel_uuid: uuid.required(),
}

export const commands = {

  [COMMANDS.LOGIN_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      user_uuid: uuid,
      username: joi.string().min(3),
      identifier: joi.string().min(3),
      email: joi.string(),
      password: joi.string().min(8),
    }).unknown().or('email', 'username', 'identifier')
  },

  [COMMANDS.LOGOUT_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.REGISTER_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
      username: joi.string().min(3),
      email: joi.string(),
      password: joi.string().min(8),
    }).unknown().or('email', 'username'),
  },

  [COMMANDS.CREATE_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
      username: joi.string().min(3),
      email: joi.string(),
      name_prefix: joi.string().allow(null),
      name_first: joi.string().allow(null),
      name_last: joi.string().allow(null),
      name_suffix: joi.string().allow(null),
      phone: joi.string().allow(null),
      phone_sms: joi.string().allow(null),
    }).unknown().or('email', 'username')
  },

  [COMMANDS.UPDATE_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      user_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
      email: joi.string().allow(null),
      name_prefix: joi.string().allow(null),
      name_first: joi.string().allow(null),
      name_last: joi.string().allow(null),
      name_suffix: joi.string().allow(null),
      phone: joi.string().allow(null),
      phone_sms: joi.string().allow(null),
    }).unknown(),
  },

}

export const actions = {
  [ACTIONS.GET_SESSION]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_CUSTOMER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_CHANNEL]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      user_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.FIND_USER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },


  [ACTIONS.LIST_USERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.FIND_USERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
}
