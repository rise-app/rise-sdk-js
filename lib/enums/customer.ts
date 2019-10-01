export const CUSTOMER_COMMANDS = {
  'CREATE_CUSTOMER': 'create.channel.customer',
  'MERGE_CUSTOMERS': 'merge.channel.customer.list',
  'ADD_CUSTOMER': 'add.channel.customer',
  'MOVE_CUSTOMER': 'move.channel.customer',
  'BLACKLIST_CUSTOMER': 'blacklist.channel.customer',
  'UNBLACKLIST_CUSTOMER': 'unblacklist.channel.customer',
  'UPDATE_CUSTOMER': 'update.channel.customer',
  'REMOVE_CUSTOMER': 'remove.channel.customer',
  'DESTROY_CUSTOMER': 'destroy.channel.customer',
  'ADD_CUSTOMER_CUSTOMER': 'add.channel.customer.child',
  'MOVE_CUSTOMER_CUSTOMER': 'move.channel.customer.child',
  'REMOVE_CUSTOMER_CUSTOMER': 'remove.channel.customer.child',

  'SET_CUSTOMER_FEED': 'set.channel.customer.feed',

  'UPLOAD_CUSTOMERS': 'upload.channel.customer',
  'PROCESS_UPLOADED_CUSTOMERS': 'process.upload.channel.customer',

  'SET_CUSTOMER_BILLING': 'set.channel.customer.address_billing',
  'SET_CUSTOMER_SHIPPING': 'set.channel.customer.address_shipping',

  'ADD_CUSTOMER_CART': 'add.channel.customer.cart',
  'REMOVE_CUSTOMER_CART': 'remove.channel.customer.cart',

  'CREATE_CUSTOMER_USER': 'create.channel.customer.user',

  'ADD_CUSTOMER_USER': 'add.channel.customer.user',
  'UPDATE_CUSTOMER_USER': 'update.channel.customer.user',
  'ADD_CUSTOMER_USERS': 'add.channel.customer.user.list',
  'REMOVE_CUSTOMER_USER': 'remove.channel.customer.user',
  'SET_CUSTOMER_USER_PRIMARY': 'set.channel.customer.user_primary',

  'ADD_CUSTOMER_CAMPAIGN': 'add.channel.customer.campaign',
  'ADD_CUSTOMER_CAMPAIGNS': 'add.channel.customer.campaign.list',
  'REMOVE_CUSTOMER_CAMPAIGN': 'remove.channel.customer.campaign',
  'REMOVE_CUSTOMER_CAMPAIGNS': 'remove.channel.customer.campaign.list',

  'ADD_CUSTOMER_GATEWAY_ACCOUNT': 'add.channel.customer.gateway.account',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT': 'create.channel.customer.gateway.account',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNTS': 'create.channel.customer.gateway.account.list',
  'ADD_CUSTOMER_GATEWAY_ACCOUNTS': 'add.channel.customer.gateway.account.list',
  'REMOVE_CUSTOMER_GATEWAY_ACCOUNT': 'remove.channel.customer.gateway.account',

  'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'add.channel.customer.gateway.account.source',
  'ADD_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'add.channel.customer.gateway.account.source.list',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'create.channel.customer.gateway.account.source',
  'CREATE_CUSTOMER_GATEWAY_ACCOUNT_SOURCES': 'create.channel.customer.gateway.account.source.list',
  'REMOVE_CUSTOMER_GATEWAY_ACCOUNT_SOURCE': 'remove.channel.customer.gateway.account.source',

  'ADD_CUSTOMER_SUBSCRIPTION': 'add.channel.customer.subscription',
  'UPDATE_CUSTOMER_SUBSCRIPTION': 'update.channel.customer.subscription',
  'DEACTIVATE_CUSTOMER_SUBSCRIPTION': 'deactivate.channel.customer.subscription',
  'ACTIVATE_CUSTOMER_SUBSCRIPTION': 'activate.channel.customer.subscription',
  'CANCEL_CUSTOMER_SUBSCRIPTION': 'cancel.channel.customer.subscription',
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
}
export const CUSTOMER_EVENTS = {
  'CUSTOMER_CREATED': 'channel.customer.created',

  'CUSTOMERS_MERGED': 'channel.customer.merged.list',
  'CUSTOMER_ADDED': 'channel.customer.added',
  'CUSTOMER_MOVED': 'channel.customer.moved',
  'CUSTOMER_BLACKLISTED': 'channel.customer.blacklisted',
  'CUSTOMER_UNBLACKLISTED': 'channel.customer.unblacklisted',
  'CUSTOMER_UPDATED': 'channel.customer.updated',
  'CUSTOMER_REMOVED': 'channel.customer.removed',
  'CUSTOMER_DESTROYED': 'channel.customer.destroyed',
  'CUSTOMER_CUSTOMER_ADDED': 'channel.customer.child.added',
  'CUSTOMER_CUSTOMER_MOVED': 'channel.customer.child.moved',
  'CUSTOMER_CUSTOMER_REMOVED': 'channel.customer.child.removed',

  'CUSTOMERS_UPLOADED': 'channel.customer.uploaded.list',
  'CUSTOMERS_UPLOAD_PROCESSED': 'channel.customer.upload.processed.list',

  'CUSTOMER_FEED_SET': 'channel.customer.feed.set',

  'CUSTOMER_CART_ADDED': 'channel.customer.cart.added',
  'CUSTOMER_CART_REMOVED': 'channel.customer.cart.removed',

  'CUSTOMER_BILLING_SET': 'channel.customer.address_billing.set',
  'CUSTOMER_SHIPPING_SET': 'channel.customer.address_shipping.set',

  'CUSTOMER_GATEWAY_ACCOUNT_ADDED': 'channel.customer.gateway.account.added',
  'CUSTOMER_GATEWAY_ACCOUNT_CREATED': 'channel.customer.gateway.account.created',
  'CUSTOMER_GATEWAY_ACCOUNTS_CREATED': 'channel.customer.gateway.account.created.list',
  'CUSTOMER_GATEWAY_ACCOUNTS_ADDED': 'channel.customer.gateway.account.added.list',
  'CUSTOMER_GATEWAY_ACCOUNT_UPDATED': 'channel.customer.gateway.account.updated',
  'CUSTOMER_GATEWAY_ACCOUNT_REMOVED': 'channel.customer.gateway.account.removed',

  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_ADDED': 'channel.customer.gateway.account.source.added',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_ADDED': 'channel.customer.gateway.account.source.added.list',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_CREATED': 'channel.customer.gateway.account.source.created',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCES_CREATED': 'channel.customer.gateway.account.source.created.list',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_UPDATED': 'channel.customer.gateway.account.source.updated',
  'CUSTOMER_GATEWAY_ACCOUNT_SOURCE_REMOVED': 'channel.customer.gateway.account.source.removed',

  'CUSTOMER_USER_ADDED': 'channel.customer.user.added',
  'CUSTOMER_USER_CREATED': 'channel.customer.user.created',
  'CUSTOMER_USER_UPDATED': 'channel.customer.user.updated',
  'CUSTOMER_USERS_ADDED': 'channel.customer.user.added.list',
  'CUSTOMER_USER_REMOVED': 'channel.customer.user.removed',
  'CUSTOMER_USER_PRIMARY_SET': 'channel.customer.user.primary_set',

  'CUSTOMER_CAMPAIGN_ADDED': 'channel.customer.campaign.added',
  'CUSTOMER_CAMPAIGNS_ADDED': 'channel.customer.campaign.added.list',
  'CUSTOMER_CAMPAIGN_REMOVED': 'channel.customer.campaign.removed',
  'CUSTOMER_CAMPAIGNS_REMOVED': 'channel.customer.campaign.removed.list',

  'CUSTOMER_SUBSCRIPTION_ADDED': 'channel.customer.subscription.added',
  'CUSTOMER_SUBSCRIPTION_UPDATED': 'channel.customer.subscription.updated',
  'CUSTOMER_SUBSCRIPTION_DEACTIVATED': 'channel.customer.subscription.deactivated',
  'CUSTOMER_SUBSCRIPTION_ACTIVATED': 'channel.customer.subscription.activated',
  'CUSTOMER_SUBSCRIPTION_CANCELLED': 'channel.customer.subscription.cancelled',
}
