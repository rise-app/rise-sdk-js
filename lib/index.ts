import * as api from './api'
import requestPromise from 'request-promise-native'
import { EVENTS as _EVENTS, ACTIONS as _ACTIONS, COMMANDS as _COMMANDS } from './enums'
import { ApplicationClass } from './ApplicationClass'
import { ApiClass } from './ApiClass'

// Export the Enums for developer use
export const COMMANDS = _COMMANDS
export const EVENTS = _EVENTS
export const ACTIONS = _ACTIONS

// Export the RiSEConfig for developer use
export interface RiSEConfig {
  [key: string]: any
  url?: string
  sandbox?: boolean
  beta?: boolean
  production?: boolean
  api_version?: number
  public_key?: string
  private_key?: string
  session?: string
  token?: string
  email?: string
  password?: string,
  request_middleware?: any,
  live_mode?: boolean,
  logger?: any
}

// Export the Core RiSE class
export class RiSE {

  // APIs
  public channel: api.Channel
  public channelApplication: api.ChannelApplication
  public channelBillingModel: api.ChannelBillingModel
  public channelCart: api.ChannelCart
  public channelCartItem: api.ChannelCartItem
  public channelCollection: api.ChannelCollection
  public channelCampaign: api.ChannelCampaign
  public channelCategory: api.ChannelCategory
  public channelCountry: api.ChannelCountry
  public channelCountryProvince: api.ChannelCountryProvince
  public channelCustomer: api.ChannelCustomer
  public channelFeed: api.ChannelFeed
  public channelFulfillment: api.ChannelFulfillment
  public channelGateway: api.ChannelGateway
  public channelOffer: api.ChannelOffer
  public channelOrder: api.ChannelOrder
  public channelOrderItem: api.ChannelOrderItem
  public channelPermission: api.ChannelPermission
  public channelProduct: api.ChannelProduct
  public channelSubscription: api.ChannelSubscription
  public channelTask: api.ChannelTask
  public channelTransaction: api.ChannelTransaction
  public channelUser: api.ChannelUser
  public channelVendor: api.ChannelVendor

  // Applications
  public application: ApplicationClass

  // Logger
  public log: any

  public _cart
  public _user
  
  constructor(
    private config: RiSEConfig = {
      sandbox: true,
      beta: false,
      production: false,
      api_version: 1
    }
  ) {

    // Set the request middleware to default to request-promise-native if not supplied
    if (!config.request_middleware) {
      config.request_middleware = requestPromise
    }

    // Set the live mode parameter
    if (config.live_mode === true || config.live_mode === false) {
      this.config.live_mode = config.live_mode
    }

    // Set the default env
    if (config.url) {
      this.config.sandbox = false
      this.config.beta = false
      this.config.production = false
      this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false
    }
    else if (config.sandbox) {
      this.config.beta = false
      this.config.production = false
      this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false
    }
    else if (config.beta) {
      this.config.sandbox = false
      this.config.production = false
      this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : false
    }
    else if (config.production) {
      this.config.sandbox = false
      this.config.beta = false
      this.config.live_mode = typeof config.live_mode !== 'undefined' ? config.live_mode : true
    }

    // The API version to end, valid whole or float number eg. 1, 1.0, 1.1
    this.config.api_version = this.config.api_version || config.api_version || 1
    // The public key to use for connecting to RiSE (from an application or this application)
    this.config.public_key = this.config.public_key || config.public_key
    // Optional: The private key to use for connecting to RiSE (from an application or this application)
    this.config.private_key = this.config.private_key || config.private_key

    // Optional: You can configure a session id that was given prior to creating the RiSE instance
    this.config.session = this.config.session || config.session
    // Optional: You can configure a token that was given prior to creating the RiSE instance
    this.config.token = this.config.token || config.token

    // Configure the logger
    if (config.logger) {
      this.log = config.logger
    }
    else {
      this.log = console.log
    }

    // Initialize the APIs
    this.channel = new api.Channel(this)
    this.channelApplication = new api.ChannelApplication(this)
    this.channelBillingModel = new api.ChannelBillingModel(this)
    this.channelCart = new api.ChannelCart(this)
    this.channelCartItem = new api.ChannelCartItem(this)
    this.channelCollection = new api.ChannelCollection(this)
    this.channelCampaign = new api.ChannelCampaign(this)
    this.channelCategory = new api.ChannelCategory(this)
    this.channelCountry = new api.ChannelCountry(this)
    this.channelCountryProvince = new api.ChannelCountryProvince(this)
    this.channelCustomer = new api.ChannelCustomer(this)
    this.channelFeed = new api.ChannelFeed(this)
    this.channelFulfillment = new api.ChannelFulfillment(this)
    this.channelGateway = new api.ChannelGateway(this)
    this.channelOffer = new api.ChannelOffer(this)
    this.channelOrder = new api.ChannelOrder(this)
    this.channelOrderItem = new api.ChannelOrderItem(this)
    this.channelPermission = new api.ChannelPermission(this)
    this.channelProduct = new api.ChannelProduct(this)
    this.channelSubscription = new api.ChannelSubscription(this)
    this.channelTask = new api.ChannelTask(this)
    this.channelTransaction = new api.ChannelTransaction(this)
    this.channelUser = new api.ChannelUser(this)
    this.channelVendor = new api.ChannelVendor(this)

    // Initialize the Application Connection
    this.application = new ApplicationClass(this)

    return this
  }


  /**
   * JWT TOKEN THAT IS CONFIGURED
   */
  get token() {
    return this.config.token
  }
  set token(val) {
    this.config.token = val
  }

  /**
   * The KEYS to use
   */
  get public_key() {
    return this.config.public_key
  }
  set public_key(val) {
    this.config.public_key = val
  }

  get private_key() {
    return this.config.private_key
  }
  set private_key(val) {
    this.config.private_key = val
  }

  /**
   * SESSION VARIABLE USED TO SEPERATE REQUESTS FOR A GIVEN USER TYPE
   */
  get session() {
    return this.config.session
  }
  set session(val) {
    this.config.session = val
  }

  /**
   * API VERSION IS CONFIGURED
   */
  get api_version() {
    return this.config.api_version
  }
  set api_version(val) {
    this.config.api_version = val
  }

  /**
   * API USER WHO LOGGED IN
   */
  get user() {
    return this._user
  }
  set user(val) {
    this._user = val
  }

  /**
   * API USER WHO LOGGED IN, Cart
   */
  get cart() {
    return this._cart
  }
  set cart(val) {
    this._cart = val
  }


  /**
   * Request Middleware
   */
  get _request() {
    return this.config.request_middleware
  }
  set _request(val) {
    this.config.request_middleware = val
  }

  /**
   * URL to RiSE API
   * Sandbox or live
   */
  get requestUrl() {
    return this.config.url
      || this.config.beta
        ? 'https://api.beta.rise.store'
        : this.config.sandbox
            ? 'https://api.sandbox.rise.store'
            : 'https://api.rise.store'
  }

  /**
   *
   */
  authenticateApiUser(channel_uuid, identifier?, password?) {
    return this.channelUser.login({
      channel_uuid: channel_uuid,
      username: identifier || this.config.username || this.config.email,
      password: password || this.config.password
    })
      .then(body => {
        this.user = body.data.ChannelUser
        this.cart = body.data.ChannelCart
        this.token = body.token
        this.session = body.session
        return body
      })
  }

  /**
   * get Application JWT token to be used for follow on request through this application
   */
  // authenticateApplication() {
  //   return this.channelApplication.authenticate({
  //     public_key: this.config.public_key,
  //     private_key: this.config.private_key
  //   })
  //     .then(body => {
  //       this.token = body.token
  //       this.session = body.session
  //       return body
  //     })
  // }

  /**
   * Serialize a Query String
   * @param obj
   * @param prefix
   */
  serializeQuery(obj, prefix?) {
    let str = [], p

    for (p in obj) {
      if (obj.hasOwnProperty(p)) {

        const k = prefix
          ? prefix + '[' + p + ']'
          : p
        const v = obj[p]

        str.push((v !== null && typeof v === 'object')
          ? this.serializeQuery(v, k)
          : encodeURIComponent(k) + '=' + encodeURIComponent(v))
      }
    }
    return str.join('&')
  }

  /**
   * Return Request Method and URL for the request call
   * @param route
   * @param query
   */
  composeUrl(route: {[key: string]: any} = {}, query): {url: string, method: string} {
    // The Request method
    const method = Object.keys(route)[0]
    // The composed URL
    let url = `${this.requestUrl}/api/v${this.api_version}/${route[method]}`
    // Add a query if supplied
    if (query) {
      url = `${url}?${this.serializeQuery(query)}`
    }
    // returns object
    return { url, method }
  }

  /**
   * Perform a request.
   * @name request
   * @param req
   * @param {*} body as json
   * @param validation
   */
  request(req, body = {}, validation = null) {
    // console.log('brk validation', validation)

    // If this request didn't pass validation
    if (validation instanceof Error) {
      const err = {
        'statusCode': '400',
        'isPreValidationError': true,
        ...validation
      }
      return Promise.reject(err)
    }

    // Abstract the route from the api method and use the rest (if any) in the request
    const { name, route, query, params, ...__req } = req

    // Get the method and url from the request
    const { method, url } = this.composeUrl(route, query)

    //
    // var options = { method: 'GET',
    //   url: 'https://api.sandbox.rise.store/api/v1/channels/<channel_uuid>/applications/<application_uuid>',
    //   headers:
    //     { 'cache-control': 'no-cache',
    //       Connection: 'keep-alive',
    //       Cookie: '<cookie>',
    //       'Content-Length': '100',
    //       'Accept-Encoding': 'gzip, deflate',
    //       Host: '<>',
    //       'Cache-Control': 'no-cache',
    //       'User-Agent': 'PostmanRuntime/7.16.3',
    //       Session: '<session>',
    //       Authorization: 'JWT <>',
    //       Accept: 'application/json',
    //       'X-APPLICATION-KEY': 'pk_<>',
    //       'Content-Type': 'application/json' },
    //   body: {};
    //

    const _req: {
      [key: string]: any,
      headers?: any,
      method: string,
      url: string,
      strictSSL: boolean,
      json?: boolean,
      body?: any
    } = {
      headers: {},
      method: method,
      url: url,
      strictSSL: true,
      json: true,
      body: body,
      params: params,
      // ...__req
    }

    if (__req.public_key || this.config.public_key) {
      _req.headers['X-APPLICATION-KEY'] = __req.public_key || this.config.public_key
    }

    if (__req.token || this.token) {
      _req.headers['Authorization'] = `JWT ${__req.token || this.token}`
    }

    if (__req.session || this.session) {
      _req.headers['Session'] = __req.session || this.session
    }

    if (this.config.sandbox || this.config.beta) {
      console.time(`RiSE req ${name}`)
    }

    // make request promise
    return this._request(_req)
      .then((res) => {
        if (this.config.sandbox || this.config.beta) {
          console.timeEnd(`RiSE req ${name}`)
        }
        return res
      })
      // .catch(err => {
      //   return Promise.reject(err)
      // })
  }
}
