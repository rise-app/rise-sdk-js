import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const address = {
  address_1: joi.string(),
  address_2: joi.string().allow('', null).optional(),
  address_3: joi.string().allow('', null).optional(),
  company: joi.string().allow('', null).optional(),
  city: joi.string(),
  name_prefix: joi.string().allow('', null).optional(),
  name_first: joi.string().allow('', null).optional(),
  name_last: joi.string().allow('', null).optional(),
  name_suffix: joi.string().allow('', null).optional(),
  phone: joi.string().allow('', null).optional(),
  province: joi.string(),
  province_code: joi.string(),
  country: joi.string(),
  country_code: joi.string(),
  country_name: joi.string(),
  postal_code: joi.string(),
  live_mode: joi.boolean().allow(null)
}

export const payment_details = {
  // gateway_token: joi.string().allow(null)
}
export const fulfillment_details = {
  // gateway_token: joi.string().allow(null)
}

export const item = {
  channel_uuid: uuid,
  offer_uuid: uuid,
  variant_uuid: uuid,
  quantity: joi.number(),
  payment_details: joi.object().keys(payment_details).unknown(),
  fulfillment_details: joi.object().keys(fulfillment_details).unknown(),
}

export const order = {
  channel_uuid: uuid,
  order_uuid: uuid,
  email: joi.string().allow(null),
  address_shipping: joi.object().keys(address).unknown(),
  address_billing: joi.object().keys(address).unknown(),
  payment_details: joi.object().keys(payment_details).unknown(),
  fulfillment_details: joi.object().keys(fulfillment_details).unknown(),
  notes: joi.string(),
  items: joi.array().items(joi.object().keys(item))
}

export const commands = {
  [COMMANDS.CREATE_ORDER]: joi.object().keys({
    ...order,
    channel_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.UPDATE_ORDER]: joi.object().keys({
    ...order,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.CLOSE_ORDER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.SET_ORDER_BILLING]: joi.object().keys({
    ...address,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_SHIPPING]: joi.object().keys({
    ...address,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_FULFILLMENT]: joi.object().keys({
    ...fulfillment_details,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_ORDER_PAYMENT]: joi.object().keys({
    ...payment_details,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.CREATE_ORDER_ITEM]: joi.object().keys({
    ...item,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    offer_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.CREATE_ORDER_ITEMS]: joi.object().keys({
    offer_uuid: uuid.required(),
    variant_uuid: uuid
  }).unknown(),

  [COMMANDS.UPDATE_ORDER_ITEM]: joi.object().keys({
    ...item,
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REMOVE_ORDER_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    order_uuid: uuid.required(),
    item_uuid: uuid.required(),
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
