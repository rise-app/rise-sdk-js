import { Utils } from '../../Utils'
import { auth as authSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const auth = {
  [COMMANDS.SET_RECOVERY]: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.SET_RECOVERY]),
  [COMMANDS.RECOVER]: (data) => Utils.joiPromise(data, authSchema.commands[COMMANDS.RECOVER]),
}
