import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.SET_RECOVERY]: joi.object().keys({
    channel_uuid: uuid.required(),
    identifier: joi.string(),
    email: joi.string(),
    username: joi.string(),
    redirect: joi.string(),
  }).unknown(),
  [COMMANDS.RECOVER]: joi.object().keys({
    channel_uuid: uuid.required(),
    recovery: joi.string(),
    password: joi.string(),
    redirect: joi.string(),
  }).unknown(),
}

export const actions = {
  //
}
