import { Utils } from '../../Utils'
import { product as productSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const product = {
  // Commands
  [COMMANDS.CREATE_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.CREATE_PRODUCT].params),
    body: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.CREATE_PRODUCT].body),
  },
  [COMMANDS.UPDATE_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UPDATE_PRODUCT].params),
    body: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UPDATE_PRODUCT].body)
  },
  [COMMANDS.REMOVE_PRODUCT]: {
    params:(data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.REMOVE_PRODUCT].params)
  },
  [COMMANDS.PUBLISH_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT].params),
    body: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT].body)
  },
  [COMMANDS.UNPUBLISH_PRODUCT]: {
    params:(data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT].params),
    body:(data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT].body),
  },

  [COMMANDS.ADD_PRODUCT_VARIANT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.ADD_PRODUCT_VARIANT].params)
  },
  [COMMANDS.ADD_PRODUCT_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.ADD_PRODUCT_VARIANT].params),
    body:(data) => Utils.joiPromiseMap(data, productSchema.commands[COMMANDS.ADD_PRODUCT_VARIANT].body)
  },
  [COMMANDS.REMOVE_PRODUCT_VARIANT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.REMOVE_PRODUCT_VARIANT].params)
  },
  [COMMANDS.UPDATE_PRODUCT_VARIANT]: {
    params: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UPDATE_PRODUCT_VARIANT].params)
  },
  // [COMMANDS.PUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT_VARIANT]),
  // [COMMANDS.UNPUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT_VARIANT]),

  // Actions
  [ACTIONS.GET_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT].params)
  },
  [ACTIONS.FIND_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT].params)
  },
  [ACTIONS.LIST_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS].params)
  },
  [ACTIONS.FIND_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCTS].params)
  },
  [ACTIONS.GET_PUBLIC_PRODUCT]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT].params)
  },
  [ACTIONS.LIST_PUBLIC_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS].params)
  },
  [ACTIONS.FIND_PUBLIC_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS].params)
  },

  [ACTIONS.GET_PRODUCT_VARIANT]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT_VARIANT].params)
  },
  [ACTIONS.LIST_PRODUCT_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCT_VARIANTS].params)
  },
  [ACTIONS.FIND_PRODUCT_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT_VARIANTS].params)
  },

  [ACTIONS.GET_PUBLIC_PRODUCT_VARIANT]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT_VARIANT].params)
  },
  [ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCT_VARIANTS].params)
  },
  [ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS]: {
    params: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT_VARIANTS].params)
  },

}
