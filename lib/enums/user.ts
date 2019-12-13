export const USER_COMMANDS = {
  'START_SESSION': 'start.channel.session',
  'END_SESSION': 'end.channel.session',

  'REGISTER_USER': 'register.channel.user',
  'CREATE_USER': 'create.channel.user',
  'UPDATE_USER': 'update.channel.user',

  'UPLOAD_USERS': 'upload.channel.user',
  'PROCESS_UPLOADED_USERS': 'process.upload.channel.user',
  'UPLOAD_USER_METADATA': 'upload.channel.:channel_uuid.user.list.metadata',
  'PROCESS_UPLOADED_USER_METADATA': 'process.channel.:channel_uuid.user.upload.:upload_uuid.list.metadata',

  'LOGIN_USER': 'login.channel.user',
  'LOGOUT_USER': 'logout.channel.user',
  'ADD_USER': 'add.channel.user',
  'ADD_USERS': 'add.channel.user.list',
  'REMOVE_USER': 'remove.channel.user',
  'INVITE_USER': 'invite.channel.user',
  'CREATE_USER_INVITE': 'create.channel.invite.user',
  'ACCEPT_USER_INVITE': 'accept.channel.user.invite',
  'REJECT_USER_INVITE': 'reject.channel.user.invite',
  'CANCEL_USER_INVITE': 'cancel.channel.user.invite',

  'NOTIFY_USER': 'create.channel.notification.user',
  'CREATE_USER_NOTIFICATION': 'create.channel.notification.user',
  'READ_USER_NOTIFICATION': 'read.channel.user.notification',
  'UNREAD_USER_NOTIFICATION': 'unread.channel.user.notification',

  'ADD_USER_CUSTOMERS': 'add.channel.user.customer.list',
  'SET_USER_CUSTOMER': 'set.channel.user.customer',
  'SET_USER_CUSTOMER_PRIMARY': 'set.channel.user.customer_primary',
  'ADD_USER_CARTS': 'add.channel.user.cart.list',
  'SET_USER_CART': 'set.channel.user.cart',

  'ADD_USER_CUSTOMER': 'add.channel.user.customer',
  'UPDATE_USER_CUSTOMER': 'update.channel.user.customer',
  'REMOVE_USER_CUSTOMER': 'remove.channel.user.customer',

  'ADD_USER_PASSPORT': 'add.channel.user.passport',
  'CREATE_USER_PASSPORT': 'create.channel.user.passport',
  'RESET_USER_PASSPORT': 'reset.channel.user.passport',
  'UPDATE_USER_PASSPORT': 'update.channel.user.passport',
  'REMOVE_USER_PASSPORT': 'remove.channel.user.passport',
}
export const USER_ACTIONS = {
  'GET_USER': 'channel.user.get',
  'FIND_USER': 'channel.user.get', // ALIAS
  'LIST_USERS': 'channel.user.list',
  'FIND_USERS': 'channel.user.list', // ALIAS
  'LIST_USER_EVENTS': 'channel.user.event.list',

  'GET_USER_UPLOAD': 'channel.user.upload.get',
  'LIST_USER_UPLOADS': 'channel.user.upload.list',
  'GET_USER_UPLOAD_RESULT': 'channel.user.upload_result.get',
  'LIST_USER_UPLOAD_RESULTS': 'channel.user.upload_result.list',

  'GET_USER_METADATA_UPLOAD_RESULT': 'channel.user.metadata.upload_result.get',
  'LIST_USER_METADATA_UPLOAD_RESULTS': 'channel.user.metadata.upload_result.list',
  'GET_USER_METADATA_UPLOAD': 'channel.user.metadata.upload.get',
  'LIST_USER_METADATA_UPLOADS': 'channel.user.metadata.upload.list',
}
export const USER_EVENTS = {
  'SESSION_STARTED': 'channel.:channel_uuid.session.started',
  'SESSION_ENDED': 'channel.:channel_uuid.session.ended',

  'USER_REGISTERED': 'channel.:channel_uuid.user.:user_uuid.registered',
  'USER_CREATED': 'channel.:channel_uuid.user.:user_uuid.created',
  'USER_UPDATED': 'channel.:channel_uuid.user.:user_uuid.updated',
  'USERS_UPLOADED': 'channel.:channel_uuid.user.uploaded.list',
  'USERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.user.upload.processed.list',
  'USER_LOGGED_IN': 'channel.:channel_uuid.user.:user_uuid.logged_in',
  'USER_LOGGED_OUT': 'channel.:channel_uuid.user.:user_uuid.logged_out',
  'USER_ADDED': 'channel.:channel_uuid.user.:user_uuid.added',
  'USERS_ADDED': 'channel.:channel_uuid.user.added.list',
  'USER_REMOVED': 'channel.:channel_uuid.user.:user_uuid.removed',
  'USER_CART_SET': 'channel.:channel_uuid.user.:user_uuid.cart.:cart_uuid.set',
  'USER_CUSTOMER_SET': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.set',
  'USER_CUSTOMER_PRIMARY_SET': 'channel.:channel_uuid.user.:user_uuid.customer_primary.:customer_primary_uuid.set',

  'USER_INVITED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.create',
  'USER_INVITE_ACCEPTED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.accepted',
  'USER_INVITE_REJECTED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.rejected',
  'USER_INVITE_CANCELLED': 'channel.:channel_uuid.user.:user_uuid.invite.:invite_uuid.cancelled',

  'USER_CUSTOMER_ADDED': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.added',
  'USER_CUSTOMERS_ADDED': 'channel.:channel_uuid.user.:user_uuid.customer.added.list',
  'USER_CUSTOMER_REMOVED': 'channel.:channel_uuid.user.:user_uuid.customer.:customer_uuid.removed',
  'USER_CARTS_ADDED': 'channel.:channel_uuid.user.:user_uuid.cart.added.list',

  'USER_NOTIFIED': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.created',
  'USER_NOTIFICATION_READ': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.read',
  'USER_NOTIFICATION_UNREAD': 'channel.:channel_uuid.user.:user_uuid.notification.:notification_uuid.unread',

  'USER_PASSPORT_ADDED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.added',
  'USER_PASSPORT_CREATED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.created',
  'USER_PASSPORT_RESET': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.reset',
  'USER_PASSPORTS_ADDED': 'channel.:channel_uuid.user.:user_uuid.passport.added.list',
  'USER_PASSPORT_REMOVED': 'channel.:channel_uuid.user.:user_uuid.passport.:passport_uuid.removed',
}
