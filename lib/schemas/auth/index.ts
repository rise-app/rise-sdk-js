import joi from 'joi'
const uuid = joi.string().guid()

import { COMMANDS, ACTIONS } from '../../enums'

export const commands = {
  [COMMANDS.SET_RECOVERY]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      identifier: joi.string(),
      email: joi.string(),
      username: joi.string(),
      redirect: joi.string(),
    }).unknown()
  },
  [COMMANDS.RECOVER]: {
    params: joi.object().keys({
      channel_uuid: uuid.required(),
    }).unknown(),
    body: joi.object().keys({
      recovery: joi.string(),
      password: joi.string(),
      redirect: joi.string(),
    }).unknown()
  },
}

export const actions = {
  //
}
