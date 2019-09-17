import joi from 'joi'
const uuid = joi.string().guid()

export const create = joi.object().keys({
  channel_uuid: uuid.required(),
  customername: joi.string().allow(null).min(3),
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
