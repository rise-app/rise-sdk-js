export const GATEWAY_COMMANDS = {
  'CREATE_GATEWAY': 'create.channel.:channel_uuid.gateway',
  'ADD_GATEWAY': 'add.channel.:channel_uuid.gateway.:gateway_uuid',
  'UPDATE_GATEWAY': 'update.channel.:channel_uuid.gateway.:gateway_uuid',
  'DESTROY_GATEWAY': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid',

  'PUBLISH_GATEWAY': 'publish.channel.:channel_uuid.gateway.:gateway_uuid',
  'UNPUBLISH_GATEWAY': 'unpublish.channel.:channel_uuid.gateway.:gateway_uuid',
  'PUBLISH_GATEWAYS': 'publish.channel.:channel_uuid.list.gateway',
  'UNPUBLISH_GATEWAYS': 'unpublish.channel.:channel_uuid.list.gateway',

  'UPLOAD_GATEWAYS': 'upload.channel.:channel_uuid.list.gateway',
  'PROCESS_UPLOADED_GATEWAYS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.gateway',

  'CREATE_GATEWAY_ACCOUNT': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account',
  'CREATE_GATEWAY_ACCOUNTS': 'create.channel.:channel_uuid.gateway.:gateway_uuid.list.account',
  'UPDATE_GATEWAY_ACCOUNT': 'update.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid',
  'DESTROY_GATEWAY_ACCOUNT': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid',

  'UPLOAD_GATEWAY_ACCOUNTS': 'upload.channel.:channel_uuid.gateway.list.account',
  'PROCESS_UPLOADED_GATEWAY_ACCOUNTS': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.account',

  'CREATE_GATEWAY_RECEIVER': 'create.channel.:channel_uuid.gateway.:gateway_uuid.receiver',
  'UPDATE_GATEWAY_RECEIVER': 'update.channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid',
  'DESTROY_GATEWAY_RECEIVER': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid',

  'UPLOAD_GATEWAY_RECEIVERS': 'upload.channel.:channel_uuid.gateway.list.receiver',
  'PROCESS_UPLOADED_GATEWAY_RECEIVERS': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.receiver',

  'CREATE_GATEWAY_SOURCE': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source',
  'CREATE_GATEWAY_SOURCES': 'create.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
  'UPDATE_GATEWAY_SOURCE': 'update.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
  'DESTROY_GATEWAY_SOURCE': 'destroy.channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',

  'UPLOAD_GATEWAY_SOURCES': 'upload.channel.:channel_uuid.gateway.list.source',
  'PROCESS_UPLOADED_GATEWAY_SOURCES': 'process.channel.:channel_uuid.gateway.upload.:upload_uuid.list.source',
}

export const GATEWAY_ACTIONS = {
  'GET_GATEWAY': 'channel.gateway.get',
  'LIST_GATEWAYS': 'channel.gateway.list',
  'GET_PUBLIC_GATEWAY': 'channel.public.gateway.get',
  'LIST_PUBLIC_GATEWAYS': 'channel.public.gateway.list',
  'GET_GATEWAY_RECEIVER': 'channel.gateway.receiver.get',
  'LIST_GATEWAY_RECEIVERS': 'channel.gateway.receiver.list',
  'GET_GATEWAY_ACCOUNT': 'channel.gateway.account.get',
  'LIST_GATEWAY_ACCOUNTS': 'channel.gateway.account.list',
  'GET_GATEWAY_SOURCE': 'channel.gateway.account.source.get',
  'LIST_GATEWAY_SOURCES': 'channel.gateway.account.source.list',

  'LIST_GATEWAY_EVENTS': 'channel.gateway.event.list',

  'GET_GATEWAY_UPLOAD': 'channel.gateway.upload.get',
  'LIST_GATEWAY_UPLOADS': 'channel.gateway.upload.list',

  'GET_GATEWAY_FORM': 'channel.gateway.form.get',

  'LIST_GATEWAY_FORMS': 'channel.gateway.form.list',
  'LIST_PUBLIC_GATEWAY_FORMS': 'channel.public.gateway.form.list',
}

export const GATEWAY_EVENTS = {
  'GATEWAY_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.created',
  'GATEWAY_ADDED': 'channel.:channel_uuid.gateway.:gateway_uuid.added',
  'GATEWAY_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.updated',
  'GATEWAY_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.destroyed',

  'GATEWAYS_UPLOADED': 'channel.:channel_uuid.gateway.upload.:upload_uuid.list',
  'GATEWAYS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.upload.:upload_uuid.processed.list',

  'GATEWAY_PUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.published',
  'GATEWAY_UNPUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.unpublished',
  'GATEWAYS_PUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.published.list',
  'GATEWAYS_UNPUBLISHED': 'channel.:channel_uuid.gateway.:gateway_uuid.unpublished.list',

  'GATEWAY_ACCOUNT_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.created',
  'GATEWAY_ACCOUNTS_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.created.list',
  'GATEWAY_ACCOUNT_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.updated',
  'GATEWAY_ACCOUNT_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.destroyed',

  'GATEWAY_ACCOUNTS_UPLOADED': 'channel.:channel_uuid.gateway.account.upload.:upload_uuid.list',
  'GATEWAY_ACCOUNTS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.account.upload.:upload_uuid.processed.list',

  'GATEWAY_SOURCE_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.created',
  'GATEWAY_SOURCES_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.created.list',
  'GATEWAY_SOURCE_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.updated',
  'GATEWAY_SOURCE_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.destroyed',

  'GATEWAY_SOURCES_UPLOADED': 'channel.:channel_uuid.gateway.source.upload.:upload_uuid.list',
  'GATEWAY_SOURCES_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.source.upload.:upload_uuid.processed.list',

  'GATEWAY_RECEIVER_CREATED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.created',
  'GATEWAY_RECEIVER_UPDATED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.updated',
  'GATEWAY_RECEIVER_DESTROYED': 'channel.:channel_uuid.gateway.:gateway_uuid.receiver.:receiver_uuid.destroyed',

  'GATEWAY_RECEIVERS_UPLOADED': 'channel.:channel_uuid.gateway.receiver.upload.:upload_uuid.list',
  'GATEWAY_RECEIVERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.gateway.receiver.upload.:upload_uuid.processed.list',
}
