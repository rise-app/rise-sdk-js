import joi from '@hapi/joi'

export const Utils = {
  // This handles multiple versions of joi
  joiPromise: (data: any, schema: joi.ObjectSchema, options = {}) => {
    return new Promise((resolve, reject) => {
      if (schema.validate) {

        const { value, error } = schema.validate(data, options)
        if (error) {
          return reject(error)
        }
        return resolve(value)
      }
      else {
        joi.validate(data, schema, options, (err, value) => {
          if (err) {
            return reject(err)
          }
          return resolve(value)
        })
      }
    })
  },

  joiPromiseMap: (list: any, schema: joi.ObjectSchema, options?) => {
    return Promise.all(list.map(data => {
      return Utils.joiPromise(data, schema, options)
    }))
  },
}
