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

export const cart = {
  channel_uuid: uuid,
  cart_uuid: uuid,
  email: joi.string().allow(null),
  address_shipping: joi.object().keys(address).unknown(),
  address_billing: joi.object().keys(address).unknown(),
  payment_details: joi.object().keys(payment_details).unknown(),
  fulfillment_details: joi.object().keys(fulfillment_details).unknown(),
  notes: joi.string(),
  items: joi.array().items(joi.object().keys(item))
}

export const commands = {
  [COMMANDS.CREATE_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...cart,
    }).unknown()
  },

  [COMMANDS.UPDATE_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }),
    body: joi.object().keys({
      ...cart,
      email: joi.string().allow(null),
    }).unknown()
  },

  [COMMANDS.CHECKOUT_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required()
    }).unknown()
  },

  [COMMANDS.SET_CART_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      ...address,
    }).unknown()
  },

  [COMMANDS.SET_CART_SHIPPING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      ...address,
    }).unknown()
  },

  [COMMANDS.SET_CART_CUSTOMER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      customer_uuid: uuid.required(),
    }).unknown(),
  },

  [COMMANDS.SET_CART_FULFILLMENT]: {
    params: joi.object().keys({
      ...fulfillment_details,
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      ...fulfillment_details
    }).unknown()
  },

  [COMMANDS.SET_CART_PAYMENT]: joi.object().keys({
    ...payment_details,
    channel_uuid: uuid.required(),
    cart_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.CREATE_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required()
    }).unknown(),
    body: joi.object().keys({
      ...item,
      offer_uuid: uuid.required(),
      variant_uuid: uuid
    }).unknown()
  },

  [COMMANDS.UPDATE_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      ...item,
    }).unknown(),
  },

  [COMMANDS.REMOVE_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
      item_uuid: uuid.required()
    }).unknown()
  }
}

export const actions = {
  [ACTIONS.GET_CART]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_CARTS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_CART_CUSTOMER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_BILLING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_SHIPPING]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_PAYMENT_DETAILS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_FULFILLMENT_DETAILS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_ITEM]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
      item_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.LIST_CART_ITEMS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_ITEM_PAYMENT_DETAILS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
      item_uuid: uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_CART_ITEM_FULFILLMENT_DETAILS]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
      cart_uuid: uuid.required(),
      item_uuid: uuid.required(),
    }).unknown()
  },
}
