import { Utils } from '../../Utils'
import { offer as offerSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const offer = {
  // Commands
  [COMMANDS.CREATE_OFFER]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.CREATE_OFFER]),
  [COMMANDS.UPDATE_OFFER]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER]),
  [COMMANDS.REMOVE_OFFER]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.REMOVE_OFFER]),
  [COMMANDS.PUBLISH_OFFER]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER]),
  [COMMANDS.UNPUBLISH_OFFER]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER]),

  [COMMANDS.ADD_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.ADD_OFFER_VARIANT]),
  [COMMANDS.ADD_OFFER_VARIANTS]: (data) => Utils.joiPromiseMap(data, offerSchema.commands[COMMANDS.ADD_OFFER_VARIANTS]),
  [COMMANDS.REMOVE_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.REMOVE_OFFER_VARIANT]),
  [COMMANDS.UPDATE_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER_VARIANT]),
  // [COMMANDS.PUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER_VARIANT]),
  // [COMMANDS.UNPUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER_VARIANT]),

  // Actions
  [ACTIONS.GET_OFFER]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER]),
  [ACTIONS.FIND_OFFER]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER]),
  [ACTIONS.LIST_OFFERS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS]),
  [ACTIONS.FIND_OFFERS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFERS]),
  [ACTIONS.GET_PUBLIC_OFFER]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER]),
  [ACTIONS.LIST_PUBLIC_OFFERS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS]),
  [ACTIONS.FIND_PUBLIC_OFFERS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS]),

  [ACTIONS.GET_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER_VARIANT]),
  [ACTIONS.LIST_OFFER_VARIANTS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFER_VARIANTS]),
  [ACTIONS.FIND_OFFER_VARIANTS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER_VARIANTS]),

  [ACTIONS.GET_PUBLIC_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER_VARIANT]),
  [ACTIONS.LIST_PUBLIC_OFFER_VARIANTS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFER_VARIANTS]),
  [ACTIONS.FIND_PUBLIC_OFFER_VARIANTS]: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER_VARIANTS]),

}
