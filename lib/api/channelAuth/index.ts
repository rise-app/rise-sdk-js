import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { user, auth } from '../../validators'
import { COMMANDS } from '../../enums'

export class ChannelAuth extends ApiClass {
  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user.session })
  validateToken(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user.session })
  session(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user.session })
  sessionCart(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user.session })
  sessionCustomer(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user.session })
  sessionChannel(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user.session })
  sessionChannels(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user.session })
  sessionRoles(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user.session })
  sessionUser(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  register(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  login(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
  logout(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Send recovery directions to user
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/recover', validator: auth[COMMANDS.SET_RECOVERY]})
  setRecovery(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Use recovery token to reset unauthorized user
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/recover', validator: auth[COMMANDS.RECOVER] })
  recover(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

}
