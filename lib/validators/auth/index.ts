import { Utils } from '../../Utils'
import { auth as authSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const auth = {
  [COMMANDS.SET_RECOVERY]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_RECOVERY].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_RECOVERY].body)
  },
  [COMMANDS.RECOVER]: {
    params: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.RECOVER].params),
    body: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.RECOVER].body)
  },
}
