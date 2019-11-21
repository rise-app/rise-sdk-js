import { Utils } from '../../Utils'
import { cart as cartSchema } from '../../schemas'
import { COMMANDS, ACTIONS } from '../../enums'

export const permission = {

    /***********************************
     * Permission
     ***********************************/

    // Actions

    [ACTIONS.LIST_USER_PERMISSIONS]: {
        params: (data) => Utils.joiPromise(data, cartSchema.commands[ACTIONS.LIST_USER_PERMISSIONS].params),
        body: (data) => Utils.joiPromise(data, cartSchema.commands[ACTIONS.LIST_USER_PERMISSIONS].body),
    },
    [ACTIONS.LIST_ROLE_PERMISSIONS]: {
        params: (data) => Utils.joiPromise(data, cartSchema.commands[ACTIONS.LIST_ROLE_PERMISSIONS].params),
        body: (data) => Utils.joiPromise(data, cartSchema.commands[ACTIONS.LIST_ROLE_PERMISSIONS].body)
    },

}
