import { Utils } from '../../Utils'
import { feed as feedSchema } from '../../schemas/feed'
import { COMMANDS, ACTIONS } from '../../enums'

export const feed = {

    /***********************************
     * Feed
     ***********************************/

    // Actions

    /**
     * List all Feeds
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.LIST_FEEDS]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.LIST_FEEDS].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.LIST_FEEDS].body),
    },

    /**
     * Get Feed Primary
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.GET_FEED_PRIMARY]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.GET_FEED_PRIMARY].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.GET_FEED_PRIMARY].body),
    },

    /**
     * Get Feed
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.GET_FEED]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.GET_FEED].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.GET_FEED].body),
    },



    // Commands

    /**
     * Create Feed
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.CREATE_FEED]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.CREATE_FEED].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.CREATE_FEED].body),
    },

    /**
     * Set Feed Primary
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.SET_CHANNEL_FEED_PRIMARY]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.SET_CHANNEL_FEED_PRIMARY].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.SET_CHANNEL_FEED_PRIMARY].body),
    },


    /**
     * Update Feed
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FEED]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED].body),
    },




    /***********************************
     * Feed Item
     ***********************************/

    // Commands

    /**
     * Create Feed Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FEED_ITEM]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED_ITEM].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED_ITEM].body),
    },

    /**
     * Update Feed Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FEED_ITEM]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED_ITEM].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.UPDATE_FEED_ITEM].body),
    },


    /**
     * Destroy Feed Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.DESTROY_FEED_ITEM]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.DESTROY_FEED_ITEM].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.DESTROY_FEED_ITEM].body),
    },

    /**
     * Mark Feed Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.MARK_FEED_ITEM]: {
        params: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.DESTROY_FEED_ITEM].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[COMMANDS.DESTROY_FEED_ITEM].body),
    },

    // Actions

    /**
     * Get Feed Item
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.GET_FEED_ITEM]: {
        params: (data) => Utils.joiPromise(data, feedSchema.actions[ACTIONS.GET_FEED_ITEM].params),
        body: (data) => Utils.joiPromise(data, feedSchema.commands[ACTIONS.GET_FEED_ITEM].body),
    },

    /**
     * List Feed Items
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.LIST_FEED_ITEMS]: {
        params: (data) => Utils.joiPromise(data, feedSchema.actions[ACTIONS.LIST_FEED_ITEMS].params),
        body: (data) => Utils.joiPromise(data, feedSchema.actions[ACTIONS.LIST_FEED_ITEMS].body),
    },






}
