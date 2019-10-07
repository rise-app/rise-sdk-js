import { RiSE } from './index'

import Primus from 'primus'
  // , Socket
  // , client

/**
 * Applications on RiSE are anything that accesses the API
 */
export class ApplicationClass {

  private Socket

  private _client

  constructor(public rise: RiSE) {
    // Reference to the core class
    this.rise = rise

    // Create a Primus Socket
    this.configureConnection()

    // Return the ApplicationClass
    return this
  }

  /**
   * Configure the Primus Socket
   */
  configureConnection(options = {}) {
    this.Socket = Primus.createSocket({
      transport: 'engine.io',
      ...options
    })
    return this.Socket
  }

  /**
   * Create a socket connection to RiSE
   */
  connect() {
    this._client = new this.Socket(this.rise.requestUrl)
    return this.client
  }

  /**
   * Get the Socket Client
   */
  get client() {
    return this._client
  }

  /**
   * Should not allow setting the client
   * @param val
   */
  set client(val) {
    throw new Error('client cannot be set outside of the ApplicationClass')
  }

  /**
   * Alias to the Client event emitter
   */
  get on() {
    return this._client.on
  }

}
