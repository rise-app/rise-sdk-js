import { Utils } from '../../Utils'
import { channel as channelSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'


export const channel = {
  'create': (data) => Utils.joiPromise(data, channelSchema.create),
  'update': (data) => Utils.joiPromise(data, channelSchema.update),
  'get': { params: (data) => Utils.joiPromise(data, channelSchema.get) },
  'list': (data) => Utils.joiPromise(data, channelSchema.list),

  /**
   * Get Feed
   * @param data
   * @param req
   * @param validated
   */
  [ACTIONS.GET]: {
    params: (data) => Utils.joiPromise(data, channelSchema.commands[ACTIONS.GET].params),
    body: (data) => Utils.joiPromise(data, channelSchema.commands[ACTIONS.GET].body),
  },
}
