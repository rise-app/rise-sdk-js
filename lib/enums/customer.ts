export const CUSTOMER_COMMANDS = {
  'CREATE_CUSTOMER': 'create.channel.:channel_uuid.customer',
  'MERGE_CUSTOMERS': 'merge.channel.:channel_uuid.list.customer',
  'ADD_CUSTOMER': 'add.channel.:channel_uuid.customer.:customer_uuid',
  'MOVE_CUSTOMER': 'move.channel.:channel_uuid.customer.:customer_uuid',
  'BLACKLIST_CUSTOMER': 'blacklist.channel.:channel_uuid.customer.:customer_uuid',
  'UNBLACKLIST_CUSTOMER': 'unblacklist.channel.:channel_uuid.customer.:customer_uuid',
  'UPDATE_CUSTOMER': 'update.channel.:channel_uuid.customer.:customer_uuid',
  'REMOVE_CUSTOMER': 'remove.channel.:channel_uuid.customer.:customer_uuid',
  'DESTROY_CUSTOMER': 'destroy.channel.:channel_uuid.customer.:customer_uuid',
  'ADD_CUSTOMER_CHILD': 'add.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
  'MOVE_CUSTOMER_CHILD': 'move.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
  'REMOVE_CUSTOMER_CHILD': 'remove.channel.:channel_uuid.customer.:parent_uuid.child.:customer_uuid',
  'SET_CUSTOMER_BILLING': 'set.channel.:channel_uuid.customer.:customer_uuid.address_billing',
  'SET_CUSTOMER_SHIPPING': 'set.channel.:channel_uuid.customer.:customer_uuid.address_shipping',
  'SET_CUSTOMER_FEED': 'set.channel.:channel_uuid.customer.:customer_uuid.feed.:feed_uuid',

  'UPLOAD_CUSTOMERS': 'upload.channel.:channel_uuid.list.customer',
  'PROCESS_UPLOADED_CUSTOMERS': 'process.channel.:channel_uuid.upload.:upload_uuid.list.customer',
  'UPLOAD_CUSTOMER_METADATA': 'upload.channel.:channel_uuid.customer.list.metadata',
  'PROCESS_UPLOADED_CUSTOMER_METADATA': 'process.channel.:channel_uuid.customer.upload.:upload_uuid.list.metadata',

  'ADD_CUSTOMER_CART': 'add.channel.:channel_uuid.customer.:customer_uuid.cart',
  'REMOVE_CUSTOMER_CART': 'remove.channel.:channel_uuid.customer.:customer_uuid.cart',

  'CREATE_CUSTOMER_USER': 'create.channel.:channel_uuid.customer.:customer_uuid.user',
  'ADD_CUSTOMER_USER': 'add.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
  'UPDATE_CUSTOMER_USER': 'update.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
  'ADD_CUSTOMER_USERS': 'add.channel.:channel_uuid.customer.:customer_uuid.list.user',
  'REMOVE_CUSTOMER_USER': 'remove.channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid',
  'SET_CUSTOMER_USER_PRIMARY': 'set.channel.:channel_uuid.customer.:customer_uuid.user_primary.:user_primary_uuid',

  'ADD_CUSTOMER_CAMPAIGN': 'add.channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid',
  'ADD_CUSTOMER_CAMPAIGNS': 'add.channel.:channel_uuid.customer.:customer_uuid.list.campaign',
  'REMOVE_CUSTOMER_CAMPAIGN': 'remove.channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid',
  'REMOVE_CUSTOMER_CAMPAIGNS': 'remove.channel.:channel_uuid.customer.:customer_uuid.list.campaign',

  'ADD_CUSTOMER_GATEWAY_ACCOUNT': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNTS': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.list.account',
  'ADD_CUSTOMER_GATEWAY_ACCOUNTS': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.list.account',
  'REMOVE_CUSTOMER_GATEWAY_ACCOUNT': 'remove.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid',

  'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',
  'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'add.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'create.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.list.source',
  'REMOVE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'remove.channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid',

  'ADD_CUSTOMER_SUBSCRIPTION': 'add.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
  'UPDATE_CUSTOMER_SUBSCRIPTION': 'update.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
  'DEACTIVATE_CUSTOMER_SUBSCRIPTION': 'deactivate.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
  'ACTIVATE_CUSTOMER_SUBSCRIPTION': 'activate.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
  'CANCEL_CUSTOMER_SUBSCRIPTION': 'cancel.channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid',
}
export const CUSTOMER_ACTIONS = {
  'GET_CUSTOMER': 'channel.customer.get',
  'FIND_CUSTOMER': 'channel.customer.get', // ALIAS
  'GET_CUSTOMER_BILLING': 'channel.customer.address_billing.get',
  'GET_CUSTOMER_SHIPPING': 'channel.customer.address_shipping.get',
  'GET_CUSTOMER_PARENT': 'channel.customer.parent.get',
  'LIST_CUSTOMERS': 'channel.customer.list',
  'FIND_CUSTOMERS': 'channel.customer.list', // ALIAS

  'GET_PUBLIC_CUSTOMER': 'channel.public.customer.get',
  'FIND_PUBLIC_CUSTOMER': 'channel.public.customer.get', // ALIAS

  'LIST_PUBLIC_CUSTOMERS': 'channel.public.customer.list',
  'FIND_PUBLIC_CUSTOMERS': 'channel.public.customer.list', // ALIAS

  'LIST_CUSTOMER_CHILDREN': 'channel.customer.children.list',
  'LIST_CUSTOMER_SIBLINGS': 'channel.customer.siblings.list',
  'LIST_CUSTOMER_DESCENDANTS': 'channel.customer.descendant.list',
  'LIST_CUSTOMER_ANCESTORS': 'channel.customer.ancestor.list',
  'LIST_CUSTOMER_ADDRESSES': 'channel.customer.address.list',

  'GET_CUSTOMER_CART': 'channel.customer.cart.get',
  'LIST_CUSTOMER_CARTS': 'channel.customer.cart.list',

  'GET_CUSTOMER_ORDER': 'channel.customer.order.get',
  'LIST_CUSTOMER_ORDERS': 'channel.customer.order.list',

  'GET_CUSTOMER_GATEWAY_ACCOUNT': 'channel.customer.gateway.account.get',
  'LIST_CUSTOMER_GATEWAY_ACCOUNTS': 'channel.customer.gateway.account.list',
  'GET_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'channel.customer.gateway.account.source.get',
  'LIST_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'channel.customer.gateway.account.source.list',

  'GET_CUSTOMER_SUBSCRIPTION': 'channel.customer.subscription.get',
  'LIST_CUSTOMER_SUBSCRIPTIONS': 'channel.customer.subscription.list',

  'GET_CUSTOMER_USER': 'channel.customer.user.get',
  'LIST_CUSTOMER_USERS': 'channel.customer.user.list',

  'LIST_CUSTOMER_EVENTS': 'channel.customer.event.list',

  'GET_CUSTOMER_FEED': 'channel.customer.feed.get',

  'GET_CUSTOMER_CAMPAIGN': 'channel.customer.campaign.get',
  'LIST_CUSTOMER_CAMPAIGNS': 'channel.customer.campaign.list',

  'GET_CUSTOMER_UPLOAD': 'channel.customer.upload.get',
  'LIST_CUSTOMER_UPLOADS': 'channel.customer.upload.list',
  'GET_CUSTOMER_UPLOAD_RESULT': 'channel.customer.upload_result.get',
  'LIST_CUSTOMER_UPLOAD_RESULTS': 'channel.customer.upload_result.list',

  'GET_CUSTOMER_METADATA_UPLOAD_RESULT': 'channel.customer.metadata.upload_result.get',
  'LIST_CUSTOMER_METADATA_UPLOAD_RESULTS': 'channel.customer.metadata.upload_result.list',
  'GET_CUSTOMER_METADATA_UPLOAD': 'channel.customer.metadata.upload.get',
  'LIST_CUSTOMER_METADATA_UPLOADS': 'channel.customer.metadata.upload.list',
}
export const CUSTOMER_EVENTS = {
  'CUSTOMER_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.created',
  'CUSTOMERS_MERGED': 'channel.:channel_uuid.customer.merged.list',
  'CUSTOMER_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.added',
  'CUSTOMER_MOVED': 'channel.:channel_uuid.customer.:customer_uuid.moved',
  'CUSTOMER_BLACKLISTED': 'channel.:channel_uuid.customer.:customer_uuid.blacklisted',
  'CUSTOMER_UNBLACKLISTED': 'channel.:channel_uuid.customer.:customer_uuid.unblacklisted',
  'CUSTOMER_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.updated',
  'CUSTOMER_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.removed',
  'CUSTOMER_DESTROYED': 'channel.:channel_uuid.customer.:customer_uuid.destroyed',
  'CUSTOMER_CHILD_ADDED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.added',
  'CUSTOMER_CHILD_MOVED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.moved',
  'CUSTOMER_CHILD_REMOVED': 'channel.:channel_uuid.customer.:parent_uuid.child.:channel_uuid.removed',
  'CUSTOMER_BILLING_SET': 'channel.:channel_uuid.customer.:customer_uuid.address_billing.set',
  'CUSTOMER_SHIPPING_SET': 'channel.:channel_uuid.customer.:customer_uuid.address_shipping.set',
  'CUSTOMER_FEED_SET': 'channel.:channel_uuid.customer.:customer_uuid.feed.:feed_uuid.set',

  'CUSTOMERS_UPLOADED': 'channel.:channel_uuid.customer.upload.:upload_uuid.list',
  'CUSTOMERS_UPLOAD_PROCESSED': 'channel.:channel_uuid.customer.:customer_uuid.upload.:upload_uuid.processed.list',

  'CUSTOMER_CAMPAIGN_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid.added',
  'CUSTOMER_CAMPAIGNS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.added.list',
  'CUSTOMER_CAMPAIGN_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.:collection_uuid.removed',
  'CUSTOMER_CAMPAIGNS_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.campaign.removed.list',

  'CUSTOMER_CART_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.cart.:cart_uuid.added',
  'CUSTOMER_CART_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.cart.:cart_uuid.removed',

  'CUSTOMER_GATEWAY_ACCOUNT_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.added',
  'CUSTOMER_GATEWAY_ACCOUNT_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.created',
  'CUSTOMER_GATEWAY_ACCOUNTS_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.created.list',
  'CUSTOMER_GATEWAY_ACCOUNTS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.added.list',
  'CUSTOMER_GATEWAY_ACCOUNT_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.updated',
  'CUSTOMER_GATEWAY_ACCOUNT_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.removed',

  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.added',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.added.list',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.created',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.created.list',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.updated',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.gateway.:gateway_uuid.account.:account_uuid.source.:source_uuid.removed',

  'CUSTOMER_SUBSCRIPTION_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.added',
  'CUSTOMER_SUBSCRIPTION_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.updated',
  'CUSTOMER_SUBSCRIPTION_DEACTIVATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.deactivated',
  'CUSTOMER_SUBSCRIPTION_ACTIVATED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.activated',
  'CUSTOMER_SUBSCRIPTION_CANCELLED': 'channel.:channel_uuid.customer.:customer_uuid.subscription.:subscription_uuid.cancelled',

  'CUSTOMER_USER_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.added',
  'CUSTOMER_USER_CREATED': 'channel.:channel_uuid.customer.:customer_uuid.user.created',
  'CUSTOMER_USER_UPDATED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.updated',
  'CUSTOMER_USERS_ADDED': 'channel.:channel_uuid.customer.:customer_uuid.user.added.list',
  'CUSTOMER_USER_REMOVED': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_uuid.removed',
  'CUSTOMER_USER_PRIMARY_SET': 'channel.:channel_uuid.customer.:customer_uuid.user.:user_primary_uuid.primary_set',
}
