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

export const customer = {
  channel_uuid: uuid,
  customer_uuid: uuid,
  user_primary_uuid: joi.string().guid(),
  account_primary_uuid: joi.string().guid(),
  source_primary_uuid: joi.string().guid(),
  customer_handle: joi.string(),
  notes: joi.string(),
  notes_attributes: joi.object(),
  address_billing: address,
  address_shipping: address,
  blacklisted: joi.boolean(),
  blacklisted_at: joi.date(),
  unblacklisted_at: joi.date(),
  last_order_uuid: joi.string().guid(),
  last_order_name: joi.string(),
  total_orders: joi.number().integer(),
  total_spent: joi.number().integer(),
  avg_spent: joi.number().integer(),
  live_mode: joi.boolean().allow(null),
  created_at: joi.date().allow(null),
  updated_at: joi.date().allow(null)
}

export const commands = {
  [COMMANDS.CREATE_CUSTOMER]: joi.object().keys({
    ...customer,
    channel_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.UPDATE_CUSTOMER]: joi.object().keys({
    ...customer,
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required()
  }).unknown(),

  [COMMANDS.SET_CUSTOMER_BILLING]: joi.object().keys({
    ...address,
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CUSTOMER_SHIPPING]: joi.object().keys({
    ...address,
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),
}

export const actions = {

  [ACTIONS.GET_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_PUBLIC_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.FIND_PUBLIC_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.GET_CUSTOMER_SHIPPING]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [ACTIONS.GET_CUSTOMER_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),


  [ACTIONS.LIST_CUSTOMERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_CUSTOMERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
