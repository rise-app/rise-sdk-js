import { RiSE } from './index'

/**
 * Applications on RiSE are anything that accesses the API
 */
export class ApplicationClass {
  constructor(public rise: RiSE) {
    this.rise = rise
    return this
  }

  connect() {}
}
