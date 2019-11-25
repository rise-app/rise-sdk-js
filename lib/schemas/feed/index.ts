import joi from 'joi'
import { FEED_COMMANDS, FEED_ACTIONS } from '../../enums/feed'

export const channel_uuid = joi.string().uuid()
export const feed_uuid = joi.string().guid()



export const feed = joi.object().keys({
    channel_uuid: channel_uuid,
    feed_uuid: feed_uuid.required(),
    // handle: joi.string().required(),
    // title: joi.string().required(),
    // published: joi.boolean()
})

export const commands = {
    [FEED_COMMANDS.CREATE_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [FEED_COMMANDS.UPDATE_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),

}

export const actions = {

    [FEED_ACTIONS.LIST_FEEDS]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [FEED_ACTIONS.GET_FEED_PRIMARY]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [FEED_ACTIONS.GET_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
}