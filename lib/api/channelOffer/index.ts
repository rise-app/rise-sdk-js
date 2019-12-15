import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { collection, offer } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelOffer extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({ method: 'POST', route: 'channels/:channel_uuid/offers', validator: offer[COMMANDS.CREATE_OFFER]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer[COMMANDS.UPDATE_OFFER] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/publish', validator: offer[COMMANDS.PUBLISH_OFFER]})
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/unpublish', validator: offer[COMMANDS.UNPUBLISH_OFFER]})
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer[ACTIONS.GET_OFFER] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle', validator: offer[ACTIONS.FIND_OFFER] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers', validator: offer[ACTIONS.LIST_OFFERS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/offers', validator: offer[ACTIONS.LIST_OFFERS] })
  search(data, req?, validated?) {
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

  /**
   * Upload an Offer CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/offers', validator: offer[COMMANDS.UPLOAD_OFFERS] })
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
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/offers/:upload_uuid', validator: offer[COMMANDS.PROCESS_UPLOADED_OFFERS] })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload an Offer Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/offers/metadata', validator: offer[COMMANDS.UPLOAD_OFFER_METADATA] })
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
  @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/offers/metadata/:upload_uuid', validator: offer[COMMANDS.PROCESS_UPLOADED_OFFER_METADATA] })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Offer Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/offers/:upload_uuid', validator: offer[ACTIONS.GET_OFFER_UPLOAD_RESULT] })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Offer Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/offers', validator: offer[ACTIONS.LIST_OFFER_UPLOAD_RESULTS] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/offers/metadata/:upload_uuid', validator: offer[ACTIONS.GET_OFFER_METADATA_UPLOAD_RESULT] })
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
  @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/offers/metadata', validator: offer[ACTIONS.LIST_OFFER_METADATA_UPLOAD_RESULTS] })
  @Paginate()
  listMetadataUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid', validator: offer[ACTIONS.GET_PUBLIC_OFFER] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle', validator: offer[ACTIONS.FIND_PUBLIC_OFFER] })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers', validator: offer[ACTIONS.LIST_PUBLIC_OFFERS] })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/offers', validator: offer[ACTIONS.LIST_PUBLIC_OFFERS] })
  searchPublic(data, req?, validated?) {
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

}

export class ChannelOfferVariant extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({ method: 'POST', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer[COMMANDS.ADD_OFFER_VARIANT]})
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer[COMMANDS.ADD_OFFER_VARIANTS]})
  bulkAdd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer[COMMANDS.UPDATE_OFFER_VARIANT]})
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer[COMMANDS.REMOVE_OFFER_VARIANT]})
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer[ACTIONS.GET_OFFER_VARIANT] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer[ACTIONS.LIST_OFFER_VARIANTS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: offer[ACTIONS.FIND_OFFER_VARIANTS] })
  listByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: offer[ACTIONS.GET_PUBLIC_OFFER_VARIANT] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer[ACTIONS.LIST_PUBLIC_OFFER_VARIANTS] })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: offer[ACTIONS.FIND_PUBLIC_OFFER_VARIANTS] })
  listPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelPublicOffer extends ApiClass {
  get = ChannelOffer.prototype.getPublic
  getByHandle = ChannelOffer.prototype.getPublicByHandle
  list = ChannelOffer.prototype.listPublic
  search = ChannelOffer.prototype.searchPublic
}

export class ChannelPublicOfferVariant extends ApiClass {
  getVariant = ChannelOfferVariant.prototype.getPublic
  listVariants = ChannelOfferVariant.prototype.listPublic
  listVariantsByHandle = ChannelOfferVariant.prototype.listPublicByHandle
}
