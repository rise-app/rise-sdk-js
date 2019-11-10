import { Utils } from '../../Utils'
import { offer as offerSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const offer = {
  // Commands
  [COMMANDS.CREATE_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.CREATE_OFFER].params),
    body: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.CREATE_OFFER].body),
  },
  [COMMANDS.UPDATE_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER].params),
    body: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER].body)
  },
  [COMMANDS.REMOVE_OFFER]: {
    params:(data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.REMOVE_OFFER].params)
  },
  [COMMANDS.PUBLISH_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER].params),
    body: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER].body)
  },
  [COMMANDS.UNPUBLISH_OFFER]: {
    params:(data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER].params),
    body:(data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER].body),
  },

  [COMMANDS.ADD_OFFER_VARIANT]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.ADD_OFFER_VARIANT].params)
  },
  [COMMANDS.ADD_OFFER_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.ADD_OFFER_VARIANT].params),
    body:(data) => Utils.joiPromiseMap(data, offerSchema.commands[COMMANDS.ADD_OFFER_VARIANT].body)
  },
  [COMMANDS.REMOVE_OFFER_VARIANT]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.REMOVE_OFFER_VARIANT].params)
  },
  [COMMANDS.UPDATE_OFFER_VARIANT]: {
    params: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UPDATE_OFFER_VARIANT].params)
  },
  // [COMMANDS.PUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.PUBLISH_OFFER_VARIANT]),
  // [COMMANDS.UNPUBLISH_OFFER_VARIANT]: (data) => Utils.joiPromise(data, offerSchema.commands[COMMANDS.UNPUBLISH_OFFER_VARIANT]),

  // Actions
  [ACTIONS.GET_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER].params)
  },
  [ACTIONS.FIND_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER].params)
  },
  [ACTIONS.LIST_OFFERS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS].params)
  },
  [ACTIONS.FIND_OFFERS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFERS].params)
  },
  [ACTIONS.GET_PUBLIC_OFFER]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER].params)
  },
  [ACTIONS.LIST_PUBLIC_OFFERS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS].params)
  },
  [ACTIONS.FIND_PUBLIC_OFFERS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFERS].params)
  },

  [ACTIONS.GET_OFFER_VARIANT]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER_VARIANT].params)
  },
  [ACTIONS.LIST_OFFER_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFER_VARIANTS].params)
  },
  [ACTIONS.FIND_OFFER_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER_VARIANTS].params)
  },

  [ACTIONS.GET_PUBLIC_OFFER_VARIANT]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.GET_OFFER_VARIANT].params)
  },
  [ACTIONS.LIST_PUBLIC_OFFER_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.LIST_OFFER_VARIANTS].params)
  },
  [ACTIONS.FIND_PUBLIC_OFFER_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, offerSchema.actions[ACTIONS.FIND_OFFER_VARIANTS].params)
  },

}
