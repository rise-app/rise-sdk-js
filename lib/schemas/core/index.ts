import joi from '@hapi/joi'

export const params = joi.object().keys({

}).unknown()

export const query = joi.object().keys({
  term: joi.string(),
  where: joi.object(),
  limit: joi.number(),
  offset: joi.number(),
  sort: joi.array().items(joi.array())
}).unknown()


export const session = joi.string()
export const token = joi.string()
