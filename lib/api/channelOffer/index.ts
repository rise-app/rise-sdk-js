import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { offer } from '../../validators'

export class ChannelOffer extends ApiClass {
  @Command({ method: 'POST', route: 'channels/:channel_uuid/offers', validator: offer.create })
  create(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer.update })
  update(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid', validator: offer.get })
  get(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/handle/:handle', validator: offer.getByAttribute })
  getByHandle(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers', validator: offer.list })
  list(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/offers', validator: offer.list })
  search(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
  getVariant(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/offers/:offer_uuid/variants', validator: offer.list })
  listVariants(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid', validator: offer.get })
  getPublic(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/handle/:handle', validator: offer.listByAttribute })
  getPublicByHandle(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers', validator: offer.list })
  listPublic(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/offers', validator: offer.list })
  searchPublic(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants/:variant_uuid', validator: offer.get })
  getPublicVariant(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/offers/:offer_uuid/variants', validator: offer.list })
  listPublicVariants(data, req?, validated?) {
    return this.rise.request(req, data, validated)
  }

}
