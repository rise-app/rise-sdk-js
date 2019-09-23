import { Utils } from '../../Utils'
import { offer as offerSchema } from '../../schemas'

export const offer = {
  'create': (data) => Utils.joiPromise(data, offerSchema.create),
  'update': (data) => Utils.joiPromise(data, offerSchema.update),
  'get': (data) => Utils.joiPromise(data, offerSchema.get),
  'list': (data) => Utils.joiPromise(data, offerSchema.list)
}
