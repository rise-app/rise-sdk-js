import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_ORDER]: joi.object().keys({
    channel_uuid: uuid.required(),
    email: joi.string().allow(null)
  }).unknown(),

  [COMMANDS.UPDATE_ORDER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    email: joi.string().allow(null),
  }).unknown(),

  [COMMANDS.CLOSE_ORDER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.SET_ORDER_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_SHIPPING]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_FULFILLMENT]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_PAYMENT]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.CREATE_ORDER_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    offer_uuid: uuid.required(),
    variant_uuid: uuid
  }).unknown(),

  [COMMANDS.CREATE_ORDER_ITEMS]: joi.object().keys({
    offer_uuid: uuid.required(),
    variant_uuid: uuid
  }).unknown(),

  [COMMANDS.UPDATE_ORDER_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REMOVE_ORDER_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown()
}

export const actions = {
  [ACTIONS.GET_ORDER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_ORDERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.GET_ORDER_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_SHIPPING]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_PAYMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_FULFILLMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_ORDER_ITEMS]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_ITEM_PAYMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_ORDER_ITEM_FULFILLMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),
}
