import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { offer, user } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelOffer extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({method: 'POST', route: 'channels/:channel_uuid/offers', validator: offer[COMMANDS.CREATE_OFFER]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer[COMMANDS.UPDATE_OFFER]})
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/publish',
    validator: offer[COMMANDS.PUBLISH_OFFER]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/unpublish',
    validator: offer[COMMANDS.UNPUBLISH_OFFER]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer[ACTIONS.GET_OFFER]})
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle', validator: offer[ACTIONS.FIND_OFFER]})
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/offers', validator: offer[ACTIONS.LIST_OFFERS]})
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/search/offers', validator: offer[ACTIONS.LIST_OFFERS]})
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Offers from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/descendants/offers', validator: offer[ACTIONS.LIST_OFFERS]})
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Offers from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/offers',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get the Offer's Root Product
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/product',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getProduct(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
  // getVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getVariant = ChannelOfferVariant.prototype.get

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer.list })
  // listVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariants = ChannelOfferVariant.prototype.list

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: offer.list })
  // listVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariantsByHandle = ChannelOfferVariant.prototype.listByHandle


  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/campaigns/:collection_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getCampaign(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/campaigns',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listCampaigns(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/campaigns',
    validator: offer[COMMANDS.ADD_OFFER_CAMPAIGN]
  })
  addCampaign(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/offers/:offer_uuid/campaigns/:collection_uuid',
    validator: offer[COMMANDS.REMOVE_OFFER_CAMPAIGN]
  })
  removeCampaign(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/up_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getUpSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/up_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listUpSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/up_sells',
    validator: offer[COMMANDS.ADD_OFFER_UP_SELL]
  })
  addUpSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/offers/:offer_uuid/up_sells/:offer_uuid',
    validator: offer[COMMANDS.REMOVE_OFFER_UP_SELL]
  })
  removeUpSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/cross_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getCrossSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/cross_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listCrossSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/cross_sells',
    validator: offer[COMMANDS.ADD_OFFER_CROSS_SELL]
  })
  addCrossSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/offers/:offer_uuid/cross_sells/:offer_uuid',
    validator: offer[COMMANDS.REMOVE_OFFER_CROSS_SELL]
  })
  removeCrossSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/down_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getDownSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/down_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listDownSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }



  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/down_sells',
    validator: offer[COMMANDS.ADD_OFFER_DOWN_SELL]
  })
  addDownSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/offers/:offer_uuid/down_sells/:offer_uuid',
    validator: offer[COMMANDS.REMOVE_OFFER_DOWN_SELL]
  })
  removeDownSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload an Offer CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({method: 'POST', route: 'channels/:channel_uuid/uploads/offers', validator: offer[COMMANDS.UPLOAD_OFFERS]})
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Offers Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/offers/:upload_uuid',
    validator: offer[COMMANDS.PROCESS_UPLOADED_OFFERS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload an Offer Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/offers/metadata',
    validator: offer[COMMANDS.UPLOAD_OFFER_METADATA]
  })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Offer Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/offers/metadata/:upload_uuid',
    validator: offer[COMMANDS.PROCESS_UPLOADED_OFFER_METADATA]
  })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Offer Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/offers/:upload_uuid',
    validator: offer[ACTIONS.GET_OFFER_UPLOAD_RESULT]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Offer Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/offers',
    validator: offer[ACTIONS.LIST_OFFER_UPLOAD_RESULTS]
  })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Offer Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/offers/metadata/:upload_uuid',
    validator: offer[ACTIONS.GET_OFFER_METADATA_UPLOAD_RESULT]
  })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Offer Metadata Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/offers/metadata',
    validator: offer[ACTIONS.LIST_OFFER_METADATA_UPLOAD_RESULTS]
  })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid',
    validator: offer[ACTIONS.GET_PUBLIC_OFFER]
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/handle/:handle',
    validator: offer[ACTIONS.FIND_PUBLIC_OFFER]
  })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/public/offers', validator: offer[ACTIONS.LIST_PUBLIC_OFFERS]})
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/search/offers',
    validator: offer[ACTIONS.LIST_PUBLIC_OFFERS]
  })
  searchPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/up_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getPublicUpSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/up_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listPublicUpSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/cross_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getPublicCrossSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/cross_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listPublicCrossSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/down_sells/:offer_uuid',
    validator: offer[ACTIONS.GET_OFFER]
  })
  getPublicDownSell(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/down_sells',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  @Paginate()
  listPublicDownSells(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
  // getPublicVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getPublicVariant = ChannelOfferVariant.prototype.getPublic

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer.list })
  // listPublicVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listPublicVariants = ChannelOfferVariant.prototype.listPublic

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: offer.list })
  // listPublicVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  listPublicVariantsByHandle = ChannelOfferVariant.prototype.listPublicByHandle


  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/campaigns',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  listPublicCampaigns(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/campaigns/:collection_uuid',
    validator: offer[ACTIONS.LIST_OFFERS]
  })
  getPublicCampaign(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}

export class ChannelOfferVariant extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants',
    validator: offer[COMMANDS.ADD_OFFER_VARIANT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants',
    validator: offer[COMMANDS.ADD_OFFER_VARIANTS]
  })
  bulkAdd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid',
    validator: offer[COMMANDS.UPDATE_OFFER_VARIANT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid',
    validator: offer[COMMANDS.REMOVE_OFFER_VARIANT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid',
    validator: offer[ACTIONS.GET_OFFER_VARIANT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/variants',
    validator: offer[ACTIONS.LIST_OFFER_VARIANTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/handle/:handle/variants',
    validator: offer[ACTIONS.FIND_OFFER_VARIANTS]
  })
  listByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid',
    validator: offer[ACTIONS.GET_PUBLIC_OFFER_VARIANT]
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants',
    validator: offer[ACTIONS.LIST_PUBLIC_OFFER_VARIANTS]
  })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/offers/handle/:handle/variants',
    validator: offer[ACTIONS.FIND_PUBLIC_OFFER_VARIANTS]
  })
  listPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelPublicOffer extends ApiClass {
  get = ChannelOffer.prototype.getPublic
  getByHandle = ChannelOffer.prototype.getPublicByHandle
  list = ChannelOffer.prototype.listPublic
  search = ChannelOffer.prototype.searchPublic

  getCampaign = ChannelOffer.prototype.getPublicCampaign
  listCampaigns = ChannelOffer.prototype.listPublicCampaigns

  getUpSell = ChannelOffer.prototype.getPublicUpSell
  listUpSell = ChannelOffer.prototype.listPublicUpSells
  getCrossSell = ChannelOffer.prototype.getPublicCrossSell
  listCrossSell = ChannelOffer.prototype.listPublicCrossSells
  getDownSell = ChannelOffer.prototype.getPublicDownSell
  listDownSell = ChannelOffer.prototype.listPublicDownSells
}

export class ChannelPublicOfferVariant extends ApiClass {
  get = ChannelOfferVariant.prototype.getPublic
  list = ChannelOfferVariant.prototype.listPublic
  listByHandle = ChannelOfferVariant.prototype.listPublicByHandle
}


export class ChannelOfferUpload extends ApiClass {
  upload = ChannelOffer.prototype.upload
  process = ChannelOffer.prototype.processUpload
  get = ChannelOffer.prototype.getUpload
  list = ChannelOffer.prototype.listUploads

}

export class ChannelOfferMetadataUpload extends ApiClass {
  upload = ChannelOffer.prototype.uploadMetadata
  process = ChannelOffer.prototype.processMetadataUpload
  get = ChannelOffer.prototype.getMetadataUpload
  list = ChannelOffer.prototype.listMetadataUploads
}


export class ChannelOfferEvent extends ApiClass {
  /**
   * List Offer's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/events',
    validator: offer[ACTIONS.LIST_OFFER_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Offer's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/offers/:offer_uuid/events/:event_uuid',
    // validator: offer[ACTIONS.GET_OFFER_EVENT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Offer's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/offers/:offer_uuid/events',
    // validator: offer[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
