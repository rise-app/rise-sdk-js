import { Utils } from '../../Utils'
import { task as taskSchema } from '../../schemas'
import { ACTIONS, COMMANDS } from '../../enums'

export const task = {
  // COMMANDS
  [COMMANDS.CREATE_TASK]: {
    params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.CREATE_TASK].params),
    body: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.CREATE_TASK].body)
  },
  [COMMANDS.UPDATE_TASK]: {
    params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.UPDATE_TASK].params),
    body: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.UPDATE_TASK].body)
  },

  // [COMMANDS.UPLOAD_TASKS]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.UPLOAD_TASKS].params)
  // },
  // [COMMANDS.PROCESS_UPLOADED_TASKS]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.PROCESS_UPLOADED_TASKS].params)
  // },
  // [COMMANDS.UPLOAD_TASK_INVENTORY]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.UPLOAD_TASK_INVENTORY].params)
  // },
  // [COMMANDS.PROCESS_UPLOADED_TASK_INVENTORY]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.commands[COMMANDS.PROCESS_UPLOADED_TASK_INVENTORY].params)
  // },


  // ACTIONS
  [ACTIONS.GET_TASK]: {
    params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.GET_TASK].params)
  },
  [ACTIONS.FIND_TASK]: {
    params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.FIND_TASK].params)
  },
  [ACTIONS.LIST_TASKS]: {
    params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.LIST_TASKS].params)
  },
  [ACTIONS.FIND_TASKS]: {
    params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.FIND_TASKS].params)
  },

  // [ACTIONS.GET_TASK_UPLOAD_RESULT]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.GET_TASK_UPLOAD_RESULT].params)
  // },
  // [ACTIONS.LIST_TASK_UPLOAD_RESULTS]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.LIST_TASK_UPLOAD_RESULTS].params)
  // },
  // [ACTIONS.GET_TASK_INVENTORY_UPLOAD_RESULT]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.GET_TASK_INVENTORY_UPLOAD_RESULT].params)
  // },
  // [ACTIONS.LIST_TASK_UPLOAD_RESULTS]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.LIST_TASK_INVENTORY_UPLOAD_RESULTS].params)
  // },
  //

  [ACTIONS.LIST_TASK_ITEMS]: {
    params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.LIST_TASKS].params)
  },
  // [ACTIONS.FIND_TASK_ITEMS]: {
  //   params: (data) => Utils.joiPromise(data, taskSchema.actions[ACTIONS.FIND_TASKS].params)
  // },
}
