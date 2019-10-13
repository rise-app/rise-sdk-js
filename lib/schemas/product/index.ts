import joi from 'joi'
const uuid = joi.string().guid()
import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.ADD_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.UPDATE_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REMOVE_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required(),
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_PRODUCT]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_PRODUCTS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_PRODUCTS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),


  [ACTIONS.GET_PRODUCT_VARIANT]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required(),
    variant_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_PRODUCT_VARIANTS]: joi.object().keys({
    channel_uuid: uuid.required(),
    product_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_PRODUCT_VARIANTS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
