import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

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

  [COMMANDS.UPDATE_SESSION_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.SET_SESSION_CART_SHIPPING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.SET_SESSION_CART_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.SET_SESSION_CART_PAYMENT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.CREATE_SESSION_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.UPDATE_SESSION_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.REMOVE_SESSION_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_SESSION_CUSTOMER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.SET_SESSION_CUSTOMER_SHIPPING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },
  [COMMANDS.SET_SESSION_CUSTOMER_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.SET_RECOVERY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      identifier: joi.string(),
      email: joi.string(),
      username: joi.string(),
      redirect: joi.string(),
    }).unknown()
  },
  [COMMANDS.RECOVER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      recovery: joi.string(),
      password: joi.string(),
      redirect: joi.string(),
    }).unknown()
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
  [ACTIONS.GET_SESSION_CART_PAYMENT]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.GET_SESSION_CART_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.GET_SESSION_CART_SHIPPING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_SESSION_CART_ITEMS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_CUSTOMER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.GET_SESSION_CUSTOMER_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.GET_SESSION_CUSTOMER_SHIPPING]: {
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

  [ACTIONS.LIST_SESSION_CUSTOMER_CARTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_ACCOUNTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_FEEDS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
  [ACTIONS.LIST_SESSION_CUSTOMER_SOURCES]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.LIST_SESSION_CUSTOMER_ORDERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },
  [ACTIONS.GET_SESSION_CUSTOMER_ORDER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      order_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.LIST_SESSION_CUSTOMER_USERS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.LIST_SESSION_ROLES]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_SESSION_CHANNEL]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
  [ACTIONS.LIST_SESSION_CHANNELS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown()
  },
}
