import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { customer } from '../../validators'

export class ChannelCustomer extends ApiClass {
  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/customers', validator: customer.create })
  create(data, req?) {
    return this.rise.request(req, data)
  }

  @Endpoint({ method: 'PUT', route: 'channels/:channel_uuid/customers/:customer_uuid', validator: customer.update })
  update(data, req?) {
    return this.rise.request(req, data)
  }
}
