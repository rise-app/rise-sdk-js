import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { collection } from '../../validators/collection'
import { COMMANDS, ACTIONS } from '../../enums'

export class ChannelCollection extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/collections', validator: collection[COMMANDS.CREATE_COLLECTION]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection[COMMANDS.UPDATE_COLLECTION] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/collections', validator: collection[COMMANDS.UPLOAD_COLLECTIONS] })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/collections/:upload_uuid', validator: collection[COMMANDS.PROCESS_UPLOADED_COLLECTIONS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/collections/metadata', validator: collection[COMMANDS.UPLOAD_COLLECTION_METADATA] })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/collections/metadata/:upload_uuid', validator: collection[COMMANDS.PROCESS_UPLOADED_COLLECTION_METADATA] })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Collection
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/collections/:upload_uuid', validator: collection[ACTIONS.GET_COLLECTION_UPLOAD_RESULT] })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Collection
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/collections', validator: collection[ACTIONS.LIST_COLLECTION_UPLOAD_RESULTS] })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Collection
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/collections/metadata/:upload_uuid', validator: collection[ACTIONS.GET_COLLECTION_METADATA_UPLOAD_RESULT] })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Collection
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/collections/metadata', validator: collection[ACTIONS.LIST_COLLECTION_METADATA_UPLOAD_RESULTS] })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Collection
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections/:collection_uuid', validator: collection[ACTIONS.GET_COLLECTION] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections/handle/:handle', validator: collection[ACTIONS.FIND_COLLECTION] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/collections', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/collections', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelCategory extends ApiClass {

  @Command({ method: 'POST', route: 'channels/:channel_uuid/categories', validator: collection[COMMANDS.CREATE_COLLECTION] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection[COMMANDS.UPDATE_COLLECTION] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories/:collection_uuid', validator: collection[ACTIONS.GET_COLLECTION] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories/handle/:handle', validator: collection[ACTIONS.FIND_COLLECTION] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/categories', validator: collection[ACTIONS.LIST_COLLECTIONS ] })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/categories', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products/:product_uuid', validator: collection[ACTIONS.GET_COLLECTION_PRODUCT] })
  getProduct(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/products', validator: collection[ACTIONS.LIST_COLLECTION_PRODUCTS] })
  @Paginate()
  listProducts(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid', validator: collection[ACTIONS.GET_COLLECTION] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/handle/:handle', validator: collection[ACTIONS.FIND_COLLECTION] })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/categories', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  searchPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products/:product_uuid', validator: collection[ACTIONS.GET_COLLECTION_PRODUCT] })
  getPublicProduct(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Public Products in the Given Public Category
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/categories/:collection_uuid/products', validator: collection[ACTIONS.LIST_COLLECTION_PRODUCTS] })
  @Paginate()
  listPublicProducts(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

/**
 * Channel Campaigns
 */
export class ChannelCampaign extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/campaigns', validator: collection[COMMANDS.CREATE_COLLECTION] })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection[COMMANDS.UPDATE_COLLECTION] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid', validator: collection[ACTIONS.GET_COLLECTION] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle', validator: collection[ACTIONS.FIND_COLLECTION] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/parent', validator: collection[ACTIONS.FIND_COLLECTION] })
  getParentByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/ancestors', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listAncestorsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/children', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listChildrenByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/descendants', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listDescendantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/siblings', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listSiblingsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/campaigns', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection[ACTIONS.LIST_COLLECTION_OFFERS] })
  getOffer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/offers', validator: collection[ACTIONS.LIST_COLLECTION_OFFERS] })
  @Paginate()
  listOffers(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/handle/:handle/offers', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listOffersByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers/:customer_uuid', validator: collection[ACTIONS.GET_COLLECTION_CUSTOMER] })
  getCustomer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/campaigns/:collection_uuid/customers', validator: collection[ACTIONS.LIST_COLLECTION_CUSTOMERS] })
  @Paginate()
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid', validator: collection[ACTIONS.GET_COLLECTION] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Public Campaign By Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle', validator: collection[ACTIONS.FIND_COLLECTION] })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/parent', validator: collection[ACTIONS.FIND_COLLECTION] })
  getPublicParentByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/ancestors', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listPublicAncestorsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/children', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listPublicChildrenByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/descendants', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listPublicDescendantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/siblings', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listPublicSiblingsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Public Campaigns
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Public Campaigns
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/campaigns', validator: collection[ACTIONS.LIST_COLLECTIONS] })
  @Paginate()
  searchPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get Public Campaign Offer By UUID
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers/:offer_uuid', validator: collection[ACTIONS.GET_COLLECTION_OFFER] })
  getPublicOffer(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Public Campaign's Public Offers
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/:collection_uuid/offers', validator: collection[ACTIONS.LIST_COLLECTION_OFFERS] })
  listPublicOffers(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * List Public Campaign's Public Offers By Campaign Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/campaigns/handle/:handle/offers', validator: collection[ACTIONS.FIND_COLLECTIONS] })
  @Paginate()
  listPublicOffersByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
