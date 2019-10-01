import joi from 'joi'
const uuid = joi.string().guid()

export const create = joi.object().keys({
  channel_uuid: uuid.required(),
  email: joi.string().allow(null)
}).unknown()

export const update = joi.object().keys({
  channel_uuid: uuid.required(),
  customer_uuid: uuid.required(),
  email: joi.string().allow(null),
  name_first: joi.string().allow(null),
  name_last: joi.string().allow(null)
}).unknown()


export const get = joi.object().keys({
  channel_uuid: uuid.required(),
  customer_uuid: uuid.required()
}).unknown()

export const list = joi.object().keys({
  channel_uuid: uuid.required()
}).unknown()


import { COMMANDS, ACTIONS } from '../../enums'


export const commands = {
  [COMMANDS.CREATE_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    email: joi.string().allow(null)
  }).unknown(),

  [COMMANDS.UPDATE_CUSTOMER]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
    email: joi.string().allow(null),
    name_first: joi.string().allow(null),
    name_last: joi.string().allow(null)
  }).unknown(),


  [COMMANDS.SET_CUSTOMER_BILLING]: joi.object().keys({
    channel_uuid: uuid.required(),
    customer_uuid: uuid.required(),
  }).unknown(),

  [COMMANDS.SET_CUSTOMER_SHIPPING]: joi.object().keys({
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


  [ACTIONS.LIST_CUSTOMERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),

  [ACTIONS.FIND_CUSTOMERS]: joi.object().keys({
    channel_uuid: uuid.required()
  }).unknown(),
}
