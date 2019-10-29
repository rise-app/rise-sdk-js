import { ApiClass } from '../../ApiClass'
import { Command, Action } from '../../metadata'
import { product } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelProduct extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({ method: 'POST', route: 'channels/:channel_uuid/products', validator: product[COMMANDS.CREATE_PRODUCT]})
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid', validator: product[COMMANDS.UPDATE_PRODUCT] })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/publish', validator: product[COMMANDS.PUBLISH_PRODUCT]})
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/unpublish', validator: product[COMMANDS.UNPUBLISH_PRODUCT]})
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid', validator: product[ACTIONS.GET_PRODUCT] })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle', validator: product[ACTIONS.FIND_PRODUCT] })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/products', validator: product[ACTIONS.LIST_PRODUCTS] })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/search/products', validator: product[ACTIONS.LIST_PRODUCTS] })
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product.get })
  // getVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getVariant = ChannelProductVariant.prototype.getVariant

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product.list })
  // listVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariants = ChannelProductVariant.prototype.listVariants

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle/variants', validator: product.list })
  // listVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariantsByHandle = ChannelProductVariant.prototype.listVariantsByHandle

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid', validator: product[ACTIONS.GET_PUBLIC_PRODUCT] })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle', validator: product[ACTIONS.FIND_PUBLIC_PRODUCT] })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products', validator: product[ACTIONS.LIST_PUBLIC_PRODUCTS] })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/search/products', validator: product[ACTIONS.LIST_PUBLIC_PRODUCTS] })
  searchPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid', validator: product.get })
  // getPublicVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getPublicVariant = ChannelProductVariant.prototype.getPublicVariant

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants', validator: product.list })
  // listPublicVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listPublicVariants = ChannelProductVariant.prototype.listPublicVariants

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle/variants', validator: product.list })
  // listPublicVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  listPublicVariantsByHandle = ChannelProductVariant.prototype.listPublicVariantsByHandle

}

export class ChannelProductVariant extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({ method: 'POST', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product[COMMANDS.ADD_PRODUCT_VARIANT]})
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'POST', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product[COMMANDS.ADD_PRODUCT_VARIANTS]})
  bulkAdd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'PUT', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product[COMMANDS.UPDATE_PRODUCT_VARIANT]})
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({ method: 'DELETE', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product[COMMANDS.REMOVE_PRODUCT_VARIANT]})
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product[ACTIONS.GET_PRODUCT_VARIANT] })
  getVariant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product[ACTIONS.LIST_PRODUCT_VARIANTS] })
  listVariants(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  @Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle/variants', validator: product[ACTIONS.FIND_PRODUCT_VARIANTS] })
  listVariantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid', validator: product[ACTIONS.GET_PUBLIC_PRODUCT_VARIANT] })
  getPublicVariant(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants', validator: product[ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS] })
  listPublicVariants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle/variants', validator: product[ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS] })
  listPublicVariantsByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
