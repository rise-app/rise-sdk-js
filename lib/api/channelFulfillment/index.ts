import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { fulfillment, order } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelFulfillment extends ApiClass {
  /***********************************
   * Fulfillment Actions
   ***********************************/

  /**
   * List All Fulfillments
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/fulfillments',
    validator: fulfillment[ACTIONS.LIST_FULFILLMENTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Fulfillments
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillments',
    validator: fulfillment[ACTIONS.LIST_FULFILLMENTS]
  })
  listChannel(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Descedant Fulfillments
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/fulfillments',
    validator: fulfillment[ACTIONS.LIST_FULFILLMENTS]
  })
  listChannelDescendant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Channel Fulfillments
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/fulfillments',
    validator: fulfillment[ACTIONS.LIST_FULFILLMENTS]
  })
  searchChannel(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // /**
  //  * Get Fulfillment Primary
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/fulfillment_primary', validator: fulfillment[ACTIONS.GET_FULFILLMENT_PRIMARY] })
  // getFulfillmentPrimary(data, req?, validated?) {
  //     return this.request(req, data, validated)
  // }


  /**
   * Get Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid',
    validator: fulfillment[ACTIONS.GET_FULFILLMENT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /***********************************
   * Fulfillment Commands
   ***********************************/


  /**
   * Update Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid',
    validator: fulfillment[COMMANDS.UPDATE_FULFILLMENT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/fulfillments',
    validator: fulfillment[COMMANDS.CREATE_FULFILLMENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // /**
  //  * Set Channel Fulfillment Primary
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'PUT', route: 'channels/:channel_uuid/fulfillment_primary', validator: fulfillment[COMMANDS.SET_CHANNEL_FULFILLMENT_PRIMARY] })
  // setFulfillmentPrimary(data, req?, validated?) {
  //     return this.request(req, data, validated)
  // }

  /**
   * Send Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/send',
    // validator: order[COMMANDS.SEND_FULFILLMENT]
  })
  send(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Cancel Order Fulfillment
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/cancel',
    // validator: order[COMMANDS.SEND_FULFILLMENT]
  })
  cancel(data, req?, validated?) {
    return this.request(req, data, validated)
  }


}

export class ChannelFulfillmentItem extends ApiClass {
  /************************************
   * FulfillmentItem Actions
   ***********************************/

  /**
   * List Fulfillment Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/items',
    validator: fulfillment[ACTIONS.LIST_FULFILLMENT_ITEMS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Fulfillment Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
    validator: fulfillment[ACTIONS.GET_FULFILLMENT_ITEM]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /************************************
   * FulfillmentItem Commands
   ***********************************/

  /**
   * Create Fulfillment Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/items',
    validator: fulfillment[COMMANDS.CREATE_FULFILLMENT_ITEM]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Fulfillment Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
    validator: fulfillment[COMMANDS.UPDATE_FULFILLMENT_ITEM]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Delete Fulfillment Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/fulfillments/:fulfillment_uuid/items/:item_uuid',
    validator: fulfillment[COMMANDS.DESTROY_FULFILLMENT_ITEM]
  })
  delete(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
