import { Utils } from '../../Utils'
import { fulfillment as fulfillmentSchema } from '../../schemas/fulfillment'
import { COMMANDS, ACTIONS } from '../../enums'

export const fulfillment = {

    /**********************************************************
     * Fulfillment Actions
     **********************************************************/

    /**
     * List all Fulfillments
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.LIST_FULFILLMENTS]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[ACTIONS.LIST_FULFILLMENTS].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[ACTIONS.LIST_FULFILLMENTS].body),
    },

    /**
     * Get Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.GET_FULFILLMENT]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[ACTIONS.GET_FULFILLMENT].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[ACTIONS.GET_FULFILLMENT].body),
    },



    // Commands

    /**
     * Create Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.CREATE_FULFILLMENT]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.CREATE_FULFILLMENT].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.CREATE_FULFILLMENT].body),
    },

    /**
     * Update Fulfillment
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FULFILLMENT]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT].body),
    },




    /***********************************
     * Fulfillment Item
     ***********************************/

    // Commands

    /**
     * Create Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FULFILLMENT_ITEM]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT_ITEM].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT_ITEM].body),
    },

    /**
     * Update Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.UPDATE_FULFILLMENT_ITEM]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT_ITEM].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.UPDATE_FULFILLMENT_ITEM].body),
    },


    /**
     * Destroy Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    [COMMANDS.DESTROY_FULFILLMENT_ITEM]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.DESTROY_FULFILLMENT_ITEM].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.commands[COMMANDS.DESTROY_FULFILLMENT_ITEM].body),
    },


    /**********************************************************
     * Actions
     **********************************************************/

    /**
     * Get Fulfillment Item
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.GET_FULFILLMENT_ITEM]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.actions[ACTIONS.GET_FULFILLMENT_ITEM].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.actions[ACTIONS.GET_FULFILLMENT_ITEM].body),
    },

    /**
     * List Fulfillment Items
     * @param data
     * @param req
     * @param validated
     */
    [ACTIONS.LIST_FULFILLMENT_ITEMS]: {
        params: (data) => Utils.joiPromise(data, fulfillmentSchema.actions[ACTIONS.LIST_FULFILLMENT_ITEMS].params),
        body: (data) => Utils.joiPromise(data, fulfillmentSchema.actions[ACTIONS.LIST_FULFILLMENT_ITEMS].body),
    },






}
