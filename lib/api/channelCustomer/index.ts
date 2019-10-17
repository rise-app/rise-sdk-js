import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { customer } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelCustomer extends ApiClass {
  /**********************************
   * PRIVATE
   **********************************/
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


  /**********************************
   * PUBLIC
   **********************************/

  /**
   * Get a Public Customer Details by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/:customer_uuid', validator: customer[ACTIONS.GET_PUBLIC_CUSTOMER] })
  getPublic(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a Public Customer Details by Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/customers/handle/:handle', validator: customer[ACTIONS.FIND_PUBLIC_CUSTOMER] })
  getPublicByHandle(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
