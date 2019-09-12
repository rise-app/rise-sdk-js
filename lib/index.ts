import * as api from './api'
import request from 'request-promise'

export interface RiSEConfig {
  [key: string]: any
  sandbox: boolean
  beta: boolean
  production: boolean
  api_version: number
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

  public defaultApiVersion = 1
  
  constructor(
    private config: RiSEConfig = {
      sandbox: true,
      beta: false,
      production: false,
      api_version: 1
    }
  ) {
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
  // login() {
  //   return this.user.login({
  //     userName: this.config.username,
  //     password: this.config.password
  //   })
  // }

  // /**
  //  * get API token
  //  */
  // getApiToken() {
  //   return this.login()
  //     .then(body => {
  //       this.config.apiKey = body.token
  //       this.config.parentId = body.parentId
  //       this.config.resellerId = body.resellerId
  //       this.config.userType = body.userType
  //       this.config.role = body.role
  //       this.config.changePassword = body.changePassword
  //     })
  // }

  /**
   * Return Method and Url
   * @param obj
   */
  composeUrl(obj: {[key: string]: any} = {}): {url: string, method: string} {
    // The Request method
    const method = Object.keys(obj)[0]
    // The composed URL
    const url = `${this.requestUrl}/api/v${this.config.api_version || this.defaultApiVersion}/${obj[method]}`
    // returns object
    return { url, method }
  }

  /**
   * Perform a request.
   * @name request
   * @param reqUrl
   * @param {*} body as json
   * @param validation
   */
  request(reqUrl, body = {}, validation = null) {
    // console.log('brk config', this.config)
    // console.log('brk reqUrl', reqUrl)
    // console.log('brk body', body)
    // console.log('brk validation', validation)

    // If this request didn't pass validation
    if (validation instanceof Error) {
      return Promise.reject({
        'StatusCodeError': '000',
        'isPreValidationError': true,
        ...validation
      })
    }

    // Get the method and url from the request
    const { method, url } = this.composeUrl(reqUrl)

    console.log('composed', url, method)

    const req: {
      headers?: any,
      method: string,
      url: string,
      strictSSL: boolean,
      json?: boolean,
      body?: any
    } = {
      headers: {
        // Authorization: this.config.apiKey
      },
      method: method,
      url: url,
      strictSSL: true,
      json: true,
      body: body,
    }

    if (this.config.apiKey) {
      req.headers['Authorization'] = this.config.apiKey
    }

    // make request promise
    return request(req)
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