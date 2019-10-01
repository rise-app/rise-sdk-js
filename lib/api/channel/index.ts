import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { cart } from '../../validators'

export class Channel extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/carts', validator: cart.create })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid', validator: cart.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid', validator: cart.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/carts', validator: cart.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/address_nexus', validator: cart.get })
  getAddressNexus(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/address_nexus', validator: cart.update })
  setAddressNexus(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customer_primary', validator: cart.get })
  getPrimaryCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customer_primary', validator: cart.update })
  setPrimaryCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/vendor_primary', validator: cart.get })
  getPrimaryVendor(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/vendor_primary', validator: cart.update })
  setPrimaryVendor(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/gateway_primary', validator: cart.get })
  getPrimaryGateway(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/gateway_primary', validator: cart.update })
  setPrimaryGateway(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: cart.get })
  getPrimaryFulfillmentService(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/fulfillment_service_primary', validator: cart.update })
  setPrimaryFulfillmentService(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping', validator: cart.list })
  listShippingRules(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_shipping/:rule_uuid', validator: cart.get })
  getShippingRule(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes', validator: cart.list })
  listTaxRules(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/rules_taxes/:rule_uuid', validator: cart.get })
  getTaxRule(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
