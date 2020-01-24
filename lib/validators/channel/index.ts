import { Utils } from '../../Utils'
import { channel as channelSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'


export const channel = {

  // Commands
  [COMMANDS.CREATE]: {
    params: (data) => Utils.joiPromise(data, channelSchema.commands[COMMANDS.CREATE].params),
    body: (data) => Utils.joiPromise(data, channelSchema.commands[COMMANDS.CREATE].body)
  },
  [COMMANDS.UPDATE]: {
    params: (data) => Utils.joiPromise(data, channelSchema.commands[COMMANDS.UPDATE].params),
    body: (data) => Utils.joiPromise(data, channelSchema.commands[COMMANDS.UPDATE].body)
  },

  /**
   * Get Channel
   * @param data
   * @param req
   * @param validated
   */
  [ACTIONS.GET]: {
    params: (data) => Utils.joiPromise(data, channelSchema.actions[ACTIONS.GET].params)
  },
  [ACTIONS.LIST]: {
    params: (data) => Utils.joiPromise(data, channelSchema.actions[ACTIONS.LIST].params)
  },
}
