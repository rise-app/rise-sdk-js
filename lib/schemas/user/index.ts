import joi from 'joi'
import { ACTIONS, COMMANDS } from '../../enums'

const uuid = joi.string().guid()

export const general = {
  channel_uuid: uuid.required(),
}

export const commands = {

  [COMMANDS.LOGIN_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
    user_uuid: uuid,
    username: joi.string().min(3),
    email: joi.string(),
    password: joi.string().min(8),
  }).unknown().or('email', 'username'),

  [COMMANDS.LOGOUT_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REGISTER_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
    username: joi.string().min(3),
    email: joi.string(),
    password: joi.string().min(8),
  }).unknown().or('email', 'username'),

  [COMMANDS.CREATE_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
    email: joi.string().allow(null)
  }).unknown(),

  [COMMANDS.UPDATE_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
    user_uuid: uuid.required(),
    email: joi.string().allow(null),
    name_first: joi.string().allow(null),
    name_last: joi.string().allow(null)
  }).unknown(),

}

export const actions = {
  [ACTIONS.GET_SESSION]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_SESSION_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_SESSION_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_SESSION_CHANNEL]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_SESSION_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
    user_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_USER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),


  [ACTIONS.LIST_USERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_USERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
