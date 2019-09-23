import { Utils } from '../../Utils'
import { product as productSchema } from '../../schemas'

export const product = {
  'create': (data) => Utils.joiPromise(data, productSchema.create),
  'update': (data) => Utils.joiPromise(data, productSchema.update),
  'get': (data) => Utils.joiPromise(data, productSchema.get),
  'list': (data) => Utils.joiPromise(data, productSchema.list)
}
