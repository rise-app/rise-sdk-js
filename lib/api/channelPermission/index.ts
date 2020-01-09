import { ApiClass } from '../../ApiClass'
import { Action, Command } from '../../metadata'
import { permission } from '../../validators/permission'
import { ACTIONS } from '../../enums'

export class ChannelPermission extends ApiClass {

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/roles/:role_name/permissions',
    validator: permission[ACTIONS.LIST_ROLE_PERMISSIONS]
  })
  listRolePermissions(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}
