import { ApiClass } from '../../ApiClass'
import { Action, Command, Paginate } from '../../metadata'
import { application } from '../../validators/application'
import { ACTIONS, COMMANDS } from '../../enums'
import { offer } from '../../validators/offer'

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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/applications/:application_uuid', validator: application[ACTIONS.GET_APPLICATION] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List applications
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/applications', validator: application[ACTIONS.LIST_APPLICATIONS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Applications
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/applications', validator: application[ACTIONS.LIST_APPLICATIONS] })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * List All Applications from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/applications', validator: application[ACTIONS.LIST_APPLICATIONS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/descendants/search/applications', validator: application[ACTIONS.LIST_APPLICATIONS] })
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
  @Command({ method: 'POST', route: 'channels/:channel_uuid/applications', validator: application[COMMANDS.CREATE_APPLICATION] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update a Application
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'PUT', route: 'channels/:channel_uuid/applications/:application_uuid', validator: application[COMMANDS.UPDATE_APPLICATION] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
