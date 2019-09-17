import { Utils } from '../../Utils'
import { core as coreSchema } from '../../schemas'

export const core = {
  'params': (data) => Utils.joiPromise(data, coreSchema.params),
  'query': (data) => Utils.joiPromise(data, coreSchema.query),
}
