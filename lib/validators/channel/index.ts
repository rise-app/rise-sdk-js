import { Utils } from '../../Utils'
import {channel as channelSchema} from '../../schemas'

export const channel = {
  'create': (data) => Utils.joiPromise(data, channelSchema.create),
  'update': (data) => Utils.joiPromise(data, channelSchema.update),
  'get': (data) => Utils.joiPromise(data, channelSchema.get),
  'list': (data) => Utils.joiPromise(data, channelSchema.list)
}
