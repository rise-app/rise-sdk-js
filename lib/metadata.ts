import 'reflect-metadata'
import { core } from './validators'

export function Endpoint({ method = 'GET', route = '', validator }: {method?: string, route?: string, validator?: any}) {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    // Original Method
    const _method = descriptor.value
    // The regex to find route parameter matches
    const reg = /\:(.*?)(\/|$)/gm

    //
    descriptor.value = function (...args: any[]) {

      // The data object passed to the method is always the first argument
      const data = args[0]
      const req = args[1] || {}
      req.name = `${target}.${propertyKey}`

      // Replaces the variables in the route with properties from the body or params
      let currentMatch
      while((currentMatch = reg.exec(route)) !== null) {

        // If no match value or the match value is not a property of the data argument, throw error
        if (!currentMatch[1] && (!data[currentMatch[1]] || !req.params || !req.params[currentMatch[1]])) {
          throw new Error('Parameters do not satisfy route conditions')
        }
        // continue building the route
        route = route.replace(
          `:${currentMatch[1]}`,
          data[currentMatch[1]] || req.params[currentMatch[1]]
        )
      }

      args[1] = {
        ...req,
        route: { [method]: route }
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
