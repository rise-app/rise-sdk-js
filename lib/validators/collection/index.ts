import { Utils } from '../../Utils'
import { collection as collectionSchema } from '../../schemas'

export const collection = {
  'create': (data) => Utils.joiPromise(data, collectionSchema.create),
  'update': (data) => Utils.joiPromise(data, collectionSchema.update),
  'get': (data) => Utils.joiPromise(data, collectionSchema.get),
  'list': (data) => Utils.joiPromise(data, collectionSchema.list)
}
