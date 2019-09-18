import { Utils } from '../../Utils'
import {cart as cartSchema} from '../../schemas'

export const cart = {
  'create': (data) => Utils.joiPromise(data, cartSchema.create),
  'update': (data) => Utils.joiPromise(data, cartSchema.update),
  'get': (data) => Utils.joiPromise(data, cartSchema.get),
  'list': (data) => Utils.joiPromise(data, cartSchema.list)
}
