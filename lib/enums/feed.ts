
export const CHANNEL_FEED_COMMANDS = {
    'CREATE_FEED': 'create.channel.:channel_uuid.feed',
    'UPDATE_FEED': 'update.channel.:channel_uuid.feed.:feed_uuid',
    'DESTROY_FEED': 'destroy.channel.:channel_uuid.feed.:feed_uuid',

    'CREATE_FEED_ITEM': 'create.channel.:channel_uuid.feed.:feed_uuid.item',
    'UPDATE_FEED_ITEM': 'update.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',
    'MARK_FEED_ITEM': 'mark.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',
    'DESTROY_FEED_ITEM': 'destroy.channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid',

}

export const CHANNEL_FEED_EVENTS = {
    'FEED_CREATED': 'channel.:channel_uuid.feed.:feed_uuid.created',
    'FEED_UPDATED': 'channel.:channel_uuid.feed.:feed_uuid.updated',
    'FEED_DESTROYED': 'channel.:channel_uuid.feed.:feed_uuid.destroyed',

    'FEED_ITEM_CREATED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.created',
    'FEED_ITEM_UPDATED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.updated',
    'FEED_ITEM_MARKED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.marked',
    'FEED_ITEM_DESTROYED': 'channel.:channel_uuid.feed.:feed_uuid.item.:item_uuid.destroyed',

}

export const CHANNEL_FEED_ACTIONS = {
    'GET_FEED': 'channel.feed.get',
    'LIST_FEEDS': 'channel.feed.list',
    'GET_FEED_ITEM': 'channel.feed.item.get',
    'LIST_FEED_ITEMS': 'channel.feed.item.list',
    'LIST_FEED_EVENTS': 'channel.feed.event.list'

}


