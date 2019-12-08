// Browsers do not have the event emitter class, so this is installed
import EventEmitter from 'events'
import { RiSE, RiSEConfig } from './index'
import { regexdot } from '@fabrix/regexdot'

import Primus from 'primus'
  // , Socket
  // , client

/**
 * Applications on RiSE are anything that accesses the API
 */
export class ApplicationClass extends EventEmitter {

  private Socket

  private _client

  private _subscriptions

  private _handlers = new Map()
  private _patterns = new Set(['connected', 'disconnected', 'error'])

  constructor(public rise: RiSE, public globals: RiSEConfig['globals']) {
    super()

    // Reference to the core class
    this.rise = rise
    this.globals = globals

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

    this._client.on('outgoing::url', (url) => {
      url.query = 'token=' + (this.rise.token || '')
    })

    this._client.on('data', (msg) => {
      if (msg && msg.subscribed) {
        this._subscriptions = msg.subscribed
      }
      else if (msg && msg.unsubscribed) {
        this._subscriptions = msg.subscribed
      }
      else if (msg && msg.event_type) {
        this.handler(msg)
      }
    })

    this._client.on('open', (msg) => {
      this.handler({ pattern: 'connected' })
    })

    this._client.on('close', (msg) => {
      this.handler({ pattern: 'disconnected' } )
    })

    this._client.on('error', (msg) => {
      this.handler({ pattern: 'error', msg })
    })

    return this.client
  }

  disconnect() {
    return this.client.end()
  }

  subscribe(broadcast, subscriptions = []) {
    subscriptions.forEach(s => {
      this._patterns.add(s)
    })

    this._client.write({
      channel: broadcast,
      subscribe: subscriptions
    })
  }

  unsubscribe(broadcast, subscriptions = []) {

    subscriptions.forEach(s => {
      this._patterns.delete(s)
    })

    this._client.write({
      channel: broadcast,
      unsubscribe: subscriptions
    })
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
  // get on() {
  //   return this._client.on
  // }

  /**
   * Get the Socket Client
   */
  get subscriptions() {
    return this._subscriptions || []
  }

  /**
   * Should not allow setting the client
   * @param val
   */
  set subscriptions(val) {
    throw new Error('subscriptions cannot be set outside of the ApplicationClass')
  }

  handler(event) {
    console.log('brk handler', event)
    // this.emit(event.pattern, event)
  }
}
