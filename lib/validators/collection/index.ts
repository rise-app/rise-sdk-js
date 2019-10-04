import { Utils } from '../../Utils'
import { collection as collectionSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

export const collection = {
  'create': (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.CREATE_COLLECTION]),
  'update': (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.UPDATE_COLLECTION]),
  'get': (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.GET_COLLECTION]),
  'getByAttribute': (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTION]),
  'list': (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.LIST_COLLECTIONS]),
  'listByAttribute': (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS]),
}
