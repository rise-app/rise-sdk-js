export const AUTH_ACTIONS = {

}

export const AUTH_COMMANDS = {
  'SET_RECOVERY': 'set.recovery.user',
  'RECOVER': 'recover.user',
  // 'START_SESSION': 'start.channel.session',
  // 'END_SESSION': 'end.channel.session',
  // 'REGISTER_USER': 'register.channel.user',
  // 'LOGIN_USER': 'login.channel.user',
  // 'LOGOUT_USER': 'logout.channel.user',
}

export const AUTH_EVENTS = {
  'RECOVERY_SET': 'user.recovery.set',
  'RECOVERED': 'user.recovered'

  // 'SESSION_STARTED': 'channel.session.started',
  // 'SESSION_ENDED': 'channel.session.ended',
  // 'USER_REGISTERED': 'channel.user.registered',
  // 'USER_LOGGED_IN': 'channel.user.logged_in',
  // 'USER_LOGGED_OUT': 'channel.user.logged_out',
}
