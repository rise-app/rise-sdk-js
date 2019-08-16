import * as api from './api'

export interface RiSEConfig {
 [key: string]: any
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
    private config: RiSEConfig = {}
  ) {
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
}