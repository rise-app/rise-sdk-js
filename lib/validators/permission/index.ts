import { Utils } from '../../Utils'
import { actions } from '../../schemas/permission'
import { COMMANDS, ACTIONS } from '../../enums'

export const permission = {

    /***********************************
     * Permission
     ***********************************/

    // Actions

    [ACTIONS.LIST_USER_PERMISSIONS]: {
        params: (data) => Utils.joiPromise(data, actions[ACTIONS.LIST_USER_PERMISSIONS].params),
        body: (data) => Utils.joiPromise(data, actions[ACTIONS.LIST_USER_PERMISSIONS].body),
    },
    [ACTIONS.LIST_ROLE_PERMISSIONS]: {
        params: (data) => Utils.joiPromise(data, actions[ACTIONS.LIST_ROLE_PERMISSIONS].params),
        body: (data) => Utils.joiPromise(data, actions[ACTIONS.LIST_ROLE_PERMISSIONS].body)
    },

}
