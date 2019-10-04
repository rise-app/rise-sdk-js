import joi from 'joi'

export const Utils = {
  joiPromise: (data: any, schema: joi.ObjectSchema) => {
    return new Promise((resolve, reject) => {
      joi.validate(data, schema, (err, value) => {
        if (err) {
          return reject(err)
        }
        return resolve(value)
      })
    })
  },

  joiPromiseMap: (list: any, schema: joi.ObjectSchema) => {
    return Promise.all(list.map(data => {
      return new Promise((resolve, reject) => {
        joi.validate(data, schema, (err, value) => {
          if (err) {
            return reject(new TypeError(err))
          }
          return resolve(value)
        })
      })
    }))
  },
}
