import { Utils } from '../../Utils'
import {customer as customerSchema} from '../../schemas'

export const customer = {
  'create': (data) => Utils.joiPromise(data, customerSchema.create),
  'update': (data) => Utils.joiPromise(data, customerSchema.update),
  'get': (data) => Utils.joiPromise(data, customerSchema.get),
  'list': (data) => Utils.joiPromise(data, customerSchema.list)
}
