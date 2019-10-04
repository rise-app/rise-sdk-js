import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.ADD_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.UPDATE_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.REMOVE_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.PUBLISH_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.UNPUBLISH_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.ADD_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
    province_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.UPDATE_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
    province_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.REMOVE_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
    province_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.PUBLISH_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
    province_code: joi.string().required(),
  }).unknown(),

  [COMMANDS.UNPUBLISH_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
    province_code: joi.string().required(),
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [ACTIONS.FIND_COUNTRY]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_COUNTRIES]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_COUNTRIES]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.GET_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [ACTIONS.LIST_COUNTRY_PROVINCES]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_COUNTRY_PROVINCE]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),

  [ACTIONS.FIND_COUNTRY_PROVINCES]: joi.object().keys({
    channel_uuid: uuid.required(),
    country_code: joi.string().required(),
  }).unknown(),
}
