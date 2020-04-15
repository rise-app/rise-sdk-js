import 'reflect-metadata'
import { isArray } from 'lodash'
import { core } from './validators'
import { RiSEConfig } from './index'

/**
 * Command Metadata
 * @description Supplements Issued Commands to the RiSE API
 * @param method
 * @param route
 * @param validator
 * @constructor
 */
export function Command({ method = 'POST', route = '', validator, globals }: {method?: string, route?: string, validator?: any, globals?: RiSEConfig['globals']}) {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {


    // Original Method
    const _method = descriptor.value
    const reg = new RegExp(/\:(.*?)(\/|$)/g)

    descriptor.value = function (...args: any[]) {

      const name = target.constructor.name
      const { headers, params, query } = Object.getPrototypeOf(target).globals

      // Copy the string so that it can be modified
      let _route = route.slice(0, route.length)

      // The data object passed to the method is always the first argument
      const data = args[0]
      const req = args[1] || {}
      const globals = args[3] = { globals: { headers, params, query }}

      req.name = `${String(name)}.${String(propertyKey)}`
      req.headers = {...(headers|| {}), ...(req.headers || {})}
      req.params = {...(params || {}), ...(req.params || {})}
      req.query = {...(query || {}), ...(req.query || {})}
      req.body = data

      _route = _route.replace(reg, (match, $1, $2) => {
        const replace = req.params[$1] || req.body[$1]

        // If the body was used, add as a param
        req.params[$1] = replace

        // Return the replacement leveraging the parameters.
        return `${ replace }${ $2 ? '/' : '' }`
      })

      // Extend the request argument
      args[1] = {
        ...req,
        route: { [method]: _route }
      }

      // If the validator was passed to the metadata, then use it to validate
      if (validator) {
        return Promise.resolve()
          .then(() => {
            // Always Validate a query string
            if (validator && validator.query && typeof validator.query === 'function') {
              return validator.query(req.query)
            }
            return core.query(req.query)
          })
          .then((valid) => {
            if (validator && validator.params && typeof validator.params === 'function') {
              return validator.params(req.params)
            }
            return valid
          })
          .then((valid) => {
            if (validator && validator.body && typeof validator.body === 'function') {
              return validator.body(req.body)
            }
            // If it's just a plain function
            else if (typeof validator === 'function') {
              const body = isArray(req.body) ? req.body.map( b => {
                return {
                  ...req.params,
                  ...req.query,
                  ...b
                }
              }) : { ...req.body, ...req.params, ...req.query }
              return validator(body)
            }
            return valid
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
        return Promise.resolve()
          .then(() => {
            return _method.apply(this, args)
          })
      }
    }

    return descriptor
  }
}


/**
 * Action Metadata
 * @description Supplements Issued Actions to the RiSE API
 * @param method
 * @param route
 * @param validator
 * @constructor
 */
export function Action({method = 'GET', route = '', validator, globals }: {method?: string, route?: string, validator?: any, globals?: RiSEConfig['globals']}) {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {


    // Original Method
    const _method = descriptor.value
    const reg = new RegExp(/\:(.*?)(\/|$)/g)

    descriptor.value = function (...args: any[]) {

      const name = target.constructor.name
      const { headers, params, query } = Object.getPrototypeOf(target).globals

      // Copy the string so that it can be modified
      let _route = route.slice(0, route.length)

      // The data object passed to the method is always the first argument
      const data = args[0]
      const req = args[1] || {}
      const globals = args[3] = { globals: { params, query, headers }}

      req.name = `${String(name)}.${String(propertyKey)}`
      req.headers = {...(headers|| {}), ...(req.headers || {})}
      req.params = {...(params || {}), ...(req.params || {})}
      req.query = {...(query || {}), ...(req.query || {})}
      req.body = data

      _route = _route.replace(reg, (match, $1, $2) => {
        const replace = req.params[$1] || req.body[$1]

        // If the body was used, add as a param
        req.params[$1] = replace

        // Return the replacement leveraging the parameters.
        return `${ replace }${ $2 ? '/' : '' }`
      })

      // Extend the request argument
      args[1] = {
        ...req,
        route: { [method]: _route }
      }

      // If the validator was passed to the metadata, then use it to validate
      if (validator) {
        return Promise.resolve()
          .then(() => {
            // Always Validate a query string
            if (validator && validator.query && typeof validator.query === 'function') {
              return validator.query(req.query)
            }
            return core.query(req.query)
          })
          .then((valid) => {
            if (validator && validator.params && typeof validator.params === 'function') {
              return validator.params(req.params)
            }
            return valid
          })
          .then((valid) => {
            if (validator && validator.body && typeof validator.body === 'function') {
              return validator.body(req.body)
            }
            // If it's just a plain function
            else if (typeof validator === 'function') {
              const body = isArray(req.body) ? req.body.map( b => {
                return {
                  ...req.params,
                  ...req.query,
                  ...b
                }
              }) : { ...req.body, ...req.params, ...req.query }
              return validator(body)
            }
            return valid
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
        return Promise.resolve()
          .then(() => {
            return _method.apply(this, args)
          })
      }
    }

    return descriptor
  }
}


/**
 * Event Metadata
 * @description Responds to an Event from the RiSE API
 * @constructor
 */
export function Event() {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

    return descriptor
  }
}


/**
 * Paginate
 * @description Adds .previous() and .next() to list responses
 * @constructor
 */
export function Paginate() {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

    // Original Method
    const _method = descriptor.value

    descriptor.value = function (...args: any[]) {

      // Abstract out the current limit and offset and calculate the previous/next
      const { query } = args[1]
      const limit = query ? query.limit || 10 : 10
      const offset = query ? query.offset || 0 : 0

      const prevOffset = Math.max(Math.floor(offset - limit), 0)
      const nextOffset = offset + limit

      // Set the pagination on the request argument
      args[1].paginate = {
        next: {
          limit: limit,
          offset: nextOffset
        },
        previous: {
          limit: limit,
          offset: prevOffset
        }
      }
      return _method.apply(this, args)
    }
    return descriptor
  }
}

/**
 * Upload
 * @description Uploads a file
 * @constructor
 */
export function Upload() {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {

    return descriptor
  }
}

