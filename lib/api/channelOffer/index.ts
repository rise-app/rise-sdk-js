import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { offer } from '../../validators'
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
  getVariant = ChannelOfferVariant.prototype.getVariant

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer.list })
  // listVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariants = ChannelOfferVariant.prototype.listVariants

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: offer.list })
  // listVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariantsByHandle = ChannelOfferVariant.prototype.listVariantsByHandle

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
  getPublicVariant = ChannelOfferVariant.prototype.getPublicVariant

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer.list })
  // listPublicVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listPublicVariants = ChannelOfferVariant.prototype.listPublicVariants

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: offer.list })
  // listPublicVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  listPublicVariantsByHandle = ChannelOfferVariant.prototype.listPublicVariantsByHandle

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
  getVariant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer[ACTIONS.LIST_OFFER_VARIANTS] })
  listVariants(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle/variants', validator: offer[ACTIONS.FIND_OFFER_VARIANTS] })
  listVariantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: offer[ACTIONS.GET_PUBLIC_OFFER_VARIANT] })
  getPublicVariant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer[ACTIONS.LIST_PUBLIC_OFFER_VARIANTS] })
  listPublicVariants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle/variants', validator: offer[ACTIONS.FIND_PUBLIC_OFFER_VARIANTS] })
  listPublicVariantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
