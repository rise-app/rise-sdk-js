import { Utils } from '../../Utils'
import { offer as offerSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const offer = {
  'create': (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.CREATE_OFFER]),
  'update': (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER]),
  'get': (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER]),
  'getByAttribute': (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER]),
  'list': (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS]),
  'listByAttribute': (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFERS]),
}
