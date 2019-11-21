import { ApiClass } from '../../ApiClass'
import { Action, Command } from '../../metadata'
import { permission } from '../../validators/permission'
export class ChannelPermission extends ApiClass {

    @Command({ method: 'GET', route: '/channels/:channel_uuid/users/:user_uuid/permissions', validator: permission[COMMANDS.LIST_USER_PERMISSIONS] })
    listUserPermissions(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    @Command({ method: 'GET', route: '/channels/:channel_uuid/roles/:role_name/permissions', validator: permission[COMMANDS.LIST_ROLE_PERMISSIONS] })
    listRolePermissions(data, req?, validated?) {
        return this.request(req, data, validated)
    }


}