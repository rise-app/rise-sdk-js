export const APPLICATION_COMMANDS = {
  'CREATE_APPLICATION': 'create.channel.:channel_uuid.application',
  'ADD_APPLICATION': 'add.channel.:channel_uuid.application.:application_uuid',
  'UPDATE_APPLICATION': 'update.channel.:channel_uuid.application.:application_uuid',
  'REMOVE_APPLICATION': 'remove.channel.:channel_uuid.application.:application_uuid',
  'MOVE_APPLICATION': 'move.channel.:channel_uuid.application.:application_uuid',
  'DESTROY_APPLICATION': 'destroy.channel.:channel_uuid.application.:application_uuid',
  'PUBLISH_APPLICATION': 'publish.channel.:channel_uuid.application.:application_uuid',
  'UNPUBLISH_APPLICATION': 'unpublish.channel.:channel_uuid.application.:application_uuid',

  'ADD_APPLICATION_PREHOOK': 'add.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',
  'CREATE_APPLICATION_PREHOOK': 'create.channel.:channel_uuid.application.:application_uuid.prehook',
  'UPDATE_APPLICATION_PREHOOK': 'update.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',
  'REMOVE_APPLICATION_PREHOOK': 'remove.channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid',

  'ADD_APPLICATION_WEBHOOK': 'add.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',
  'CREATE_APPLICATION_WEBHOOK': 'create.channel.:channel_uuid.application.:application_uuid.webhook',
  'UPDATE_APPLICATION_WEBHOOK': 'update.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',
  'REMOVE_APPLICATION_WEBHOOK': 'remove.channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid',

  'CREATE_APPLICATION_TRANSFORMER': 'create.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
  'UPDATE_APPLICATION_TRANSFORMER': 'update.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
  'ADD_APPLICATION_TRANSFORMER': 'add.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',
  'REMOVE_APPLICATION_TRANSFORMER': 'remove.channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid',

  'ADD_APPLICATION_ENDPOINT': 'add.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
  'CREATE_APPLICATION_ENDPOINT': 'create.channel.:channel_uuid.application.:application_uuid.endpoint',
  'UPDATE_APPLICATION_ENDPOINT': 'update.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
  'REMOVE_APPLICATION_ENDPOINT': 'remove.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',
  'RUN_APPLICATION_ENDPOINT': 'run.channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid',

  'ADD_APPLICATION_KEY': 'add.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
  'CREATE_APPLICATION_KEY': 'create.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
  'UPDATE_APPLICATION_KEY': 'update.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',
  'REMOVE_APPLICATION_KEY': 'remove.channel.:channel_uuid.application.:application_uuid.key.:key_uuid',

  'UPLOAD_APPLICATIONS': 'upload.channel.:channel_uuid.list.application',
  'PROCESS_UPLOADED_APPLICATIONS': 'process.upload.channel.:channel_uuid.list.application',
}
export const APPLICATION_ACTIONS = {
  'SUBSCRIBE_APPLICATION': 'channel.application.subscribe',

  'GET_APPLICATION': 'channel.application.get',
  'LIST_APPLICATIONS': 'channel.application.list',
  'LIST_APPLICATION_EVENTS': 'channel.application.event.list',
  'GET_APPLICATION_ENDPOINT': 'channel.application.endpoint.get',
  'LIST_APPLICATION_ENDPOINTS': 'channel.application.endpoint.list',
  'GET_APPLICATION_KEY': 'channel.application.key.get',
  'LIST_APPLICATION_KEYS': 'channel.application.key.list',
  'GET_APPLICATION_PREHOOK': 'channel.application.prehook.get',
  'LIST_APPLICATION_PREHOOKS': 'channel.application.prehook.list',
  'GET_APPLICATION_WEBHOOK': 'channel.application.webhook.get',
  'LIST_APPLICATION_WEBHOOKS': 'channel.application.webhook.list',
  'GET_APPLICATION_TRANSFORMER': 'channel.application.transformer.get',
  'LIST_APPLICATION_TRANSFORMERS': 'channel.application.transformer.list',

  'GET_APPLICATION_UPLOAD': 'channel.application.upload.get',
  'LIST_APPLICATION_UPLOADS': 'channel.application.upload.list',
}
export const APPLICATION_EVENTS = {
  'APPLICATION_CREATED': 'channel.:channel_uuid.application.:application_uuid.created',
  'APPLICATION_ADDED': 'channel.:channel_uuid.application.:application_uuid.added',
  'APPLICATION_UPDATED': 'channel.:channel_uuid.application.:application_uuid.updated',
  'APPLICATION_MOVED': 'channel.:channel_uuid.application.:application_uuid.moved',
  'APPLICATION_REMOVED': 'channel.:channel_uuid.application.:application_uuid.removed',
  'APPLICATION_DESTROYED': 'channel.:channel_uuid.application.:application_uuid.destroyed',
  'APPLICATION_PUBLISHED': 'channel.:channel_uuid.application.:application_uuid.published',
  'APPLICATION_UNPUBLISHED': 'channel.:channel_uuid.application.:application_uuid.unpublished',

  'APPLICATION_PREHOOK_ADDED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.added',
  'APPLICATION_PREHOOK_CREATED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.created',
  'APPLICATION_PREHOOK_UPDATED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.updated',
  'APPLICATION_PREHOOK_REMOVED': 'channel.:channel_uuid.application.:application_uuid.prehook.:prehook_uuid.removed',

  'APPLICATION_WEBHOOK_CREATED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.created',
  'APPLICATION_WEBHOOK_UPDATED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.updated',
  'APPLICATION_WEBHOOK_ADDED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.added',
  'APPLICATION_WEBHOOK_REMOVED': 'channel.:channel_uuid.application.:application_uuid.webhook.:webhook_uuid.removed',

  'APPLICATION_TRANSFORMER_CREATED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.created',
  'APPLICATION_TRANSFORMER_UPDATED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.updated',
  'APPLICATION_TRANSFORMER_ADDED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.added',
  'APPLICATION_TRANSFORMER_REMOVED': 'channel.:channel_uuid.application.:application_uuid.transformer.:transformer_uuid.removed',

  'APPLICATION_ENDPOINT_ADDED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.added',
  'APPLICATION_ENDPOINT_REMOVED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.removed',
  'APPLICATION_ENDPOINT_CREATED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.created',
  'APPLICATION_ENDPOINT_UPDATED': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.updated',
  'APPLICATION_ENDPOINT_RAN': 'channel.:channel_uuid.application.:application_uuid.endpoint.:endpoint_uuid.ran',

  'APPLICATION_KEY_ADDED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.added',
  'APPLICATION_KEY_REMOVED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.removed',
  'APPLICATION_KEY_CREATED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.created',
  'APPLICATION_KEY_UPDATED': 'channel.:channel_uuid.application.:application_uuid.key.:key_uuid.updated',

  'APPLICATIONS_UPLOADED': 'channel.:channel_uuid.application.uploaded.list',
  'APPLICATIONS_UPLOAD_PROCESSED': 'channel.:channel_uuid.application.upload.processed.list',
}
