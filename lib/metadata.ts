import 'reflect-metadata'

export function Endpoint({ method = 'GET', route = '', validator }: {method?: string, route?: string, validator?: any}) {
  return function(target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    // Original Method
    const _method = descriptor.value
    // The regex to find route parameter matches
    const reg = /\:(.*?)(\/|$)/gm

    // const params = args.map(a => JSON.stringify(a)).join()
    console.log('experimental endpoint', target, propertyKey, _method, route, method, validator)

    descriptor.value = function (...args: any[]) {
      console.log('passed 1', args)

      // The data object passed to the method is always the first argument
      const data = args[0]
      const req = args[1] || {}

      // Replaces the
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

      console.log('Constructed route', route)

      args[1] = {
        ...req,
        route: { [method]: route }
      }
      // return validator(args)
      //   .then(_validation => {
      //     console.log('passed 2', _validation)
      //     return _method.apply(this, args)
      //   })
      return validator(data)
        .then(valid => {
          console.log('valid 1 ran', valid)
          return _method.apply(this, args)
        })
    }
    // var timeout:any;
    // var originalMethod = descriptor.value;
    // descriptor.value = function() {
    //   var context = this
    //   var args = arguments;
    //   var later = function() {
    //     timeout = null;
    //     if (!immediate) originalMethod.apply(context, args);
    //   };
    //   var callNow = immediate && !timeout;
    //   clearTimeout(timeout);
    //   timeout = setTimeout(later, wait);
    //   if (callNow) originalMethod.apply(context, args);
    // };
    return descriptor
  }
}
