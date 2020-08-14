import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
import { gateway } from '../../validators'
import { ACTIONS, COMMANDS, EVENTS } from '../../enums'


/***********************************
 * Gateway
 ***********************************/

export class ChannelGateway extends ApiClass {
  /**
   * Get a Gateway by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid',
    validator: gateway[ACTIONS.GET_GATEWAY]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List gateways
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List descendants gateways
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/gateways',
    validator: gateway[ACTIONS.LIST_DESCENDANTS_GATEWAYS]
  })
  @Paginate()
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Gateways
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/gateways',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel's gateways
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/gateways',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  listAll(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel's Public gateways
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/gateways',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/gateways',
    validator: gateway[COMMANDS.CREATE_GATEWAY]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid',
    validator: gateway[COMMANDS.UPDATE_GATEWAY]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish a Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/publish',
    validator: gateway[COMMANDS.PUBLISH_GATEWAY]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish a Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/unpublish',
    validator: gateway[COMMANDS.UNPUBLISH_GATEWAY]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload gateways
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/gateways',
    validator: gateway[COMMANDS.UPLOAD_GATEWAYS]
  })
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get upload results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/gateways',
    validator: gateway[ACTIONS.LIST_GATEWAY_UPLOADS]
  })
  @Paginate()
  listUploadResults(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process uploaded gateways
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/gateways/:upload_uuid',
    validator: gateway[COMMANDS.PROCESS_UPLOADED_GATEWAYS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get gateway upload
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/gateways/:upload_uuid',
    validator: gateway[ACTIONS.GET_GATEWAY_UPLOAD]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}

export class ChannelPublicGateway extends ApiClass {
  list = ChannelGateway.prototype.listPublic
}

export class ChannelGatewayAccount extends ApiClass {

  /**
   * Create a Gateway Account
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts',
    validator: gateway[COMMANDS.CREATE_GATEWAY]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Gateway Account
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:account_uuid',
    validator: gateway[COMMANDS.UPDATE_GATEWAY]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Gateway Account by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:accounts_uuid',
    validator: gateway[ACTIONS.GET_GATEWAY]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Gateway's Accounts
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelGatewayAccountSource extends ApiClass {
  /**
   * Create a Gateway Account Source
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:account_uuid/sources',
    validator: gateway[COMMANDS.CREATE_GATEWAY]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Gateway Account Source
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:account_uuid/sources/:source_uuid',
    validator: gateway[COMMANDS.UPDATE_GATEWAY]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get a Gateway's Account's Source by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:accounts_uuid/sources/:source_uuid',
    validator: gateway[ACTIONS.GET_GATEWAY]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Gateway's Account's Sources
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/accounts/:account_uuid/sources',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelGatewayEvent extends ApiClass {
  /**
   * List gateway events
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/events',
    validator: gateway[ACTIONS.LIST_GATEWAY_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create gateway event
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/events',
    validator: gateway[EVENTS.GATEWAY_CREATED]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelGatewayForm extends ApiClass {
}


export class ChannelGatewayReceiver extends ApiClass {
  /**
   * Create a Gateway Receiver
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/receivers',
    validator: gateway[COMMANDS.CREATE_GATEWAY]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Gateway Receiver
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/receivers/:receiver_uuid',
    validator: gateway[COMMANDS.UPDATE_GATEWAY]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Get a Gateway Receiver by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/receivers/:receivers_uuid',
    validator: gateway[ACTIONS.GET_GATEWAY]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Gateway's Receivers
   * @param data
   * @param req
   * @param validated
   */
  // TODO
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateways/:gateway_uuid/receivers',
    validator: gateway[ACTIONS.LIST_GATEWAYS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

/**********************************
 * PUBLIC ENDPOINTS
 **********************************/
export class ChannelPublicGatewayForm extends ApiClass {
}

