import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { collection } from '../../validators/collection'

export class ChannelCollection extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/collections', validator: collection.create })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection.update })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection.get })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections/handle/:handle', validator: collection.getByAttribute })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections', validator: collection.list })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
export class ChannelCategory extends ApiClass {

  @Command({ method: 'POST', route: 'channels/:channel_uuid/categories', validator: collection.create })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection.update })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection.get })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories/handle/:handle', validator: collection.getByAttribute })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories', validator: collection.list })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products/:product_uuid', validator: collection.get })
  getProduct(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products', validator: collection.list })
  listProducts(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid', validator: collection.get })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/handle/:handle', validator: collection.listByAttribute })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories', validator: collection.list })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products/:product_uuid', validator: collection.get })
  getPublicProduct(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products', validator: collection.list })
  listPublicProducts(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

/**
 * Channel Campaigns
 */
export class ChannelCampaign extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/campaigns', validator: collection.create })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection.update })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection.get })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle', validator: collection.getByAttribute })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/parent', validator: collection.getByAttribute })
  getParentByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/ancestors', validator: collection.listByAttribute })
  listAncestorsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/children', validator: collection.listByAttribute })
  listChildrenByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/descendants', validator: collection.listByAttribute })
  listDescendantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/siblings', validator: collection.listByAttribute })
  listSiblingsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns', validator: collection.list })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection.get })
  getOffer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers', validator: collection.list })
  listOffers(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/offers', validator: collection.list })
  listOffersByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers/:customer_uuid', validator: collection.get })
  getCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers', validator: collection.list })
  listCustomers(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  /**
   * Get Public Campaign By UUID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid', validator: collection.get })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Public Campaign By Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle', validator: collection.listByAttribute })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/parent', validator: collection.getByAttribute })
  getPublicParentByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/ancestors', validator: collection.listByAttribute })
  listPublicAncestorsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/children', validator: collection.listByAttribute })
  listPublicChildrenByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/descendants', validator: collection.listByAttribute })
  listPublicDescendantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/siblings', validator: collection.listByAttribute })
  listPublicSiblingsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Public Campaigns
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns', validator: collection.list })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Public Campaign Offer By UUID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection.get })
  getPublicOffer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Public Campaign's Public Offers
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers', validator: collection.list })
  listPublicOffers(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Public Campaign's Public Offers By Campaign Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/offers', validator: collection.list })
  listPublicOffersByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
