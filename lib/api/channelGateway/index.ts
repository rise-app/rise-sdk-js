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

  /**
* GET a Gateway Primary
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/gateway_primary', validator: gateway[ACTIONS.GET_GATEWAY_PRIMARY] })
  primary(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
 * List gateways
 * @param data
 * @param req
 * @param validated
 */
  @Action({ method: 'GET', route: 'channels/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
 * Create a Gateway
 * @param data
 * @param req
 * @param validated
 */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/gateways', validator: gateway[COMMANDS.CREATE_GATEWAY] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
 * Update a Gateway
 * @param data
 * @param req
 * @param validated
 */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/gateways/:gateway_uuid', validator: gateway[COMMANDS.UPDATE_GATEWAY] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }



}
