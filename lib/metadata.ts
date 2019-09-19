import 'reflect-metadata'
import { core } from './validators'

export function Endpoint({ method = 'GET', route = '', validator }: {method?: string, route?: string, validator?: any}) {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    // Original Method
    const _method = descriptor.value
    const reg = new RegExp(/\:(.*?)(\/|$)/g)

    descriptor.value = function (...args: any[]) {

      // Copy the string so that it can be modified
      let _route = route.slice(0, route.length)

      // The data object passed to the method is always the first argument
      const data = args[0]
      const req = args[1] || {}

      req.name = `${target.constructor.name}.${propertyKey}`
      req.params = req.params || {}

      _route = _route.replace(reg, (match, $1, $2) => {
        // console.log(match, $1, $2, data[$1], req.params[$1])
        // Return the replacement leveraging the parameters.
        return `${ data[$1] || req.params[$1] }${ $2 ? '/' : '' }`
      })

      // Extend the request argument
      args[1] = {
        ...req,
        route: { [method]: _route }
      }

      // If the validator was passed to the metadata, then use it to validate
      if (validator) {
        return core.query(req.query)
          .then((valid) => {
            args[2] = valid
            return validator(data)
          })
          .then((valid) => {
            args[2] = valid
            return _method.apply(this, args)
          })
          .catch(err => {
            args[2] = err
            return _method.apply(this, args)
          })
      }
      else {
        _method.apply(this, args)
      }
    }

    return descriptor
  }
}
