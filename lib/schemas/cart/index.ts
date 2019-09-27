import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.CREATE_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
    email: joi.string().allow(null)
  }).unknown(),

  [COMMANDS.UPDATE_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    email: joi.string().allow(null),
  }).unknown(),

  [COMMANDS.UPDATE_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    email: joi.string().allow(null),
  }).unknown(),

  [COMMANDS.CHECKOUT_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.SET_CART_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CART_SHIPPING]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CART_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CART_FULFILLMENT]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CART_PAYMENT]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.CREATE_CART_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.CREATE_CART_ITEMS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.UPDATE_CART_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.REMOVE_CART_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown()
}

export const actions = {
  [ACTIONS.GET_CART]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_CARTS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.GET_CART_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_SHIPPING]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_PAYMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_FULFILLMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_ITEM]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.LIST_CART_ITEMS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS]: joi.object().keys({
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
    item_uuid: uuid.required(),
  }).unknown(),
}
