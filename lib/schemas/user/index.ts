import joi from 'joi'
const uuid = joi.string().guid()

export const login = joi.object().keys({
  channel_uuid: uuid.required(),
  username: joi.string().min(3),
  email: joi.string(),
  password: joi.string().min(8),
}).unknown().or('email', 'username')

export const register = joi.object().keys({
  channel_uuid: uuid.required(),
  username: joi.string().min(3),
  email: joi.string(),
  password: joi.string().min(8),
}).unknown().or('email', 'username')

export const create = joi.object().keys({
  channel_uuid: uuid.required(),
  username: joi.string().allow(null).min(3),
  email: joi.string().allow(null)
}).unknown()

export const update = joi.object().keys({
  channel_uuid: uuid.required(),
  user_uuid: uuid.required(),
  email: joi.string().allow(null),
  name_first: joi.string().allow(null),
  name_last: joi.string().allow(null)
}).unknown()
