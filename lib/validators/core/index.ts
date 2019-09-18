import { Utils } from '../../Utils'
import { core as coreSchema } from '../../schemas'

export const core = {
  'params': (data) => Utils.joiPromise(data, coreSchema.params),
  'query': (data) => Utils.joiPromise(data, coreSchema.query),
  'session': (data) => Utils.joiPromise(data, coreSchema.session),
  'token': (data) => Utils.joiPromise(data, coreSchema.token),
}
