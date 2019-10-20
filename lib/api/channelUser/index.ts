import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { user } from '../../validators'
import { ChannelAuth } from '../channelAuth'

export class ChannelUser extends ApiClass {
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user.session })
  // validateToken(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  validateToken = ChannelAuth.prototype.validateToken

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user.session })
  // session(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  session = ChannelAuth.prototype.session

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user.session })
  // sessionCart(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionCart = ChannelAuth.prototype.sessionCart

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user.session })
  // sessionCustomer(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionCustomer = ChannelAuth.prototype.sessionCustomer

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user.session })
  // sessionChannel(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionChannel = ChannelAuth.prototype.sessionChannel

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user.session })
  // sessionChannels(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionChannels = ChannelAuth.prototype.sessionChannels

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user.session })
  // sessionRoles(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionRoles = ChannelAuth.prototype.sessionRoles

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user.session })
  // sessionUser(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  sessionUser = ChannelAuth.prototype.sessionUser

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  // register(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  register = ChannelAuth.prototype.register

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  // login(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  login = ChannelAuth.prototype.login

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
  // logout(data, req?, validated?) {
  //   return this.rise.request(req, data, validated)
  // }
  logout = ChannelAuth.prototype.logout

  /**
   * Create a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user.create })
  create(data, req?, validated?) {
    console.log('brk create', data, req)
    return this.rise.request(req, data, validated)
  }

  /**
   * Update a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/users/:user_uuid', validator: user.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Get a User by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid', validator: user.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * List Users
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users', validator: user.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**
   * Search Users
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/users', validator: user.list })
  search(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }
}
