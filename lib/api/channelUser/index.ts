import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { cart, user } from '../../validators'
import { ChannelAuth } from '../channelAuth'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelUser extends ApiClass {
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/token', validator: user[ACTIONS.GET_SESSION] })
  // validateToken(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  validateToken = ChannelAuth.prototype.validateToken

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session', validator: user[ACTIONS.GET_SESSION] })
  // session(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  session = ChannelAuth.prototype.session

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/cart', validator: user[ACTIONS.GET_SESSION] })
  // sessionCart(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionCart = ChannelAuth.prototype.sessionCart

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/customer', validator: user[ACTIONS.GET_SESSION] })
  // sessionCustomer(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionCustomer = ChannelAuth.prototype.sessionCustomer

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channel', validator: user[ACTIONS.GET_SESSION] })
  // sessionChannel(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionChannel = ChannelAuth.prototype.sessionChannel

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/channels', validator: user[ACTIONS.GET_SESSION] })
  // sessionChannels(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionChannels = ChannelAuth.prototype.sessionChannels

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/roles', validator: user[ACTIONS.GET_SESSION] })
  // sessionRoles(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionRoles = ChannelAuth.prototype.sessionRoles

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/session/user', validator: user[ACTIONS.GET_SESSION] })
  // sessionUser(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  sessionUser = ChannelAuth.prototype.sessionUser

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local/register', validator: user.register })
  // register(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  register = ChannelAuth.prototype.register

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/local', validator: user.login })
  // login(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  login = ChannelAuth.prototype.login

  // @Command({ method: 'POST', route: 'channels/:channel_uuid/auth/logout', validator: user.logout })
  // logout(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  logout = ChannelAuth.prototype.logout

  /**
   * Create a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user[COMMANDS.CREATE_USER]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/users/:user_uuid', validator: user[COMMANDS.UPDATE_USER] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a User by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid', validator: user[ACTIONS.GET_USER] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Users
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users', validator: user[ACTIONS.LIST_USERS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Users
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/users', validator: user[ACTIONS.LIST_USERS] })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
