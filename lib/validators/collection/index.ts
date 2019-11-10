import { Utils } from '../../Utils'
import { collection as collectionSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

export const collection = {
  // COMMANDS
  [COMMANDS.CREATE_COLLECTION]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.CREATE_COLLECTION].params),
    body: (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.CREATE_COLLECTION].body)
  },
  [COMMANDS.UPDATE_COLLECTION]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.UPDATE_COLLECTION].params),
    body: (data) => Utils.joiPromise(data, collectionSchema.commands[COMMANDS.UPDATE_COLLECTION].body)
  },


  // ACTIONS
  [ACTIONS.GET_COLLECTION]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.GET_COLLECTION].params)
  },
  [ACTIONS.FIND_COLLECTION]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTION].params)
  },
  [ACTIONS.LIST_COLLECTIONS]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.LIST_COLLECTIONS].params)
  },
  [ACTIONS.FIND_COLLECTIONS]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
  },


  [ACTIONS.LIST_COLLECTION_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.LIST_COLLECTIONS].params)
  },
  // [ACTIONS.FIND_COLLECTION_PRODUCTS]: {
  //   params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
  // },
  [ACTIONS.LIST_COLLECTION_OFFERS]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.LIST_COLLECTIONS].params)
  },
  // [ACTIONS.FIND_COLLECTION_OFFERS]: {
  //   params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
  // },

  [ACTIONS.LIST_COLLECTION_CUSTOMERS]: {
    params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.LIST_COLLECTIONS].params)
  },
  // [ACTIONS.FIND_COLLECTION_CUSTOMERS]: {
  //   params: (data) => Utils.joiPromise(data, collectionSchema.actions[ACTIONS.FIND_COLLECTIONS].params)
  // },
}
