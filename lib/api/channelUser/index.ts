import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { cart, collection, customer, offer, user } from '../../validators'
import { ChannelAuth } from '../channelAuth'
import { ACTIONS, COMMANDS } from '../../enums'
import { permission } from '../../validators/permission'

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

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/auth/sessionchannels', validator: user[ACTIONS.GET_SESSION] })
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
   * Set an User's Primary Image
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/users/:user_uuid/image_primary',
    // validator: user[COMMANDS.SET_USER_PRIMARY_IMAGE]
  })
  setPrimaryImage(data, req?, validated?) {
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

  /**
   * Get an User's Primary Image by User ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/image_primary',
    // validator: user[ACTIONS.GET_USER_PRIMARY_IMAGE]
  })
  getPrimaryImage(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List All Users from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/users', validator: user[ACTIONS.LIST_USERS] })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Users from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/search/users', validator: user[ACTIONS.LIST_USERS] })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get a User's Current Cart
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/cart_current', validator: user[ACTIONS.GET_USER] })
  getCurrentCart(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a User's Current Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/customer_current', validator: user[ACTIONS.GET_USER] })
  getCurrentCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get a User's Primary Customer
   * @param data
   * @param req
   * @param validated
   */
  // TODO Validator
  @Action({ method: 'GET', route: 'channels/:channel_uuid/users/:user_uuid/customer_primary', validator: user[ACTIONS.GET_USER] })
  getPrimaryCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Upload a User CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/users', validator: user[COMMANDS.UPLOAD_USERS] })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Users Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/users/:upload_uuid', validator: user[COMMANDS.PROCESS_UPLOADED_USERS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a User Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/users/metadata', validator: user[COMMANDS.UPLOAD_USER_METADATA] })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's User Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/users/metadata/:upload_uuid', validator: user[COMMANDS.PROCESS_UPLOADED_USER_METADATA] })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's User Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/users/:upload_uuid', validator: user[ACTIONS.GET_USER_UPLOAD_RESULT] })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's User Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/users', validator: user[ACTIONS.LIST_USER_UPLOAD_RESULTS] })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel User Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/users/metadata/:upload_uuid', validator: user[ACTIONS.GET_USER_METADATA_UPLOAD_RESULT] })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's User Metadata Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/users/metadata', validator: user[ACTIONS.LIST_USER_METADATA_UPLOAD_RESULTS] })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}
export class ChannelUserCustomer extends ApiClass {
  /**
   * List User's customers
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/customers',
    // validator: user[ACTIONS.LIST_USER_CUSTOMERS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List User's Customers
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/customers/:customer_uuid',
    // validator: user[ACTIONS.GET_USER_CUSTOMER ]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create a New Customer for User
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/users/:user_uuid/customers',
    // validator: user[COMMANDS.CREATE_USER_CUSTOMER]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add an Existing Customer to a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/users/:user_uuid/customers',
    // validator: user[COMMANDS.ADD_USER_CUSTOMER]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove a Customer from a User
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/users/:user_uuid/customers/:customer_uuid',
    // validator: user[COMMANDS.REMOVE_USER_CUSTOMER]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelUserEvent extends ApiClass {
  /**
   * List User's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/events',
    validator: user[ACTIONS.LIST_USER_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List User's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/events/:event_uuid',
    // validator: user[ACTIONS.GET_USER_EVENT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create User's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/users/:user_uuid/events',
    // validator: user[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelUserInvite extends ApiClass {
  //
}

export class ChannelUserNotification extends ApiClass {
  //
}

export class ChannelUserPassport extends ApiClass {
  /**
   * List User's Passports
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/passports',
    // validator: user[ACTIONS.LIST_USERS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get User Passport
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/passports/:passport_uuid',
    // validator: user[ACTIONS.GET_USER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create User Passport
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/users/:user_uuid/passports',
    // validator: user[COMMANDS.CREATE_USER_PASSPORT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Add User's Passport
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/users/:user_uuid/passports',
    // validator: user[COMMANDS.CREATE_USER_PASSPORT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove User's Passport
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/users/:user_uuid/passports/:passport_uuid',
    // validator: user[COMMANDS.REMOVE_USER_PASSPORT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Reset User's Passport
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/users/:user_uuid/passports/:passport_uuid/reset',
    // validator: user[COMMANDS.CREATE_USER_PASSPORT]
  })
  reset(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelUserPermission extends ApiClass {
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/permissions',
    validator: permission[ACTIONS.LIST_USER_PERMISSIONS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelUserRole extends ApiClass {
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/roles',
    // validator: permission[ACTIONS.LIST_USER_ROLES]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List User's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/users/:user_uuid/roles/:role_name',
    // validator: user[ACTIONS.GET_USER_ROLE]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Add User Role
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR, TODO fix rise endpoint to be PUT
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/users/:user_uuid/roles',
    // validator: user[COMMANDS.ADD_USER_ROLE]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Remove User Role
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/users/:user_uuid/roles/:role_name',
    // validator: user[COMMANDS.REMOVE_USER_ROLE]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
