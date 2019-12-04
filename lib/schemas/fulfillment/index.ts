import joi from 'joi'
import { FULFILLMENT_COMMANDS, FULFILLMENT_ACTIONS } from '../../enums/fulfillment'

export const channel_uuid = joi.string().uuid()
export const fulfillment_uuid = joi.string().guid()
export const fulfillmentItem_uuid = joi.string().guid()


export const fulfillment = joi.object().keys({
    channel_uuid: channel_uuid,
    fulfillment_uuid: fulfillment_uuid.required(),
    // handle: joi.string().required(),
    // title: joi.string().required(),
    // published: joi.boolean()
})

export const commands = {
    [FULFILLMENT_COMMANDS.CREATE_FULFILLMENT]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
    }).unknown(),

    [FULFILLMENT_COMMANDS.UPDATE_FULFILLMENT]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
    }).unknown(),

    [FULFILLMENT_COMMANDS.CREATE_FULFILLMENT_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
    }).unknown(),

    [FULFILLMENT_COMMANDS.UPDATE_FULFILLMENT_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
        fulfillmentItem_uuid: fulfillmentItem_uuid.required(),
    }).unknown(),

    [FULFILLMENT_COMMANDS.DESTROY_FULFILLMENT_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
        fulfillmentItem_uuid: fulfillmentItem_uuid.required(),
    }).unknown(),

}

export const actions = {

    [FULFILLMENT_ACTIONS.LIST_FULFILLMENTS]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
    }).unknown(),

    [FULFILLMENT_ACTIONS.GET_FULFILLMENT]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
    }).unknown(),

    [FULFILLMENT_ACTIONS.GET_FULFILLMENT_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
        fulfillmentItem_uuid: fulfillmentItem_uuid.required()
    }).unknown(),

    [FULFILLMENT_ACTIONS.LIST_FULFILLMENT_ITEMS]: joi.object().keys({
        channel_uuid: channel_uuid,
        fulfillment_uuid: fulfillment_uuid.required(),
        fulfillmentItem_uuid: fulfillmentItem_uuid.required()
    }).unknown(),
}
