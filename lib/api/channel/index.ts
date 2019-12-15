import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { channel } from '../../validators'

export class Channel extends ApiClass {
  /**
   * Create a Sub Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/channels', validator: channel.create })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid', validator: channel.update })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Channel By UUID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid', validator: channel.get})
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channels (Typically only allowed to super users)
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels', validator: channel.list })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Parent Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/parent', validator: channel.get})
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List a Given Channel's Descendant Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants', validator: channel.list })
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List a Given Channel's Children Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/children', validator: channel.list })
  listChildren(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Siblings Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/siblings', validator: channel.list })
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Ancestors Channels
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/ancestors', validator: channel.list })
  listAncestors(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Nexus Address
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/address_nexus', validator: channel.get })
  getAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Nexus Address
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/address_nexus', validator: channel.update })
  setAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Account
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customer_primary', validator: channel.get })
  getPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Customer Account
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customer_primary', validator: channel.update })
  setPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Default Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendor_primary', validator: channel.get })
  getPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Vendor
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/vendor_primary', validator: channel.update })
  setPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Default Payment Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/gateway_primary', validator: channel.get })
  getPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Payment Gateway
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/gateway_primary', validator: channel.update })
  setPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Fulfillment Service
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: channel.get })
  getPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Fulfillment Service
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: channel.update })
  setPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get a Given Channel's Default Feed
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/feed_primary', validator: channel.get })
  getPrimaryFeed(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Set a Given Channel's Default Feed
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/feed_primary', validator: channel.update })
  setPrimaryFeed(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Shipping Rules
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping', validator: channel.list })
  listShippingRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Shipping Rule
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping/:rule_uuid', validator: channel.get })
  getShippingRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Tax Rules
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes', validator: channel.list })
  listTaxRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Tax Rule
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes/:rule_uuid', validator: channel.get })
  getTaxRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  // /**
  //  * Get Feed Primary
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: '/channels/:channel_uuid/feed_primary', validator: feed[ACTIONS.GET_FEED_PRIMARY] })
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
  // @Command({ method: 'PUT', route: '/channels/:channel_uuid/feed_primary', validator: feed[COMMANDS.SET_CHANNEL_FEED_PRIMARY] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/events/:event_uuid', validator: channel.get})
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Events
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/events', validator: channel.list})
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
