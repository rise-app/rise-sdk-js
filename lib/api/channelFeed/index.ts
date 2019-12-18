import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { feed } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelFeed extends ApiClass {
  /***********************************
   * Feed
   ***********************************/


  //Actions

  /**
   * List All Feeds
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/feeds',
    validator: feed[ACTIONS.LIST_FEEDS]
  })
  listAll(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Feeds
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/feeds',
    validator: feed[ACTIONS.LIST_FEEDS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Channel Descedant Feeds
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/feeds',
    validator: feed[ACTIONS.LIST_FEEDS]
  })
  listChannelDescendant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Channel Feeds
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/feeds',
    validator: feed[ACTIONS.LIST_FEEDS]
  })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Get Feed
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/feeds/:feed_uuid',
    validator: feed[ACTIONS.GET_FEED]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // Commmands

  /**
   * Create Feed
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/feeds',
    validator: feed[COMMANDS.CREATE_FEED]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Feed
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/feeds/:feed_uuid',
    validator: feed[COMMANDS.UPDATE_FEED]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}

export class ChannelFeedItem extends ApiClass {
  /************************************
   * Feed Item
   ***********************************/

  //Actions

  /**
   * List Feed Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items',
    validator: feed[ACTIONS.LIST_FEED_ITEMS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Feed Items
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
    validator: feed[ACTIONS.GET_FEED_ITEM]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  //Commands

  /**
   * Create Feed Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items',
    validator: feed[COMMANDS.CREATE_FEED_ITEM]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Feed Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
    validator: feed[COMMANDS.UPDATE_FEED_ITEM]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Delete Feed Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid',
    validator: feed[COMMANDS.DESTROY_FEED_ITEM]
  })
  delete(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Mark Feed Item
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid/mark',
    validator: feed[COMMANDS.MARK_FEED_ITEM]
  })
  mark(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
