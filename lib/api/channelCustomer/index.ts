import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { customer } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelCustomer extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/customers', validator: customer[COMMANDS.CREATE_CUSTOMER] })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer[COMMANDS.UPDATE_CUSTOMER] })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer[ACTIONS.GET_CUSTOMER] })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers', validator: customer[ACTIONS.LIST_CUSTOMERS] })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: customer[COMMANDS.SET_CUSTOMER_BILLING] })
  setAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_billing', validator: customer[ACTIONS.GET_CUSTOMER_BILLING] })
  getAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: customer[COMMANDS.SET_CUSTOMER_SHIPPING] })
  setAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/customers/:customer_uuid/address_shipping', validator: customer[ACTIONS.GET_CUSTOMER_SHIPPING] })
  getAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
