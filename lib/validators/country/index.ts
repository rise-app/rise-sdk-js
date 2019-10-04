import { Utils } from '../../Utils'
import { country as countrySchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

export const country = {
  'add': (data) => Utils.joiPromise(data, countrySchema.commands[COMMANDS.ADD_COUNTRY]),
  'update': (data) => Utils.joiPromise(data, countrySchema.commands[COMMANDS.UPDATE_COUNTRY]),
  'get': (data) => Utils.joiPromise(data, countrySchema.actions[ACTIONS.GET_COUNTRY]),
  'list': (data) => Utils.joiPromise(data, countrySchema.actions[ACTIONS.LIST_COUNTRIES]),
}
