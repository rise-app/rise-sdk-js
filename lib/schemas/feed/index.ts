import joi from 'joi'
import { CHANNEL_COMMANDS } from '../../enums'

export const channel_uuid = joi.string().uuid()
export const feed_uuid = joi.string().guid()

export const create_feed = joi.object().keys({
    channel_uuid: channel_uuid,
    feed_uuid: feed_uuid.required(),
    // handle: joi.string().required(),
    // title: joi.string().required(),
    // published: joi.boolean()
}).unknown()

export const update_feed = joi.object().keys({
    channel_uuid: channel_uuid,
    feed_uuid: feed_uuid.required(),
    // handle: joi.string().required(),
    // title: joi.string().required(),
    // published: joi.boolean()
}).unknown()

export const destroy_feed = joi.object().keys({
    channel_uuid: channel_uuid,
    feed_uuid: feed_uuid.required(),
}).unknown()

export const query = joi.object().keys({
    channel_term: joi.string(),
    channel_offset: joi.number(),
    channel_limit: joi.number(),
    channel_sort: joi.array().items(joi.array()),
    channel_where: joi.object(),

    term: joi.string(),
    offset: joi.number(),
    limit: joi.number(),
    sort: joi.array().items(joi.array()),
    where: joi.object().keys({
        channel_uuid: joi.alternatives().try(
            joi.string(),
            joi.array().items(joi.string())
        ),
        feed_uuid: joi.alternatives().try(
            joi.string(),
            joi.array().items(joi.string())
        ),
    }).unknown()
})

export const feed = joi.object().keys({
    channel_uuid: channel_uuid,
    feed_uuid: feed_uuid.required(),
    // handle: joi.string().required(),
    // title: joi.string().required(),
    // published: joi.boolean()
}).unknown()

export const commands = {
    [CHANNEL_COMMANDS.CREATE_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.UPDATE_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.DESTROY_FEED]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.CREATE_FEED_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.UPDATE_FEED_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.MARK_FEED_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
    [CHANNEL_COMMANDS.DESTROY_FEED_ITEM]: joi.object().keys({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid.required(),
    }).unknown(),
}


export {
    attributes
} from './attributes'
