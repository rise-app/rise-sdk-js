import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { gateway } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelGateway extends ApiClass {
  /***********************************
   * Gateway
   ***********************************/

  /**
   * Get a Gateway by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/gateways/:gateway_uuid', validator: gateway[ACTIONS.GET_GATEWAY] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
