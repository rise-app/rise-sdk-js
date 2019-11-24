import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { feed } from '../../validators/feed/feed'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelFeed extends ApiClass {
    /***********************************
     * Feed
     ***********************************/

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
     * Create Feed
     * @param data
     * @param req
     * @param validated
     */
    @Command({ method: 'POST', route: '/channels/:channel_uuid/feeds', validator: feed[COMMANDS.CREATE_FEED] })
    create(data, req?, validated?) {
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




}
