import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { user } from '../../validators'

export class ChannelUser extends ApiClass {
  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user.session })
  validateToken(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user.session })
  session(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user.session })
  sessionCart(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user.session })
  sessionCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user.session })
  sessionChannel(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user.session })
  sessionChannels(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user.session })
  sessionRoles(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user.session })
  sessionUser(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  register(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  login(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
  logout(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user.create })
  create(data, req?, validated?) {
    console.log('brk create', data, req)
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'PUT', route: 'channels/:channel_uuid/users/:user_uuid', validator: user.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid', validator: user.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Endpoint({ method: 'GET', route: 'channels/:channel_uuid/users', validator: user.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
