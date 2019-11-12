export const CHANNEL_CHANNEL_COMMANDS = {
    'CREATE': 'create.channel',
    'UPDATE': 'update.channel.:channel_uuid',
    'PUBLISH': 'publish.channel.:channel_uuid',
    'UNPUBLISH': 'unpublish.channel.:channel_uuid',
    'CREATE_CHANNEL': 'create.channel.:parent_uuid.child',
    'ADD_CHANNEL': 'add.channel.:parent_uuid.child.:channel_uuid',
    'MOVE_CHANNEL': 'move.channel.:parent_uuid.child.:channel_uuid',
    'REMOVE_CHANNEL': 'remove.channel.:parent_uuid.child.:channel_uuid',

    'UPLOAD_CHANNELS': 'upload.list.channel',
    'PROCESS_UPLOADED_CHANNELS': 'process.upload.:upload_uuid.list.channel',

    'SET_CHANNEL_CUSTOMER_PRIMARY': 'set.channel.:channel_uuid.customer_primary.:customer_primary_uuid',
    'SET_CHANNEL_VENDOR_PRIMARY': 'set.channel.:channel_uuid.vendor_primary.:vendor_primary_uuid',
    'SET_CHANNEL_GATEWAY_PRIMARY': 'set.channel.:channel_uuid.gateway_primary.:gateway_primary_uuid',
    'SET_CHANNEL_FULFILLMENT_SERVICE_PRIMARY': 'set.channel.:channel_uuid.fulfillment_service_primary.:fulfillment_service_primary_uuid',
    'SET_CHANNEL_FEED_PRIMARY': 'set.channel.:channel_uuid.feed_primary.:feed_primary_uuid',
    'SET_CHANNEL_NEXUS': 'set.channel.:channel_uuid.address_nexus',
    'SET_CHANNEL_THEME': 'set.channel.:channel_uuid.theme',
    'SET_CHANNEL_TAM_PRIMARY': 'set.channel.:channel_uuid.tam_primary.:tam_primary_uuid',

    'ADD_TAM': 'add.channel.:channel_uuid.tam.:user_uuid',
    'UPDATE_TAM': 'update.channel.:channel_uuid.tam.:user_uuid',
    'REMOVE_TAM': 'remove.channel.:channel_uuid.tam.:user_uuid',

    'ADD_RULES_SHIPPING': 'add.channel.:channel_uuid.rules_shipping',
    'UPDATE_RULES_SHIPPING': 'update.channel.:channel_uuid.rules_shipping',
    'REMOVE_RULES_SHIPPING': 'remove.channel.:channel_uuid.rules_shipping',

    'ADD_RULES_TAXES': 'add.channel.:channel_uuid.rules_taxes',
    'UPDATE_RULES_TAXES': 'update.channel.:channel_uuid.rules_taxes',
    'REMOVE_RULES_TAXES': 'remove.channel.:channel_uuid.rules_taxes'
}
export const CHANNEL_CHANNEL_EVENTS = {
    'CREATED': 'channel.:channel_uuid.created',
    'UPDATED': 'channel.:channel_uuid.updated',

    'CHANNEL_CREATED': 'channel.:parent_uuid.child.:channel_uuid.created',
    'CHANNEL_ADDED': 'channel.:parent_uuid.child.:channel_uuid.added',
    'CHANNEL_MOVED': 'channel.:parent_uuid.child.:channel_uuid.moved',
    'CHANNEL_REMOVED': 'channel.:parent_uuid.child.:channel_uuid.removed',

    'PUBLISHED': 'channel.:channel_uuid.published',
    'UNPUBLISHED': 'channel.:channel_uuid.unpublished',

    'CHANNEL_CUSTOMER_PRIMARY_SET': 'channel.:channel_uuid.customer_primary.:customer_primary_uuid.set',
    'CHANNEL_VENDOR_PRIMARY_SET': 'channel.:channel_uuid.vendor_primary.:vendor_primary_uuid.set',
    'CHANNEL_GATEWAY_PRIMARY_SET': 'channel.:channel_uuid.gateway_primary.:gateway_primary_uuid.set',
    'CHANNEL_FULFILLMENT_SERVICE_PRIMARY_SET': 'channel.:channel_uuid.fulfillment_service_primary.:fulfillment_service_primary_uuid.set',
    'CHANNEL_FEED_PRIMARY_SET': 'channel.:channel_uuid.feed_primary.:feed_primary_uuid.set',
    'CHANNEL_NEXUS_SET': 'channel.:channel_uuid.nexus.set',
    'CHANNEL_THEME_SET': 'channel.:channel_uuid.theme_primary.set',
    'CHANNEL_TAM_PRIMARY_SET': 'channel.:channel_uuid.tam_primary.:tam_primary_uuid.set',

    'CHANNELS_UPLOADED': 'channel.uploaded.list',
    'CHANNELS_UPLOAD_PROCESSED': 'channel.upload.processed.list',


    'TAM_ADDED': 'channel.:channel_uuid.tam.:user_uuid.added',
    'TAM_UPDATED': 'channel.:channel_uuid.tam.:user_uuid.updated',
    'TAM_REMOVED': 'channel.:channel_uuid.tam.:user_uuid.removed',

    'RULES_TAXES_ADDED': 'channel.:channel_uuid.rules_taxes.added',
    'RULES_TAXES_UPDATED': 'channel.:channel_uuid.rules_taxes.updated',
    'RULES_TAXES_REMOVED': 'channel.:channel_uuid.rules_taxes.removed',

    'RULES_SHIPPING_ADDED': 'channel.:channel_uuid.rules_shipping.added',
    'RULES_SHIPPING_UPDATED': 'channel.:channel_uuid.rules_shipping.updated',
    'RULES_SHIPPING_REMOVED': 'channel.:channel_uuid.rules_shipping.removed'

}
export const CHANNEL_CHANNEL_ACTIONS = {

    'GET': 'channel.get',
    'GET_PARENT': 'channel.parent.get',
    'LIST': 'channel.list',
    'LIST_CHILDREN': 'channel.children.list',
    'LIST_SIBLINGS': 'channel.siblings.list',
    'LIST_DESCENDANTS': 'channel.descendant.list',
    'LIST_ANCESTORS': 'channel.ancestor.list',

    'GET_CUSTOMER_PRIMARY': 'channel.customer_primary.get',
    'GET_VENDOR_PRIMARY': 'channel.vendor_primary.get',
    'GET_GATEWAY_PRIMARY': 'channel.gateway_primary.get',
    'GET_FULFILLMENT_SERVICE_PRIMARY': 'channel.fulfillment_service_primary.get',
    'GET_NEXUS': 'channel.address_nexus.get',
    'GET_THEME': 'channel.theme.get',
    'LIST_THEMES': 'channel.theme.list',
    'GET_TAM_PRIMARY': 'channel.tam_primary.get',
    'GET_TAM': 'channel.tam.get',
    'LIST_TAMS': 'channel.tam.list',
    'GET_TAM_EVENT': 'channel.tam.event.get',
    'LIST_TAM_EVENTS': 'channel.tam.event.list',

    'GET_RULES_SHIPPING': 'channel.rules_shipping.get',
    'LIST_RULES_SHIPPING': 'channel.rules_shipping.list',
    'GET_RULES_SHIPPING_EVENT': 'channel.rules_shipping.event.get',
    'LIST_RULES_SHIPPING_EVENTS': 'channel.rules_shipping.event.list',

    'GET_RULES_TAXES': 'channel.rules_taxes.get',
    'LIST_RULES_TAXES': 'channel.rules_taxes.list',
    'GET_RULES_TAXES_EVENT': 'channel.rules_taxes.event.get',
    'LIST_RULES_TAXES_EVENTS': 'channel.rules_taxes.event.list',

    'GET_FEED_PRIMARY': 'channel.feed_primary.get',
}