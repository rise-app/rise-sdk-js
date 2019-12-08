import * as api from './api'
import requestPromise from 'request-promise-native'
import { EVENTS as _EVENTS, ACTIONS as _ACTIONS, COMMANDS as _COMMANDS } from './enums'
import { ApplicationClass } from './ApplicationClass'
import { ApplicationBrowserClass } from './ApplicationBrowserClass'
import { ApiClass } from './ApiClass'

// Export the Enums for developer use
export const COMMANDS = _COMMANDS
export const EVENTS = _EVENTS
export const ACTIONS = _ACTIONS

export interface RiSEResponse {
  // The dot notation of the event created
  event_type?: string
  // The dot notation of the action run
  action?: string
  includes?: any
  list?: string
  object?: string
  data?: {[key: string]: any} | any[]
  url?: string
  urls?: {[key: string]: any} | any[]
  offset?: number
  limit?:  number
  total?: number
  sort?: any
}

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
  logger?: any,
  globals?: {
    params?: {
      [key: string]: any
    },
    query?: {
      [key: string]: any
    }
  }
}

// Export the Core RiSE class
export class RiSE {

  // APIs
  public channel: api.Channel
  public channelAuth: api.ChannelAuth
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
  public channelPublicCustomer: api.ChannelPublicCustomer
  public channelCustomerCampaign: api.ChannelCustomerCampaign
  public channelCustomerCart: api.ChannelCustomerCart
  public channelCustomerFeed: api.ChannelCustomerFeed
  public channelCustomerOrder: api.ChannelCustomerOrder
  public channelCustomerGatewayAccount: api.ChannelCustomerGatewayAccount
  public channelCustomerGatewayAccountSource: api.ChannelCustomerGatewayAccountSource
  public channelCustomerUser: api.ChannelCustomerUser
  public channelFeed: api.ChannelFeed
  public channelFeedItem: api.ChannelFeedItem
  public channelFulfillment: api.ChannelFulfillment
  public channelFulfillmentItem: api.ChannelFulfillmentItem
  public channelGateway: api.ChannelGateway
  public channelOffer: api.ChannelOffer
  public channelOfferVariant: api.ChannelOfferVariant
  public channelPublicOffer: api.ChannelPublicOffer
  public channelPublicOfferVariant: api.ChannelPublicOfferVariant
  public channelOrder: api.ChannelOrder
  public channelOrderItem: api.ChannelOrderItem
  public channelPermission: api.ChannelPermission
  public channelProduct: api.ChannelProduct
  public channelProductVariant: api.ChannelProductVariant
  public channelSubscription: api.ChannelSubscription
  public channelTask: api.ChannelTask
  public channelTransaction: api.ChannelTransaction
  public channelUser: api.ChannelUser
  public channelVendor: api.ChannelVendor

  // Applications
  public application: ApplicationClass | ApplicationBrowserClass

  // Logger
  public log: any

  public globals: RiSEConfig['globals'] = {}

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
      this.log = console
    }

    // Configure the global Params / Query values
    if (config.globals) {
      this.globals = config.globals
    }

    // // Initialize the APIs
    this.channel = new api.Channel(this, this.globals)
    this.channelAuth = new api.ChannelAuth(this, this.globals)
    this.channelApplication = new api.ChannelApplication(this, this.globals)
    this.channelBillingModel = new api.ChannelBillingModel(this, this.globals)
    this.channelCart = new api.ChannelCart(this, this.globals)
    this.channelCartItem = new api.ChannelCartItem(this, this.globals)
    this.channelCollection = new api.ChannelCollection(this, this.globals)
    this.channelCampaign = new api.ChannelCampaign(this, this.globals)
    this.channelCategory = new api.ChannelCategory(this, this.globals)
    this.channelCountry = new api.ChannelCountry(this, this.globals)
    this.channelCountryProvince = new api.ChannelCountryProvince(this, this.globals)
    this.channelCustomer = new api.ChannelCustomer(this, this.globals)
    this.channelCustomerCampaign = new api.ChannelCustomerCampaign(this, this.globals)
    this.channelCustomerCart = new api.ChannelCustomerCart(this, this.globals)
    this.channelCustomerFeed = new api.ChannelCustomerFeed(this, this.globals)
    this.channelCustomerOrder = new api.ChannelCustomerOrder(this, this.globals)
    this.channelCustomerGatewayAccount = new api.ChannelCustomerGatewayAccount(this, this.globals)
    this.channelCustomerGatewayAccountSource = new api.ChannelCustomerGatewayAccountSource(this, this.globals)
    this.channelCustomerUser = new api.ChannelCustomerUser(this, this.globals)
    this.channelFeed = new api.ChannelFeed(this, this.globals)
    this.channelFeedItem = new api.ChannelFeedItem(this, this.globals)
    this.channelFulfillment = new api.ChannelFulfillment(this, this.globals)
    this.channelFulfillmentItem = new api.ChannelFulfillmentItem(this, this.globals)
    this.channelGateway = new api.ChannelGateway(this, this.globals)
    this.channelOffer = new api.ChannelOffer(this, this.globals)
    this.channelOfferVariant = new api.ChannelOfferVariant(this, this.globals)
    this.channelOrder = new api.ChannelOrder(this, this.globals)
    this.channelOrderItem = new api.ChannelOrderItem(this, this.globals)
    this.channelPermission = new api.ChannelPermission(this, this.globals)
    this.channelProduct = new api.ChannelProduct(this, this.globals)
    this.channelProductVariant = new api.ChannelProductVariant(this, this.globals)
    this.channelSubscription = new api.ChannelSubscription(this, this.globals)
    this.channelTask = new api.ChannelTask(this, this.globals)
    this.channelTransaction = new api.ChannelTransaction(this, this.globals)
    this.channelUser = new api.ChannelUser(this, this.globals)
    this.channelVendor = new api.ChannelVendor(this, this.globals)

    // Public endpoints
    this.channelPublicCustomer = new api.ChannelPublicCustomer(this, this.globals)
    this.channelPublicOffer = new api.ChannelPublicOffer(this, this.globals)
    this.channelPublicOfferVariant = new api.ChannelPublicOfferVariant(this, this.globals)

    // Initialize the Application Connection
    if (typeof window === 'undefined') {
      this.application = new ApplicationClass(this, this.globals)
    }
    else {
      this.application = new ApplicationBrowserClass(this, this.globals)
    }

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
    return this.channelAuth.login({
      channel_uuid: channel_uuid,
      username: identifier || this.config.username || this.config.email,
      password: password || this.config.password
    })
      .then((body: {[key: string]: any} = {}) => {
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
  composeUrl(route: {[key: string]: any} = {}, query, paginate?): {url: string, method: string} {

    if (paginate && paginate.current) {
      // TODO, add limit and offset automatically to query
    }

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
   * If paginate is available on the Action, then add pagination utility functions to the response
   * @param response
   * @param paginate
   * @returns response
   */
  // TODO
  addPaginationToResponse(response, paginate = null) {
    if (paginate) {
      //
    }
    return response
  }

  /**
   * Perform a request.
   * @name request
   * @param req
   * @param {*} body as json
   * @param validation
   */
  request(req, body: {[key: string]: any} = {}, validation: any = null): Promise<RiSEResponse> {

    // If this request didn't pass pre validation
    if (validation instanceof Error) {
      const err = {
        'statusCode': '400',
        'isPreValidationError': true,
        ...validation
      }
      return Promise.reject(err)
    }

    // Abstract the route from the api method and use the rest (if any) in the request
    const { name, route, query, params, paginate, ...__req } = req

    // Get the method and url from the request
    const { method, url } = this.composeUrl(route, query, paginate)

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
      // ...__req,
      headers: {
        ...__req.headers
      },
      method: method,
      url: url,
      strictSSL: true,
      json: true,
      body: body,
      params: params
    }

    // Set the Application Public key if on the request or included in the class
    if (__req.public_key || this.config.public_key) {
      _req.headers['X-APPLICATION-KEY'] = __req.public_key || this.config.public_key
    }

    // Set the JWT token if in the request or persisted to the class
    if (__req.token || this.token) {
      _req.headers['Authorization'] = `JWT ${__req.token || this.token}`
    }

    // Set the Session UUID if in the request or persisted to the class
    if (__req.session || this.session) {
      _req.headers['Session'] = __req.session || this.session
    }

    // If this is test request, start a timer for the request
    if ((this.config.sandbox || this.config.beta) && (this.log && this.log.time)) {
      this.log.time(`RiSE req ${name}`)
    }

    // Make the request and return a Promise
    return this._request(_req)
      .then((res) => {
        // End the console logger
        if ((this.config.sandbox || this.config.beta) && (this.log && this.log.timeEnd)) {
          this.log.timeEnd(`RiSE req ${name}`)
        }
        // Add the pagination to response if appropriate for request
        return res = this.addPaginationToResponse(res, paginate)
      })
      .catch(err => {
        // TODO uniform errors into an array
        return Promise.reject(err)
      })
  }
}
