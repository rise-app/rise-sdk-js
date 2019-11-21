import joi from 'joi'
const uuid = joi.string().guid()
import { COMMANDS, ACTIONS } from '../../enums'


export const permission = {
    channel_uuid: uuid,
    user_uuid: uuid,
    role_name: uuid,
}

export const actions = {
    [ACTIONS.LIST_USER_PERMISSIONS]: joi.object().keys({
        ...permission,
        channel_uuid: uuid.required(),
        user_uuid: uuid.required()
    }).unknown(),

    [ACTIONS.LIST_ROLE_PERMISSIONS]: joi.object().keys({
        ...permission,
        channel_uuid: uuid.required(),
        role_name: joi.string().required()
    }).unknown(),
}

