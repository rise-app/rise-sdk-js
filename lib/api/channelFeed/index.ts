import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { feed } from '../../validators/feed/feed'
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
    @Action({ method: 'GET', route: '/channels/feeds', validator: feed[ACTIONS.LIST_FEEDS] })
    list(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * List Channel Feeds
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/feeds', validator: feed[ACTIONS.LIST_FEEDS] })
    listChannel(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * List Channel Descedant Feeds
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/descendants/feeds', validator: feed[ACTIONS.LIST_FEEDS] })
    listChannelDescendant(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Search Channel Feeds
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/search/feeds', validator: feed[ACTIONS.LIST_FEEDS] })
    searchChannel(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    // /**
    //  * Get Feed Primary
    //  * @param data
    //  * @param req
    //  * @param validated
    //  */
    // @Action({ method: 'GET', route: '/channels/:channel_uuid/feed_primary', validator: feed[ACTIONS.GET_FEED_PRIMARY] })
    // getFeedPrimary(data, req?, validated?) {
    //     return this.request(req, data, validated)
    // }


    /**
     * Get Feed
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/feeds/:feed_uuid', validator: feed[ACTIONS.GET_FEED] })
    get(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    // Commmands

    /**
     * Update Feed
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'PUT', route: '/channels/:channel_uuid/feeds/:feed_uuid', validator: feed[COMMANDS.UPDATE_FEED] })
    update(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Create Feed
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'POST', route: '/channels/:channel_uuid/feeds', validator: feed[COMMANDS.CREATE_FEED] })
    create(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    // /**
    //  * Set Channel Feed Primary
    //  * @param data
    //  * @param req
    //  * @param validated
    //  */
    // @Command({ method: 'PUT', route: '/channels/:channel_uuid/feed_primary', validator: feed[COMMANDS.SET_CHANNEL_FEED_PRIMARY] })
    // setFeedPrimary(data, req?, validated?) {
    //     return this.request(req, data, validated)
    // }


    /***********************************
     * Feed Item
     ***********************************/

    //Actions

    /**
     * List Feed Items
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/feeds/:feed_uuid/items', validator: feed[ACTIONS.LIST_FEED_ITEMS] })
    listFeedItems(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Get Feed Items
     * @param data
     * @param req
     * @param validated
     */
    @Action({ method: 'GET', route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid', validator: feed[ACTIONS.GET_FEED_ITEM] })
    getFeeditem(data, req?, validated?) {
        return this.request(req, data, validated)
    }




    //Commands

    /**
     * Create Feed Item
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'POST', route: '/channels/:channel_uuid/feeds/:feed_uuid/items', validator: feed[COMMANDS.CREATE_FEED_ITEM] })
    createFeeditem(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Update Feed Item
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'POST', route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid', validator: feed[COMMANDS.UPDATE_FEED_ITEM] })
    updateFeeditem(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Delete Feed Item
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'DELETE', route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid', validator: feed[COMMANDS.DESTROY_FEED_ITEM] })
    deleteFeedItem(data, req?, validated?) {
        return this.request(req, data, validated)
    }

    /**
     * Mark Feed Item
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'PUT', route: '/channels/:channel_uuid/feeds/:feed_uuid/items/:item_uuid/mark', validator: feed[COMMANDS.MARK_FEED_ITEM] })
    markFeedItem(data, req?, validated?) {
        return this.request(req, data, validated)
    }



}
