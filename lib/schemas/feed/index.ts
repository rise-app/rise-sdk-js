import joi from '@hapi/joi'
import { COMMANDS, ACTIONS } from '../../enums'

export const channel_uuid = joi.string().uuid()
export const feed_uuid = joi.string().guid()
export const item_uuid = joi.string().guid()


export const feed = joi.object().keys({
  channel_uuid: channel_uuid,
  feed_uuid: feed_uuid.required(),
  // handle: joi.string().required(),
  // title: joi.string().required(),
  // published: joi.boolean()
})

export const commands = {
  [COMMANDS.CREATE_FEED]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid
    }).unknown(),
    body: joi.object().keys({
    }).unknown()
  },

  [COMMANDS.UPDATE_FEED]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid,
      feed_uuid: feed_uuid.required(),
    }).unknown(),
    body: joi.object().keys({}).unknown()
  },

  [COMMANDS.CREATE_FEED_ITEM]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid,
      feed_uuid: feed_uuid.required(),
    }).unknown(),
    body: joi.object().keys({}).unknown()
  },

  [COMMANDS.UPDATE_FEED_ITEM]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid,
      feed_uuid: feed_uuid.required(),
      item_uuid: item_uuid.required(),
    }).unknown(),
    body: joi.object().keys({}).unknown()
  },

  [COMMANDS.DESTROY_FEED_ITEM]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid,
      feed_uuid: feed_uuid.required(),
      item_uuid: item_uuid.required(),
    }).unknown(),
    body: joi.object().keys({}).unknown()
  },

  [COMMANDS.MARK_FEED_ITEM]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid,
      feed_uuid: feed_uuid.required(),
      item_uuid: item_uuid.required(),
    }).unknown(),
    body: joi.object().keys({}).unknown()
  },

}

export const actions = {

  [ACTIONS.LIST_FEEDS]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid.required()
    }).unknown()
  },

  [ACTIONS.GET_FEED]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid.required(),
      feed_uuid: feed_uuid.required(),
    }).unknown()
  },

  [ACTIONS.GET_FEED_ITEM]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid.required(),
      feed_uuid: feed_uuid.required(),
      item_uuid: item_uuid.required()
    }).unknown()
  },

  [ACTIONS.LIST_FEED_ITEMS]: {
    params: joi.object().keys({
      channel_uuid: channel_uuid.required(),
      feed_uuid: feed_uuid.required()
    }).unknown()
  },
}
