export const TASK_COMMANDS = {
  'CREATE_TASK': 'create.channel.:channel_uuid.task',
  'UPDATE_TASK': 'update.channel.:channel_uuid.task.:task_uuid',
  'DESTROY_TASK': 'destroy.channel.:channel_uuid.task.:task_uuid',
  'PUBLISH_TASK': 'publish.channel.:channel_uuid.task.:task_uuid',
  'UNPUBLISH_TASK': 'unpublish.channel.:channel_uuid.task.:task_uuid',
  'MARK_TASK': 'mark.channel.:channel_uuid.task.:task_uuid',

  'SET_TASK_FEED': 'set.channel.:channel_uuid.task.:task_uuid.feed.:feed_uuid',

  'CREATE_TASK_ITEM': 'create.channel.:channel_uuid.task.:task_uuid.item.:item_uuid',
  'UPDATE_TASK_ITEM': 'update.channel.:channel_uuid.task.:task_uuid.item.:item_uuid',
  'MARK_TASK_ITEM': 'mark.channel.:channel_uuid.task.:task_uuid.item.:item_uuid',
  'DESTROY_TASK_ITEM': 'destroy.channel.:channel_uuid.task.:task_uuid.item.:item_uuid',
}
export const TASK_ACTIONS = {
  'GET_TASK': 'channel.task.get',
  'LIST_TASKS': 'channel.task.list',
  'FIND_TASK': 'channel.task.get', // ALIAS
  'FIND_TASKS': 'channel.task.list', // ALIAS
  'GET_TASK_ITEM': 'channel.task.item.get',
  'LIST_TASK_ITEMS': 'channel.task.item.list',
  'LIST_TASK_EVENTS': 'channel.task.event.list',

  'GET_TASK_FEED': 'channel.task.feed.get',
}
export const TASK_EVENTS = {
  'TASK_CREATED': 'channel.:channel_uuid.task.:task_uuid.created',
  'TASK_UPDATED': 'channel.:channel_uuid.task.:task_uuid.updated',
  'TASK_DESTROYED': 'channel.:channel_uuid.task.:task_uuid.destroyed',
  'TASK_PUBLISHED': 'channel.:channel_uuid.task.:task_uuid.published',
  'TASK_UNPUBLISHED': 'channel.:channel_uuid.task.:task_uuid.unpublished',
  'TASK_MARKED': 'channel.:channel_uuid.task.:task_uuid.marked',

  'TASK_FEED_SET': 'channel.:channel_uuid.task.:task_uuid.feed.:feed_uuid.set',

  'TASK_ITEM_CREATED': 'channel.:channel_uuid.task.:task_uuid.item.:item_uuid.created',
  'TASK_ITEM_UPDATED': 'channel.:channel_uuid.task.:task_uuid.item.:item_uuid.updated',
  'TASK_ITEM_MARKED': 'channel.:channel_uuid.task.:task_uuid.item.:item_uuid.marked',
  'TASK_ITEM_DESTROYED': 'channel.:channel_uuid.task.:task_uuid.item.:item_uuid.destroyed',
}
