import joi from 'joi'
const uuid = joi.string().guid()

export const channel = joi.object().keys({
  channel_uuid: uuid.required(),
  // handle: joi.string().required(),
  // title: joi.string().required(),
  // published: joi.boolean()
})

export const commands = {}

export const actions = {}

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
