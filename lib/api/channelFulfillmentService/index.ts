import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
import { customer, fulfillment as fulfillment_service } from '../../validators'
import { ACTIONS, COMMANDS, EVENTS } from '../../enums'

export class ChannelFulfillmentService extends ApiClass {


  /***********************************
   * Service
   ***********************************/

  /**
   * List Channel's services
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICES]
  })
  @Paginate()
  listAll(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Service by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid',
    validator: fulfillment_service[ACTIONS.GET_FULFILLMENT_SERVICE]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List services
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICES]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List descendants services
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICES]
  })
  @Paginate()
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Services
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICES]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel's Public services
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICES]
  })
  @Paginate()
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/fulfillment_services',
    validator: fulfillment_service[COMMANDS.CREATE_FULFILLMENT_SERVICE]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid',
    validator: fulfillment_service[COMMANDS.UPDATE_FULFILLMENT_SERVICE]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish a Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid/publish',
    validator: fulfillment_service[COMMANDS.PUBLISH_FULFILLMENT_SERVICE]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish a Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid/unpublish',
    validator: fulfillment_service[COMMANDS.UNPUBLISH_FULFILLMENT_SERVICE]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Fulfillment_service's Returns Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_services/:fulfillment_service_uuid/address_returns',
    validator: fulfillment_service[COMMANDS.SET_FULFILLMENT_SERVICE_RETURNS]
  })
  setAddressReturns(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Fulfillment_service's Returns Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_services/:fulfillment_service_uuid/address_returns',
    validator: fulfillment_service[ACTIONS.GET_FULFILLMENT_SERVICE_RETURNS]
  })
  getAddressReturns(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Channel Fulfillment_service's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_services/:fulfillment_service_uuid/address_shipping',
    validator: fulfillment_service[COMMANDS.SET_FULFILLMENT_SERVICE_SHIPPING]
  })
  setAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel Fulfillment_service's Shipping Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_services/:fulfillment_service_uuid/address_shipping',
    validator: fulfillment_service[ACTIONS.GET_FULFILLMENT_SERVICE_SHIPPING]
  })
  getAddressShipping(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload services
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/fulfillment_services',
    validator: fulfillment_service[COMMANDS.UPLOAD_FULFILLMENT_SERVICES]
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
    route: 'channels/:channel_uuid/uploads/fulfillment_services',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICE_UPLOADS]
  })
  listUploadResults(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process uploaded services
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/fulfillment_services/:upload_uuid',
    validator: fulfillment_service[COMMANDS.PROCESS_UPLOADED_FULFILLMENT_SERVICES]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get service upload
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/fulfillment_services/:upload_uuid',
    validator: fulfillment_service[ACTIONS.GET_FULFILLMENT_SERVICE_UPLOAD]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}

export class ChannelPublicFulfillmentService extends ApiClass {
  list = ChannelFulfillmentService.prototype.listPublic
}

export class ChannelFulfillmentServiceEvent extends ApiClass {
  /**
   * List service events
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid/events',
    validator: fulfillment_service[ACTIONS.LIST_FULFILLMENT_SERVICE_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create service event
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/fulfillment_services/:service_uuid/events',
    // validator: fulfillment_service[COMMANDS.CREATE_FULFILLMENT_SERVICE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
