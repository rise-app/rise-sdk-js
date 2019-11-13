import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { gateway } from '../../validators'
import { ACTIONS, COMMANDS, EVENTS } from '../../enums'

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
* Get Gateway Primary
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/gateway_primary', validator: gateway[ACTIONS.GET_GATEWAY_PRIMARY] })
  getGatewayPrimary(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
 * List gateways
 * @param data
 * @param req
 * @param validated
 */
  @Action({ method: 'GET', route: 'channels/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  listGateways(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* List descendants gateways
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/descendants/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  listDescendantsGateways(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Search Gateways
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/search/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  searchGateways(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
  * List Channel's gateways
  * @param data
  * @param req
  * @param validated
  */
  @Action({ method: 'GET', route: '/channels/:channel_uuid/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  listChannelsGateways(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
  * List Channel's Public gateways
  * @param data
  * @param req
  * @param validated
  */
  @Action({ method: 'GET', route: '/channels/:channel_uuid/public/gateways', validator: gateway[ACTIONS.LIST_GATEWAYS] })
  listChannelsPublicGateways(data, req?, validated?) {
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

  /**
* Publish a Gateway
* @param data
* @param req
* @param validated
*/
  @Command({ method: 'PUT', route: '/channels/:channel_uuid/gateways/:gateway_uuid/publish', validator: gateway[COMMANDS.PUBLISH_GATEWAY] })
  publishGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Unpublish a Gateway
* @param data
* @param req
* @param validated
*/
  @Command({ method: 'PUT', route: '/channels/:channel_uuid/gateways/:gateway_uuid/unpublish', validator: gateway[COMMANDS.UNPUBLISH_GATEWAY] })
  unpublishGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* List gateway events
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/gateways/:gateway_uuid', validator: gateway[ACTIONS.LIST_GATEWAY_EVENTS] })
  listGatewayEvents(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Create gateway event
* @param data
* @param req
* @param validated
*/
  // @Command({ method: 'POST', route: '/channels/:channel_uuid/gateways/:gateway_uuid', validator: gateway[EVENTS.CREATE_EVENT] })
  // createGatewayEvents(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  /**
* Upload gateways
* @param data
* @param req
* @param validated
*/
  @Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways', validator: gateway[COMMANDS.UPLOAD_GATEWAYS] })
  uploadGateways(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Get upload results
* @param data
* @param req
* @param validated
*/
  @Action({ method: 'GET', route: '/channels/:channel_uuid/uploads/gateways', validator: gateway[ACTIONS.LIST_GATEWAY_UPLOADS] })
  uploadResults(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Process uploaded gateways
* @param data
* @param req
* @param validated
*/
  @Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways/:upload_uuid', validator: gateway[COMMANDS.PROCESS_UPLOADED_GATEWAYS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
* Get gateway upload
* @param data
* @param req
* @param validated
*/
  @Command({ method: 'POST', route: '/channels/:channel_uuid/uploads/gateways/:upload_uuid', validator: gateway[ACTIONS.GET_GATEWAY_UPLOAD] })
  getGatewayUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }







}
