import joi from 'joi'
const uuid = joi.string().guid()

export const create = joi.object().keys({
  channel_uuid: uuid.required()
}).unknown()

export const update = joi.object().keys({
  channel_uuid: uuid.required(),
}).unknown()


export const get = joi.object().keys({
  channel_uuid: uuid.required()
}).unknown()

export const list = joi.object().keys({
  // channel_uuid: uuid
}).unknown()
