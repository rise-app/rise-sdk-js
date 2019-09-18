import { Utils } from '../../Utils'
import { user as userSchema } from '../../schemas'

export const user = {
  'session': (data) => Utils.joiPromise(data, userSchema.session),
  'register': (data) => Utils.joiPromise(data, userSchema.register),
  'login': (data) => Utils.joiPromise(data, userSchema.login),
  'logout': (data) => Utils.joiPromise(data, userSchema.logout),
  'create': (data) => Utils.joiPromise(data, userSchema.create),
  'update': (data) => Utils.joiPromise(data, userSchema.update),
  'get': (data) => Utils.joiPromise(data, userSchema.get),
  'list': (data) => Utils.joiPromise(data, userSchema.list)
}
