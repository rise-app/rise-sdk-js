import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
import { channel } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'


export class Channel extends ApiClass {
  /**
   * Create a Sub Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/channels',
    validator: channel[COMMANDS.CREATE]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid',
    validator: channel[COMMANDS.UPDATE]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Channel By UUID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid',
    validator: channel[ACTIONS.GET]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channels (Typically only allowed to super users)
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels',
    validator: channel[ACTIONS.LIST]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Parent Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/parent',
    validator: channel[ACTIONS.GET]
  })
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Descendant Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants',
    validator: channel[ACTIONS.LIST]
  })
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Children Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/children',
    validator: channel[ACTIONS.LIST]
  })
  listChildren(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Siblings Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/siblings',
    validator: channel[ACTIONS.LIST]
  })
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Ancestors Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/ancestors',
    validator: channel[ACTIONS.LIST]
  })
  listAncestors(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Nexus Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/address_nexus',
    validator: channel[ACTIONS.GET]
  })
  getAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Nexus Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/address_nexus',
    validator: channel[COMMANDS.UPDATE]
  })
  setAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Account
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/customer_primary',
    validator: channel[ACTIONS.GET]
  })
  getPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Account
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/customer_primary',
    validator: channel[COMMANDS.UPDATE]
  })
  setPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Default Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/vendor_primary',
    validator: channel[ACTIONS.GET]
  })
  getPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/vendor_primary',
    validator: channel[COMMANDS.UPDATE]
  })
  setPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Default Payment Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/gateway_primary',
    validator: channel[ACTIONS.GET]
  })
  getPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Payment Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/gateway_primary',
    validator: channel[COMMANDS.UPDATE]
  })
  setPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Fulfillment Service
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/fulfillment_service_primary',
    validator: channel[ACTIONS.GET]
  })
  getPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Fulfillment Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/fulfillment_service_primary',
    validator: channel[COMMANDS.UPDATE]
  })
  setPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get a Given Channel's Default Feed
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/feed_primary',
    validator: channel[ACTIONS.GET]
  })
  getPrimaryFeed(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Feed
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/feed_primary',
    validator: channel[COMMANDS.UPDATE]
  })
  setPrimaryFeed(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Shipping Rules
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/rules_shipping',
    validator: channel[ACTIONS.LIST]
  })
  listShippingRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Shipping Rule
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/rules_shipping/:rule_uuid',
    validator: channel[ACTIONS.GET]
  })
  getShippingRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Tax Rules
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/rules_taxes',
    validator: channel[ACTIONS.LIST]
  })
  listTaxRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Tax Rule
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/rules_taxes/:rule_uuid',
    validator: channel[ACTIONS.GET]
  })
  getTaxRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  // /**
  //  * Get Feed Primary
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/feed_primary', validator: feed[ACTIONS.GET_FEED_PRIMARY] })
  // getFeedPrimary(data, req?, validated?) {
  //     return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Set Channel Feed Primary
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'PUT', route: 'channels/:channel_uuid/feed_primary', validator: feed[COMMANDS.SET_CHANNEL_FEED_PRIMARY] })
  // setFeedPrimary(data, req?, validated?) {
  //     return this.request(req, data, validated)
  // }

  getEvent = ChannelEvent.prototype.get

  listEvents = ChannelEvent.prototype.list


}


export class ChannelEvent extends ApiClass {
  /**
   * Get Channel Event By UUID
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/events/:event_uuid',
    validator: channel[ACTIONS.GET]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Events
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/events',
    validator: channel[ACTIONS.LIST]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelPublic extends ApiClass {
  /**
   * Get Channel Event By UUID
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public',
    validator: channel[ACTIONS.GET]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
