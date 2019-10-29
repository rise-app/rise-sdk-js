import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { channel } from '../../validators'

export class Channel extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/channels', validator: channel.create })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid', validator: channel.update })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid', validator: channel.get })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/channels', validator: channel.list })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/address_nexus', validator: channel.get })
  getAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/address_nexus', validator: channel.update })
  setAddressNexus(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customer_primary', validator: channel.get })
  getPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customer_primary', validator: channel.update })
  setPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendor_primary', validator: channel.get })
  getPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/vendor_primary', validator: channel.update })
  setPrimaryVendor(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/gateway_primary', validator: channel.get })
  getPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/gateway_primary', validator: channel.update })
  setPrimaryGateway(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: channel.get })
  getPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: channel.update })
  setPrimaryFulfillmentService(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping', validator: channel.list })
  listShippingRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping/:rule_uuid', validator: channel.get })
  getShippingRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes', validator: channel.list })
  listTaxRules(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes/:rule_uuid', validator: channel.get })
  getTaxRule(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
