import { Utils } from '../../Utils'
import { product as productSchema } from '../../schemas'
import {ACTIONS, COMMANDS} from '../../enums'

// TODO, refactor the keys into Commands/Actions
export const product = {
  // Commands
  [COMMANDS.CREATE_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.CREATE_PRODUCT]),
  [COMMANDS.UPDATE_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UPDATE_PRODUCT]),
  [COMMANDS.REMOVE_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.REMOVE_PRODUCT]),
  [COMMANDS.PUBLISH_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT]),
  [COMMANDS.UNPUBLISH_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT]),

  [COMMANDS.ADD_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.ADD_PRODUCT_VARIANT]),
  [COMMANDS.ADD_PRODUCT_VARIANTS]: (data) => Utils.joiPromiseMap(data, productSchema.commands[COMMANDS.ADD_PRODUCT_VARIANTS]),
  [COMMANDS.REMOVE_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.REMOVE_PRODUCT_VARIANT]),
  [COMMANDS.UPDATE_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UPDATE_PRODUCT_VARIANT]),
  // [COMMANDS.PUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.PUBLISH_PRODUCT_VARIANT]),
  // [COMMANDS.UNPUBLISH_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.commands[COMMANDS.UNPUBLISH_PRODUCT_VARIANT]),

  // Actions
  [ACTIONS.GET_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT]),
  [ACTIONS.FIND_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT]),
  [ACTIONS.LIST_PRODUCTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS]),
  [ACTIONS.FIND_PRODUCTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCTS]),
  [ACTIONS.GET_PUBLIC_PRODUCT]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT]),
  [ACTIONS.LIST_PUBLIC_PRODUCTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS]),
  [ACTIONS.FIND_PUBLIC_PRODUCTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCTS]),

  [ACTIONS.GET_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT_VARIANT]),
  [ACTIONS.LIST_PRODUCT_VARIANTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCT_VARIANTS]),
  [ACTIONS.FIND_PRODUCT_VARIANTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT_VARIANTS]),

  [ACTIONS.GET_PUBLIC_PRODUCT_VARIANT]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.GET_PRODUCT_VARIANT]),
  [ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.LIST_PRODUCT_VARIANTS]),
  [ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS]: (data) => Utils.joiPromise(data, productSchema.actions[ACTIONS.FIND_PRODUCT_VARIANTS]),

}
