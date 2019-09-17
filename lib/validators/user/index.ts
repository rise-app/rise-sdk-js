import { Utils } from '../../Utils'
import { user as userSchema } from '../../schemas'

export const user = {
  'register': (data) => Utils.joiPromise(data, userSchema.register),
  'login': (data) => Utils.joiPromise(data, userSchema.login),
  'create': (data) => Utils.joiPromise(data, userSchema.create),
  'update': (data) => Utils.joiPromise(data, userSchema.update),
  'get': (data) => Utils.joiPromise(data, userSchema.get),
  'list': (data) => Utils.joiPromise(data, userSchema.list)
}
