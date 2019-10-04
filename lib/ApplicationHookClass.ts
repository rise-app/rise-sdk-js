import { RiSE } from './index'

/**
 * Application Hooks are actions/commands that can be run while another command is being processed but before it's dispatched as an Event
 */

export class ApplicationHookClass {
  constructor(public rise: RiSE) {
    this.rise = rise
    return this
  }

  connect() {}
}
