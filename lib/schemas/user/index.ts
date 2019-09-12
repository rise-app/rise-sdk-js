import joi from 'joi'
const channel_uuid = joi.string().guid()

export const create = joi.object().keys({
  channel_uuid: channel_uuid.required(),
  username: joi.string().allow(null).min(3),
  email: joi.string().allow(null)
}).unknown()
