import joi from 'joi'
const uuid = joi.string().guid()
import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.ADD_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.UPDATE_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REMOVE_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required(),
  }).unknown(),
}

export const actions = {
  [ACTIONS.GET_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_OFFER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_OFFERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_OFFERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),


  [ACTIONS.GET_OFFER_VARIANT]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required(),
    variant_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_OFFER_VARIANTS]: joi.object().keys({
    channel_uuid: uuid.required(),
    offer_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_OFFER_VARIANTS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
