import { ApiClass } from '../../ApiClass'
import { Action, Command, Paginate } from '../../metadata'
import { application, user } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelApplication extends ApiClass {
  /**
   * Subscribe Application
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/applications/subscribe', validator: application[ACTIONS.SUBSCRIBE_APPLICATION] })
  subscribe(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /***********************************
   * Application
   ***********************************/

  /**
   * Get a Application by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid',
    validator: application[ACTIONS.GET_APPLICATION]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List applications
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications',
    validator: application[ACTIONS.LIST_APPLICATIONS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Applications
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications',
    validator: application[ACTIONS.LIST_APPLICATIONS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List All Applications from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/applications',
    validator: application[ACTIONS.LIST_APPLICATIONS]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Applications from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/applications',
    validator: application[ACTIONS.LIST_APPLICATIONS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications',
    validator: application[COMMANDS.CREATE_APPLICATION]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelApplicationEndpoint extends ApiClass {
  /**
   * Get a Application Endpoint by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/endpoints/:endpoint_uuid',
    validator: application[ACTIONS.GET_APPLICATION_ENDPOINT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's Endpoints
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/endpoints',
    validator: application[ACTIONS.LIST_APPLICATION_ENDPOINTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Application's Endpoints
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications/:application_uuid/endpoints',
    validator: application[ACTIONS.LIST_APPLICATION_ENDPOINTS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application's Endpoint
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/endpoints',
    // validator: application[COMMANDS.CREATE_APPLICATION_ENDPOINT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application's Endpoint
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/endpoints/:endpoint_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION_ENDPOINT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish Application's Endpoint
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/:endpoints/:endpoint_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish Application's Endpoint
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/endpoints/:endpoint_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelApplicationKey extends ApiClass {
  /**
   * Get a Application Key by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/keys/:key_uuid',
    validator: application[ACTIONS.GET_APPLICATION_KEY]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's Keys
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/keys',
    validator: application[ACTIONS.LIST_APPLICATION_KEYS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Application's Keys
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications/:application_uuid/keys',
    validator: application[ACTIONS.LIST_APPLICATION_KEYS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application's Key
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/keys',
    // validator: application[COMMANDS.CREATE_APPLICATION_KEY]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application's Key
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/keys/:key_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION_KEY]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish Application's Key
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/:keys/:key_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish Application's Key
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/keys/:key_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
export class ChannelApplicationPrehook extends ApiClass {
  /**
   * Get a Application Prehook by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/prehooks/:prehook_uuid',
    validator: application[ACTIONS.GET_APPLICATION_PREHOOK]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's Prehooks
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/prehooks',
    validator: application[ACTIONS.LIST_APPLICATION_PREHOOKS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Application's Prehooks
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications/:application_uuid/prehooks',
    validator: application[ACTIONS.LIST_APPLICATION_PREHOOKS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application's Prehook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/prehooks',
    // validator: application[COMMANDS.CREATE_APPLICATION_PREHOOK]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application's Prehook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/prehooks/:prehook_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION_PREHOOK]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish Application's Prehook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/:prehooks/:prehook_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish Application's Prehook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/prehooks/:prehook_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
export class ChannelApplicationSocket extends ApiClass {
  // /**
  //  * Get a Application Socket by ID
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Action({
  //   method: 'GET',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/sockets/:socket_uuid',
  //   validator: application[ACTIONS.GET_APPLICATION_SOCKET]
  // })
  // get(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * List Application's Sockets
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Action({
  //   method: 'GET',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/sockets',
  //   validator: application[ACTIONS.LIST_APPLICATION_SOCKETS]
  // })
  // list(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Search Application's Sockets
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Action({
  //   method: 'GET',
  //   route: 'channels/:channel_uuid/search/applications/:application_uuid/sockets',
  //   validator: application[ACTIONS.LIST_APPLICATION_SOCKETS]
  // })
  // search(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  //
  // /**
  //  * Create a Application's Socket
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Command({
  //   method: 'POST',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/sockets',
  //   // validator: application[COMMANDS.CREATE_APPLICATION_SOCKET]
  // })
  // create(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Update a Application's Socket
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Command({
  //   method: 'PUT',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/sockets/:socket_uuid',
  //   validator: application[COMMANDS.UPDATE_APPLICATION_SOCKET]
  // })
  // update(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Publish Application's Socket
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Command({
  //   method: 'PUT',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/:sockets/:socket_uuid/publish',
  //   validator: application[COMMANDS.PUBLISH_APPLICATION]
  // })
  // publish(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Unpublish Application's Socket
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // // TODO VALIDATORS
  // @Command({
  //   method: 'PUT',
  //   route: 'channels/:channel_uuid/applications/:application_uuid/sockets/:socket_uuid/unpublish',
  //   validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  // })
  // unpublish(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
}
export class ChannelApplicationTransformer extends ApiClass {
  /**
   * Get a Application Transformer by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/transformers/:transformer_uuid',
    validator: application[ACTIONS.GET_APPLICATION_TRANSFORMER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's Transformers
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/transformers',
    validator: application[ACTIONS.LIST_APPLICATION_TRANSFORMERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Application's Transformers
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications/:application_uuid/transformers',
    validator: application[ACTIONS.LIST_APPLICATION_TRANSFORMERS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application's Transformer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/transformers',
    // validator: application[COMMANDS.CREATE_APPLICATION_TRANSFORMER]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application's Transformer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/transformers/:transformer_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION_TRANSFORMER]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish Application's Transformer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/:transformers/:transformer_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish Application's Transformer
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/transformers/:transformer_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
export class ChannelApplicationWebhook extends ApiClass {
  /**
   * Get a Application Webhook by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/webhooks/:webhook_uuid',
    validator: application[ACTIONS.GET_APPLICATION_WEBHOOK]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's Webhooks
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/webhooks',
    validator: application[ACTIONS.LIST_APPLICATION_WEBHOOKS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Application's Webhooks
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/applications/:application_uuid/webhooks',
    validator: application[ACTIONS.LIST_APPLICATION_WEBHOOKS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Create a Application's Webhook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/webhooks',
    // validator: application[COMMANDS.CREATE_APPLICATION_WEBHOOK]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application's Webhook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/webhooks/:webhook_uuid',
    validator: application[COMMANDS.UPDATE_APPLICATION_WEBHOOK]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish Application's Webhook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/:webhooks/:webhook_uuid/publish',
    validator: application[COMMANDS.PUBLISH_APPLICATION]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish Application's Webhook
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATORS
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/applications/:application_uuid/webhooks/:webhook_uuid/unpublish',
    validator: application[COMMANDS.UNPUBLISH_APPLICATION]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelApplicationEvent extends ApiClass {
  /**
   * List Application's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/events',
    validator: application[ACTIONS.LIST_APPLICATION_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Application's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/applications/:application_uuid/events/:event_uuid',
    // validator: application[ACTIONS.GET_APPLICATION_EVENT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Application's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/applications/:application_uuid/events',
    // validator: application[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
