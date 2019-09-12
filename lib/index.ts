import * as api from './api'
import request from 'request-promise'

export interface RiSEConfig {
  [key: string]: any
  sandbox: boolean
  beta: boolean
  production: boolean
  api_version: number
  public_key?: string
  private_key?: string
  session?: string
  token?: string
  email?: string
  password?: string
}

export class RiSE {

  // APIs
  public channel: api.Channel
  public channelApplication: api.ChannelApplication
  public channelBillingModel: api.ChannelBillingModel
  public channelCart: api.ChannelCart
  public channelCollection: api.ChannelCollection
  public channelCampaign: api.ChannelCampaign
  public channelCategory: api.ChannelCategory
  public channelCountry: api.ChannelCountry
  public channelCustomer: api.ChannelCustomer
  public channelFeed: api.ChannelFeed
  public channelFulfillment: api.ChannelFulfillment
  public channelGateway: api.ChannelGateway
  public channelOffer: api.ChannelOffer
  public channelOrder: api.ChannelOrder
  public channelPermission: api.ChannelPermission
  public channelProduct: api.ChannelProduct
  public channelSubscription: api.ChannelSubscription
  public channelTask: api.ChannelTask
  public channelTransaction: api.ChannelTransaction
  public channelUser: api.ChannelUser
  public channelVendor: api.ChannelVendor
  
  constructor(
    private config: RiSEConfig = {
      sandbox: true,
      beta: false,
      production: false,
      api_version: 1
    }
  ) {
    // Set the default env
    if (config.sandbox) {
      this.config.beta = false
      this.config.production = false
    }
    if (config.beta) {
      this.config.sandbox = false
      this.config.production = false
    }
    if (config.production) {
      this.config.sandbox = false
      this.config.beta = false
    }

    //
    this.config.api_version = this.config.api_version || config.api_version || 1
    this.config.public_key = this.config.public_key || config.public_key
    this.config.private_key = this.config.private_key || config.private_key

    this.config.session = this.config.session || config.session
    this.config.token = this.config.token || config.token

    console.log('THE CONFIG', this.config)

    // Initialize the APIs
    this.channel = new api.Channel(this)
    this.channelApplication = new api.ChannelApplication(this)
    this.channelBillingModel = new api.ChannelBillingModel(this)
    this.channelCart = new api.ChannelCart(this)
    this.channelCollection = new api.ChannelCollection(this)
    this.channelCampaign = new api.ChannelCampaign(this)
    this.channelCategory = new api.ChannelCategory(this)
    this.channelCountry = new api.ChannelCountry(this)
    this.channelCustomer = new api.ChannelCustomer(this)
    this.channelFeed = new api.ChannelFeed(this)
    this.channelFulfillment = new api.ChannelFulfillment(this)
    this.channelGateway = new api.ChannelGateway(this)
    this.channelOffer = new api.ChannelOffer(this)
    this.channelOrder = new api.ChannelOrder(this)
    this.channelPermission = new api.ChannelPermission(this)
    this.channelProduct = new api.ChannelProduct(this)
    this.channelSubscription = new api.ChannelSubscription(this)
    this.channelTask = new api.ChannelTask(this)
    this.channelTransaction = new api.ChannelTransaction(this)
    this.channelUser = new api.ChannelUser(this)
    this.channelVendor = new api.ChannelVendor(this)

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
   * URL to RiSE API
   * Sandbox or live
   */
  get requestUrl() {
    return this.config.beta
      ? 'https://api.beta.rise.store'
      : this.config.sandbox
          ? 'https://api.sandbox.rise.store'
          : 'https://api.rise.store'
  }

  /**
   *
   */
  authenticateApiUser(identifier, password) {
    return this.channelUser.login({
      identifier: identifier || this.config.username || this.config.email,
      password: password || this.config.password
    })
      .then(body => {
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

  serializeQuery(obj, prefix?) {
    let str = [], p

    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        const k = prefix ? prefix + '[" + p + "]' : p,
          v = obj[p]
        str.push((v !== null && typeof v === "object") ?
          this.serializeQuery(v, k) :
          encodeURIComponent(k) + '=' + encodeURIComponent(v))
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
      return Promise.reject({
        'StatusCodeError': '000',
        'isPreValidationError': true,
        ...validation
      })
    }

    // Abstract the route from the api method and use the rest (if any) in the request
    const { route, query, ...__req } = req

    // Get the method and url from the request
    const { method, url } = this.composeUrl(route, query)

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
      ...__req
    }

    if (this.config.public_key) {
      _req.headers['X-APPLICATION-KEY'] = this.config.public_key
    }

    if (this.token) {
      _req.headers['Authorization'] = `JWT ${this.token}`
    }

    if (this.session) {
      _req.headers['Session'] = this.session
    }

    // make request promise
    return request(_req)
      .then((res) => {
        console.log('brk res', res)
        // if(res.response.result && res.response.result !== 1) {
        //   res.isRPG = true
        //   throw res
        // }
        // else {
        //   return res
        // }
        return res
      })
  }
}