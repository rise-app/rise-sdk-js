import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { cart } from '../../validators'

export class ChannelCart extends ApiClass {
  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/carts', validator: cart.create })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'PUT', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: cart.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid', validator: cart.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts', validator: cart.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_billing', validator: cart.get })
  getAddressBilling(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/address_shipping', validator: cart.get })
  getAddressShipping(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }


  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items/:item_uuid', validator: cart.get })
  getItem(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/carts/:cart_uuid/items', validator: cart.list })
  listItems(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

}
