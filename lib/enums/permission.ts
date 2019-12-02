export const PERMISSION_COMMANDS = {
    'CREATE_PERMISSION': 'create.channel.:channel_uuid.permission',
    'CREATE_PERMISSIONS': 'create.channel.:channel_uuid.permission.list',
    'DESTROY_PERMISSION': 'destroy.channel.:channel_uuid.permission',
    'GRANT_USER_PERMISSION': 'grant.channel.:channel_uuid.permission',
    'REVOKE_USER_PERMISSION': 'revoke.channel.:channel_uuid.permission',

}
export const PERMISSION_ACTIONS = {
    'LIST_USER_PERMISSIONS': 'channel.:channel_uuid.user.permissions.list',
    'LIST_ROLE_PERMISSIONS': 'channel.:channel_uuid.role.permissions.list'
}
export const PERMISSION_EVENTS = {
    'PERMISSION_CREATED': 'channel.:channel_uuid.permission.created',
    'PERMISSIONS_CREATED': 'channel.:channel_uuid.permission.created.list',
    'PERMISSION_DESTROYED': 'channel.:channel_uuid.permission.destroyed',

    'USER_PERMISSION_GRANTED': 'channel.:channel_uuid.user.permission.granted',
    'USER_PERMISSION_REVOKED': 'channel.:channel_uuid.user.permission.revoked',

}
