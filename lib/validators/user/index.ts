import { Utils } from '../../utils'
import { user as userSchema } from '../../schemas'

export const user = {
  'create': (data) => Utils.joiPromise(data, userSchema.create)
}
