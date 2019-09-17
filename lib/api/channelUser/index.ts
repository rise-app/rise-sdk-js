import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { user } from '../../validators'

export class ChannelUser extends ApiClass {
  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  register(data, req?) {
    return this.rise.request(req, data)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  login(data, req?) {
    return this.rise.request(req, data)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user.create })
  create(data, req?) {
    return this.rise.request(req, data)
  }

  @Endpoint({ method: 'PUT', route: 'channels/:channel_uuid/users/:user_uuid', validator: user.update })
  update(data, req?) {
    return this.rise.request(req, data)
  }
}
