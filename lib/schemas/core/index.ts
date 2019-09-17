import joi from 'joi'

export const params = joi.object().keys({

}).unknown()

export const query = joi.object().keys({
  where: joi.object(),
  limit: joi.number(),
  offset: joi.number(),
  sort: joi.array().items(joi.array())
}).unknown()
