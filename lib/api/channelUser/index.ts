import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { user } from '../../validators'

export class ChannelUser extends ApiClass {
  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  register(data, req?) {
    return user.register(data)
      .then(validation => {
        return this.rise.request(req, data, validation)
      })
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  login(data, req?) {
    return user.login(data)
      .then(validation => {
        return this.rise.request(req, data, validation)
      })
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user.create })
  create(data, req?) {
    return user.create(data)
      .then(validation => {
        return this.rise.request(req, data, validation)
      })
  }
}