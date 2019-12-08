import EventEmitter from "events"
import { RiSE, RiSEConfig } from './index'

/**
 * Applications on RiSE are anything that accesses the API
 */
export class ApplicationBrowserClass extends EventEmitter {
  constructor(public rise: RiSE, public globals: RiSEConfig['globals']) {
    super()

    // Reference to the core class
    this.rise = rise
    this.globals = globals
  }
}
