import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { customer } from '../../validators'

export class ChannelCustomer extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/customers', validator: customer.create })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers', validator: customer.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: customer.get })
  getAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: customer.get })
  getAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
