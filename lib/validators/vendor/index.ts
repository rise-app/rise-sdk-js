import { Utils } from '../../Utils'
import { vendor as vendorSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

export const vendor = {
  // COMMANDS
  [COMMANDS.CREATE_VENDOR]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.CREATE_VENDOR].params),
    body: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.CREATE_VENDOR].body)
  },
  [COMMANDS.UPDATE_VENDOR]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.UPDATE_VENDOR].params),
    body: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.UPDATE_VENDOR].body)
  },

  [COMMANDS.UPLOAD_VENDORS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.UPLOAD_VENDORS].params)
  },
  [COMMANDS.PROCESS_UPLOADED_VENDORS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.PROCESS_UPLOADED_VENDORS].params)
  },
  [COMMANDS.UPLOAD_VENDOR_INVENTORY]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.UPLOAD_VENDOR_INVENTORY].params)
  },
  [COMMANDS.PROCESS_UPLOADED_VENDOR_INVENTORY]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.commands[COMMANDS.PROCESS_UPLOADED_VENDOR_INVENTORY].params)
  },


  // ACTIONS
  [ACTIONS.GET_VENDOR]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.GET_VENDOR].params)
  },
  [ACTIONS.FIND_VENDOR]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.FIND_VENDOR].params)
  },
  [ACTIONS.LIST_VENDORS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.LIST_VENDORS].params)
  },
  [ACTIONS.FIND_VENDORS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.FIND_VENDORS].params)
  },

  [ACTIONS.GET_VENDOR_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.GET_VENDOR_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_VENDOR_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.LIST_VENDOR_UPLOAD_RESULTS].params)
  },
  [ACTIONS.GET_VENDOR_INVENTORY_UPLOAD_RESULT]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.GET_VENDOR_INVENTORY_UPLOAD_RESULT].params)
  },
  [ACTIONS.LIST_VENDOR_UPLOAD_RESULTS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.LIST_VENDOR_INVENTORY_UPLOAD_RESULTS].params)
  },


  [ACTIONS.LIST_VENDOR_PRODUCTS]: {
    params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.LIST_VENDORS].params)
  },
  // [ACTIONS.FIND_VENDOR_PRODUCTS]: {
  //   params: (data) => Utils.joiPromise(data, vendorSchema.actions[ACTIONS.FIND_VENDORS].params)
  // },
}
