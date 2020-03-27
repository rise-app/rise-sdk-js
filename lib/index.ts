import * as api from './api'
import qs from 'qs'
import requestPromise from 'request-promise-native'
import { EVENTS as _EVENTS, ACTIONS as _ACTIONS, COMMANDS as _COMMANDS } from './enums'
import { ApplicationClass } from './ApplicationClass'
import { ApplicationBrowserClass } from './ApplicationBrowserClass'
import { EventEmitter } from 'events'
import { get } from 'lodash'
import { makeMockReq, makeMockRes } from './mock'


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
  objects?: string[]
  data?: {[key: string]: any} | any[]
  annotations?: {[key: string]: any} | any[]
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
  request_timeout?: number,
  live_mode?: boolean,
  logger?: any,
  sockets: any,
  globals?: {
    params?: {
      [key: string]: any
    },
    query?: {
      [key: string]: any
    }
  },
  mock: boolean
}

// Export the Core RiSE class
export class RiSE extends EventEmitter {

  // APIs
  public channel: api.Channel
  public channelEvent: api.ChannelEvent
  public channelAuth: api.ChannelAuth
  public channelPublic: api.ChannelPublic

  public channelApplication: api.ChannelApplication
  public channelApplicationEvent: api.ChannelApplicationEvent
  public channelApplicationEndpoint: api.ChannelApplicationEndpoint
  public channelApplicationKey: api.ChannelApplicationKey
  public channelApplicationPrehook: api.ChannelApplicationPrehook
  public channelApplicationSocket: api.ChannelApplicationSocket
  public channelApplicationTransformer: api.ChannelApplicationTransformer
  public channelApplicationWebhook: api.ChannelApplicationWebhook

  public channelAnalytic: api.ChannelAnalytic

  public channelBillingModel: api.ChannelBillingModel

  public channelCart: api.ChannelCart
  public channelCartItem: api.ChannelCartItem

  public channelCollection: api.ChannelCollection
  public channelCollectionEvent: api.ChannelCollectionEvent
  public channelCollectionImage: api.ChannelCollectionImage
  public channelCampaign: api.ChannelCampaign
  public channelCampaignCustomer: api.ChannelCampaignCustomer
  public channelCampaignOffer: api.ChannelCampaignOffer
  public channelCategory: api.ChannelCategory
  public channelCategoryProduct: api.ChannelCategoryProduct

  public channelCountry: api.ChannelCountry
  public channelCountryProvince: api.ChannelCountryProvince

  public channelCustomer: api.ChannelCustomer
  public channelCustomerCampaign: api.ChannelCustomerCampaign
  public channelCustomerCart: api.ChannelCustomerCart
  public channelCustomerEvent: api.ChannelCustomerEvent
  public channelCustomerFeed: api.ChannelCustomerFeed
  public channelCustomerOrder: api.ChannelCustomerOrder
  public channelCustomerGatewayAccount: api.ChannelCustomerGatewayAccount
  public channelCustomerGatewayAccountSource: api.ChannelCustomerGatewayAccountSource
  public channelCustomerUser: api.ChannelCustomerUser

  public channelFeed: api.ChannelFeed
  public channelFeedItem: api.ChannelFeedItem

  public channelFulfillment: api.ChannelFulfillment
  public channelFulfillmentItem: api.ChannelFulfillmentItem

  public channelFulfillmentService: api.ChannelFulfillmentService
  public channelFulfillmentServiceEvent: api.ChannelFulfillmentServiceEvent

  public channelGateway: api.ChannelGateway
  public channelGatewayAccount: api.ChannelGatewayAccount
  public channelGatewayAccountSource: api.ChannelGatewayAccountSource
  public channelGatewayEvent: api.ChannelGatewayEvent
  public channelGatewayForm: api.ChannelGatewayForm
  public channelGatewayReceiver: api.ChannelGatewayReceiver

  public channelOffer: api.ChannelOffer
  public channelOfferCampaign: api.ChannelOfferCampaign
  public channelOfferEvent: api.ChannelOfferEvent
  public channelOfferImage: api.ChannelOfferImage
  public channelOfferVariant: api.ChannelOfferVariant
  public channelOfferUpload: api.ChannelOfferUpload
  public channelOfferMetadataUpload: api.ChannelOfferMetadataUpload

  public channelOrder: api.ChannelOrder
  public channelOrderEvent: api.ChannelOrderEvent
  public channelOrderItem: api.ChannelOrderItem
  public channelOrderFulfillment: api.ChannelOrderFulfillment
  public channelOrderTransaction: api.ChannelOrderTransaction
  public channelPermission: api.ChannelPermission

  public channelProduct: api.ChannelProduct
  public channelProductEvent: api.ChannelProductEvent
  public channelProductImage: api.ChannelProductImage
  public channelProductVariant: api.ChannelProductVariant
  public channelProductVariantImage: api.ChannelProductVariantImage
  public channelProductVendor: api.ChannelProductVendor

  public channelShipping: api.ChannelShipping

  public channelSubscription: api.ChannelSubscription

  public channelTask: api.ChannelTask
  public channelTaskItem: api.ChannelTaskItem

  public channelTax: api.ChannelTax

  public channelTransaction: api.ChannelTransaction

  public channelUser: api.ChannelUser
  public channelUserCustomer: api.ChannelUserCustomer
  public channelUserEvent: api.ChannelUserEvent
  public channelUserInvite: api.ChannelUserInvite
  public channelUserNotification: api.ChannelUserNotification
  public channelUserPassport: api.ChannelUserPassport
  public channelUserPermission: api.ChannelUserPermission
  public channelUserRole: api.ChannelUserRole

  public channelVendor: api.ChannelVendor
  public channelVendorEvent: api.ChannelVendorEvent
  public channelVendorFulfillmentService: api.ChannelVendorFulfillmentService
  public channelVendorInventory: api.ChannelVendorInventory
  public channelVendorProduct: api.ChannelVendorProduct
  public channelVendorProductVariant: api.ChannelVendorProductVariant

  // Public
  public channelPublicCampaign: api.ChannelPublicCampaign
  public channelPublicCampaignOffer: api.ChannelPublicCampaignOffer
  public channelPublicCountry: api.ChannelPublicCountry
  public channelPublicCountryProvince: api.ChannelPublicCountryProvince
  public channelPublicCustomer: api.ChannelPublicCustomer
  public channelPublicFulfillmentService: api.ChannelPublicFulfillmentService
  public channelPublicGateway: api.ChannelPublicGateway
  public channelPublicGatewayForm: api.ChannelPublicGatewayForm
  public channelPublicOffer: api.ChannelPublicOffer
  public channelPublicOfferVariant: api.ChannelPublicOfferVariant

  // Applications
  public application: ApplicationClass | ApplicationBrowserClass

  // Logger
  public log: any

  public globals: RiSEConfig['globals'] = {}

  // Credentials
  public _cart
  public _customer
  public _user

  private _isApplicationAuthentication = false

  // Middleware
  private _middleware = new Map()
  // Afterware
  private _afterware = new Map()

  constructor(
    private config: RiSEConfig = {
      sandbox: true,
      beta: false,
      production: false,
      api_version: 1,
      sockets: null,
      mock: false
    }
  ) {
    // Call the super of the event emitter
    super()

    // If configured as mock mode, then set mock to true
    // if (config.mock) {
    //   config.mock = true
    // }
    // Set the request middleware to default to request-promise-native if not supplied
    if (!config.request_middleware) {
      config.request_middleware = requestPromise
    }

    // Set the request middleware to default to request-promise-native if not supplied
    if (!config.request_timeout) {
      // Default 30 second timeout
      config.request_timeout = 30000
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

    this.config.request_middleware = this.config.request_middleware || config.request_middleware
    this.config.request_timeout = this.config.request_timeout || config.request_timeout

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
    this.channelEvent = new api.ChannelEvent(this, this.globals)

    this.channelAuth = new api.ChannelAuth(this, this.globals)
    this.channelPublic = new api.ChannelPublic(this, this.globals)

    this.channelApplication = new api.ChannelApplication(this, this.globals)
    this.channelApplicationEndpoint = new api.ChannelApplicationEndpoint(this, this.globals)
    this.channelApplicationEvent = new api.ChannelApplicationEvent(this, this.globals)
    this.channelApplicationKey = new api.ChannelApplicationKey(this, this.globals)
    this.channelApplicationPrehook = new api.ChannelApplicationPrehook(this, this.globals)
    this.channelApplicationSocket = new api.ChannelApplicationSocket(this, this.globals)
    this.channelApplicationTransformer = new api.ChannelApplicationTransformer(this, this.globals)
    this.channelApplicationWebhook = new api.ChannelApplicationWebhook(this, this.globals)

    this.channelAnalytic = new api.ChannelAnalytic(this, this.globals)

    this.channelBillingModel = new api.ChannelBillingModel(this, this.globals)

    this.channelCart = new api.ChannelCart(this, this.globals)
    this.channelCartItem = new api.ChannelCartItem(this, this.globals)

    this.channelCollection = new api.ChannelCollection(this, this.globals)
    this.channelCollectionEvent = new api.ChannelCollectionEvent(this, this.globals)
    this.channelCollectionImage = new api.ChannelCollectionImage(this, this.globals)
    this.channelCampaign = new api.ChannelCampaign(this, this.globals)
    this.channelCampaignCustomer = new api.ChannelCampaignCustomer(this, this.globals)
    this.channelCampaignOffer = new api.ChannelCampaignOffer(this, this.globals)
    this.channelCategory = new api.ChannelCategory(this, this.globals)
    this.channelCategoryProduct = new api.ChannelCategoryProduct(this, this.globals)

    this.channelCountry = new api.ChannelCountry(this, this.globals)
    this.channelCountryProvince = new api.ChannelCountryProvince(this, this.globals)

    this.channelCustomer = new api.ChannelCustomer(this, this.globals)
    this.channelCustomerCampaign = new api.ChannelCustomerCampaign(this, this.globals)
    this.channelCustomerCart = new api.ChannelCustomerCart(this, this.globals)
    this.channelCustomerEvent = new api.ChannelCustomerEvent(this, this.globals)
    this.channelCustomerFeed = new api.ChannelCustomerFeed(this, this.globals)
    this.channelCustomerOrder = new api.ChannelCustomerOrder(this, this.globals)
    this.channelCustomerGatewayAccount = new api.ChannelCustomerGatewayAccount(this, this.globals)
    this.channelCustomerGatewayAccountSource = new api.ChannelCustomerGatewayAccountSource(this, this.globals)
    this.channelCustomerUser = new api.ChannelCustomerUser(this, this.globals)

    this.channelFeed = new api.ChannelFeed(this, this.globals)
    this.channelFeedItem = new api.ChannelFeedItem(this, this.globals)

    this.channelFulfillment = new api.ChannelFulfillment(this, this.globals)
    this.channelFulfillmentItem = new api.ChannelFulfillmentItem(this, this.globals)

    this.channelFulfillmentService = new api.ChannelFulfillmentService(this, this.globals)
    this.channelFulfillmentServiceEvent = new api.ChannelFulfillmentServiceEvent(this, this.globals)

    this.channelGateway = new api.ChannelGateway(this, this.globals)
    this.channelGatewayAccount = new api.ChannelGatewayAccount(this, this.globals)
    this.channelGatewayAccountSource = new api.ChannelGatewayAccountSource(this, this.globals)
    this.channelGatewayEvent = new api.ChannelGatewayEvent(this, this.globals)
    this.channelGatewayForm = new api.ChannelGatewayForm(this, this.globals)
    this.channelGatewayReceiver = new api.ChannelGatewayReceiver(this, this.globals)

    this.channelOffer = new api.ChannelOffer(this, this.globals)
    this.channelOfferCampaign = new api.ChannelOfferCampaign(this, this.globals)
    this.channelOfferEvent = new api.ChannelOfferEvent(this, this.globals)
    this.channelOfferImage = new api.ChannelOfferImage(this, this.globals)
    this.channelOfferVariant = new api.ChannelOfferVariant(this, this.globals)
    this.channelOfferUpload = new api.ChannelOfferUpload(this, this.globals)
    this.channelOfferMetadataUpload = new api.ChannelOfferMetadataUpload(this, this.globals)

    this.channelOrder = new api.ChannelOrder(this, this.globals)
    this.channelOrderEvent = new api.ChannelOrderEvent(this, this.globals)
    this.channelOrderItem = new api.ChannelOrderItem(this, this.globals)
    this.channelOrderFulfillment = new api.ChannelOrderFulfillment(this, this.globals)
    this.channelOrderTransaction = new api.ChannelOrderTransaction(this, this.globals)

    this.channelPermission = new api.ChannelPermission(this, this.globals)

    this.channelProduct = new api.ChannelProduct(this, this.globals)
    this.channelProductEvent = new api.ChannelProductEvent(this, this.globals)
    this.channelProductImage = new api.ChannelProductImage(this, this.globals)
    this.channelProductVariant = new api.ChannelProductVariant(this, this.globals)
    this.channelProductVariantImage = new api.ChannelProductVariantImage(this, this.globals)
    this.channelProductVendor = new api.ChannelProductVendor(this, this.globals)

    this.channelShipping = new api.ChannelShipping(this, this.globals)

    this.channelSubscription = new api.ChannelSubscription(this, this.globals)

    this.channelTask = new api.ChannelTask(this, this.globals)
    this.channelTaskItem = new api.ChannelTaskItem(this, this.globals)

    this.channelTax = new api.ChannelTax(this, this.globals)

    this.channelTransaction = new api.ChannelTransaction(this, this.globals)

    this.channelUser = new api.ChannelUser(this, this.globals)
    this.channelUserCustomer = new api.ChannelUserCustomer(this, this.globals)
    this.channelUserEvent = new api.ChannelUserEvent(this, this.globals)
    this.channelUserInvite = new api.ChannelUserInvite(this, this.globals)
    this.channelUserNotification = new api.ChannelUserNotification(this, this.globals)
    this.channelUserPassport = new api.ChannelUserPassport(this, this.globals)
    this.channelUserPermission = new api.ChannelUserPermission(this, this.globals)
    this.channelUserRole = new api.ChannelUserRole(this, this.globals)

    this.channelVendor = new api.ChannelVendor(this, this.globals)
    this.channelVendorEvent = new api.ChannelVendorEvent(this, this.globals)
    this.channelVendorFulfillmentService = new api.ChannelVendorFulfillmentService(this, this.globals)
    this.channelVendorInventory = new api.ChannelVendorInventory(this, this.globals)
    this.channelVendorProduct = new api.ChannelVendorProduct(this, this.globals)
    this.channelVendorProductVariant = new api.ChannelVendorProductVariant(this, this.globals)

    // Public endpoints
    this.channelPublicCampaign = new api.ChannelPublicCampaign(this, this.globals)
    this.channelPublicCampaignOffer = new api.ChannelPublicCampaignOffer(this, this.globals)
    this.channelPublicCountry = new api.ChannelPublicCountry(this, this.globals)
    this.channelPublicCountryProvince = new api.ChannelPublicCountryProvince(this, this.globals)
    this.channelPublicCustomer = new api.ChannelPublicCustomer(this, this.globals)
    this.channelPublicFulfillmentService = new api.ChannelPublicFulfillmentService(this, this.globals)
    this.channelPublicGateway = new api.ChannelPublicGateway(this, this.globals)
    this.channelPublicGatewayForm = new api.ChannelPublicGatewayForm(this, this.globals)
    this.channelPublicOffer = new api.ChannelPublicOffer(this, this.globals)
    this.channelPublicOfferVariant = new api.ChannelPublicOfferVariant(this, this.globals)

    // Initialize the Application Connection
    // The SDK is being included in a browser application
    // if (typeof window === 'undefined') {
      this.application = new ApplicationClass(this, this.globals, config.sockets)
    // }
    // // The SDK is being included in a Node.js application
    // else {
    //   this.application = new ApplicationBrowserClass(this, this.globals, config.sockets)
    // }

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
   * API CUSTOMER WHO LOGGED IN, Customer
   */
  get customer() {
    return this._customer
  }
  set customer(val) {
    this._customer = val
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


  get mock() {
    return this.config.mock
  }

  set mock(value: boolean) {
    this.config.mock = value
    return
  }

  /**
   * Make a Mock request
   * @param _req
   * @param req
   * @private
   */
  private _mockRequest(_req, req) {
    const func = get(api.mock, req.name)

    return new Promise((resolve, reject) => {
      if (func) {
        return resolve(func(req))
      }
      const [__req, _res] = [makeMockReq(req), makeMockRes({req: req})]
      //
      return resolve(_res)
    })
  }

  get _request_timeout() {
    return this.config.request_timeout
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

        this._isApplicationAuthentication = true

        this.setApiUserCredentials({
          user: body.data.ChannelUser,
          cart: body.data.ChannelCart,
          customer: body.data.ChannelCustomer,
          token: body.token,
          session: body.session
        })

        return body
      })
  }

  setApiUserCredentials({user, cart, customer, token, session}: { user?, cart?, customer?, token?, session?}) {

    if (user) {
      this.user = user
    }
    if (cart) {
      this.cart = cart
    }
    if (customer) {
      this.customer = customer
    }
    if (token) {
      this.token = token
    }
    if (session) {
      this.session = session
    }

    // Emit that the application is authenticated
    this.emit('api:credentials', this.getApiUserCredentials())

    return {
      is_application_authentication: this._isApplicationAuthentication,
      user: this.user,
      cart: this.cart,
      customer: this.customer,
      token: this.token,
      session: this.session
    }
  }

  /**
   * Get the Api User's Credentials that are being used for each request
   */
  getApiUserCredentials() {
    return {
      is_application_authentication: this._isApplicationAuthentication,
      user: this.user,
      cart: this.cart,
      customer: this.customer,
      token: this.token,
      session: this.session
    }
  }

  /**
   * Take a RiSE response object and parse out the token and session
   * if they are refreshed
   * @param res
   */
  setRefreshCredentials(res) {
    if (this._isApplicationAuthentication) {
      const { token, session } = res
      this.setApiUserCredentials({token, session})
    }
    return this.getApiUserCredentials()
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
  //       this.setApiUserCredentials(body)
  //       return body
  //     })
  // }

  /**
   * Serialize a Query String
   * @param obj
   * @param prefix
   */
  serializeQuery(obj, prefix?) {
    return qs.stringify(obj)
  }

  /**
   * Return Request Method and URL for the request call
   * @param route
   * @param query
   * @param paginate
   */
  composeUrl(route: {[key: string]: any} = {}, query = null, paginate?): {url: string, method: string} {

    if (paginate && paginate.current) {
      // TODO, add limit and offset automatically to query
    }

    // The Request method
    const method = Object.keys(route)[0]
    // The composed URL
    let url = `${this.requestUrl}/api/v${this.api_version}/${route[method]}`
    // Add a query if supplied
    if (query && query !== '') {
      url = `${url}?${this.serializeQuery(query)}`
    }
    // returns object
    return { url, method }
  }

  /**
   * If paginate is available on the Action, then add pagination utility functions to the response
   * @param res
   * @param paginate
   * @returns res
   */
  // TODO
  addPaginationToResponse(res, paginate = null) {
    if (paginate) {
      //
    }
    return res
  }

  /**
   * If this request is being made by a browser, then we should grab the agent if not set
   * @param req
   */
  _ifBrowserSetAgent(req) {
    if (typeof window !== 'undefined') {
      if (window.navigator && !req.headers['User-Agent']) {
        req.headers['User-Agent'] = window.navigator.userAgent
      }
    }
    return req
  }

  /**
   * If this request is proxied through another application set the origin IP
   * @param req
   */
  _ifProxySetIp(req) {
    if ((typeof req.ip !== 'undefined' || typeof req.client_ip !== 'undefined')
      && !req.headers['X-Forwarded-For']
    ) {
      req.headers['X-Forwarded-For'] = req.ip || req.client_ip
    }
    return req
  }

  /**
   * Log when start
   * @param name
   */
  private _startLogTime(name) {
    if ((this.config.sandbox || this.config.beta) && (this.log && this.log.time)) {
      this.log.time(`RiSE req ${name}`)
    }
  }
  /**
   * Log when end
   * @param name
   */
  private _endLogTime(name) {
    if ((this.config.sandbox || this.config.beta) && (this.log && this.log.timeEnd)) {
      this.log.timeEnd(`RiSE req ${name}`)
    }
  }


  /**
   * Set Middle or "After" ware
   * @param middleware
   * @param lifecycle
   */
  use(middleware, lifecycle = 'before'): Map<any, any> {
    if (middleware && lifecycle === 'before') {
      return this._middleware.set(this._middleware.size, middleware)
    }
    else if (middleware && lifecycle === 'after') {
      return this._afterware.set(this._afterware.size, middleware)
    }
  }


  private _runMiddleware(req) {
    // Run before the request "middleware"
    this._middleware.forEach((value, key, map) => {
      //
      try {
        req = value(this, req)
      }
      catch (err) {
        this.log.error(err)
      }
    })
    return req
  }


  private _runAfterware(res) {
    // Run after the response "afterware"
    this._afterware.forEach((value, key, map) => {
      //
      try {
        res = value(this, res)
      }
      catch (err) {
        this.log.error(err)
      }
    })
    return res
  }

  private _transformErrors(err) {
    return err
  }

  /**
   * Perform a request.
   * @name request
   * @param req
   * @param {*} body as json
   * @param validation
   */
  async request(req, body: {[key: string]: any} = {}, validation: any = null): Promise<RiSEResponse> {

    // If this request didn't pass pre validation
    if (validation instanceof Error) {
      if ((this.config.sandbox || this.config.beta)) {
        this.log.log(validation)
      }
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
      uri?: string,
      url?: any,
      strictSSL: boolean,
      json?: boolean,
      timeout?: number,
      body?: any,
      qs?: any,
      params?: any,

      href?: string,
      pathname?: string,
      preambleCRLF?: boolean,
      postambleCRLF?: boolean
    } = {
      // ...__req,
      headers: {
        ...__req.headers
      },
      method: method,
      url: url,
      strictSSL: false,
      json: true,
      timeout: this._request_timeout,
      body: body,
      params: params
    }

    // // If the Query is set, then add it to the request
    // if (query && !isEmpty(query)) {
    //   _req.qs = query
    // }

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

    // If this is a pass through request, let's set the headers
    this._ifProxySetIp(_req)

    // If this is a browser based request, let's set the headers
    this._ifBrowserSetAgent(_req)

    // If this is test request, start a timer for the request
    this._startLogTime(name)

    return Promise.resolve()
      .then(() => {

        if (this._middleware.size > 0) {
          return this._runMiddleware(_req)
        }
        else {
          return _req
        }
      })
      .then((___req) => {

        if (!this.mock) {
          // Make the request and return a Promise
          return this._request(___req)
        }
        else {
          return this._mockRequest(___req, req)
        }
      })
      .then((res) => {
        // End the console logger
        this._endLogTime(name)

        // If this is an application request, then automatically reset
        // credentials if they were in the response
        this.setRefreshCredentials(res)

        // Add the pagination to response if appropriate for request
        return res = this.addPaginationToResponse(res, paginate)
      })
      .then(res => {
        if (this._afterware.size > 0) {
          return this._runAfterware(_req)
        }
        else {
          return res
        }
      })
      .then(res => {
        return res
      })
      .catch(err => {
        // End the console logger
        this._endLogTime(name)

        // TODO uniform errors into an array
        return Promise.reject(this._transformErrors(err))
      })
  }
}
