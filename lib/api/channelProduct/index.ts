import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { collection, offer, product, user } from '../../validators'
import { ACTIONS, COMMANDS } from '../../enums'

export class ChannelProduct extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/products',
    validator: product[COMMANDS.CREATE_PRODUCT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid',
    validator: product[COMMANDS.UPDATE_PRODUCT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/publish',
    validator: product[COMMANDS.PUBLISH_PRODUCT]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/unpublish',
    validator: product[COMMANDS.UNPUBLISH_PRODUCT]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid',
    validator: product[ACTIONS.GET_PRODUCT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/handle/:handle',
    validator: product[ACTIONS.FIND_PRODUCT]
  })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Products
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/products',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Products from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/products',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Products from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/products',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List all Offers Descending from this Channel Product
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/offers',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  listOffers(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid', validator: product.get })
  // getVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getVariant = ChannelProductVariant.prototype.get

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/:product_uuid/variants', validator: product.list })
  // listVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariants = ChannelProductVariant.prototype.list

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/products/handle/:handle/variants', validator: product.list })
  // listVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listVariantsByHandle = ChannelProductVariant.prototype.listByHandle


  /**
   * Upload a Product CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/products',
    validator: product[COMMANDS.UPLOAD_PRODUCTS]
  })
  @Upload()
  upload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Products Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/products/:upload_uuid',
    validator: product[COMMANDS.PROCESS_UPLOADED_PRODUCTS]
  })
  processUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Upload a Product Metadata CSV to Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/products/metadata',
    validator: product[COMMANDS.UPLOAD_PRODUCT_METADATA]
  })
  @Upload()
  uploadMetadata(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Process a Given Channel's Product Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/uploads/products/metadata/:upload_uuid',
    validator: product[COMMANDS.PROCESS_UPLOADED_PRODUCT_METADATA]
  })
  processMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Product Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/products/:upload_uuid',
    validator: product[ACTIONS.GET_PRODUCT_UPLOAD_RESULT]
  })
  getUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Product Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/products',
    validator: product[ACTIONS.LIST_PRODUCT_UPLOAD_RESULTS]
  })
  @Paginate()
  listUploads(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel Product Metadata Upload Result
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/products/metadata/:upload_uuid',
    validator: product[ACTIONS.GET_PRODUCT_METADATA_UPLOAD_RESULT]
  })
  @Paginate()
  getMetadataUpload(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Product Metadata Upload Results
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/uploads/products/metadata',
    validator: product[ACTIONS.LIST_PRODUCT_METADATA_UPLOAD_RESULTS]
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
    route: 'channels/:channel_uuid/public/products/:product_uuid',
    validator: product[ACTIONS.GET_PUBLIC_PRODUCT]
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/products/handle/:handle',
    validator: product[ACTIONS.FIND_PUBLIC_PRODUCT]
  })
  getPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/products',
    validator: product[ACTIONS.LIST_PUBLIC_PRODUCTS]
  })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/search/products',
    validator: product[ACTIONS.LIST_PUBLIC_PRODUCTS]
  })
  searchPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid', validator: product.get })
  // getPublicVariant(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  getPublicVariant = ChannelProductVariant.prototype.getPublic

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/:product_uuid/variants', validator: product.list })
  // listPublicVariants(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  listPublicVariants = ChannelProductVariant.prototype.listPublic

  // @Action({ method: 'GET', route: 'channels/:channel_uuid/public/products/handle/:handle/variants', validator: product.list })
  // listPublicVariantsByHandle(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  listPublicVariantsByHandle = ChannelProductVariant.prototype.listPublicByHandle

}

export class ChannelProductVariant extends ApiClass {

  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/products/:product_uuid/variants',
    validator: product[COMMANDS.ADD_PRODUCT_VARIANT]
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/products/:product_uuid/variants',
    validator: product[COMMANDS.ADD_PRODUCT_VARIANTS]
  })
  bulkAdd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: product[COMMANDS.UPDATE_PRODUCT_VARIANT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'DELETE',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: product[COMMANDS.REMOVE_PRODUCT_VARIANT]
  })
  remove(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid',
    validator: product[ACTIONS.GET_PRODUCT_VARIANT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/variants',
    validator: product[ACTIONS.LIST_PRODUCT_VARIANTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/handle/:handle/variants',
    validator: product[ACTIONS.FIND_PRODUCT_VARIANTS]
  })
  listByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/products/:product_uuid/variants/:variant_uuid',
    validator: product[ACTIONS.GET_PUBLIC_PRODUCT_VARIANT]
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/products/:product_uuid/variants',
    validator: product[ACTIONS.LIST_PUBLIC_PRODUCT_VARIANTS]
  })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/products/handle/:handle/variants',
    validator: product[ACTIONS.FIND_PUBLIC_PRODUCT_VARIANTS]
  })
  listPublicByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelProductImage extends ApiClass {
  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  // TODO validators
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/products/:product_uuid/images',
    validator: product[COMMANDS.CREATE_PRODUCT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/images/:image_uuid',
    validator: product[COMMANDS.UPDATE_PRODUCT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/images/:image_uuid/publish',
    validator: product[COMMANDS.PUBLISH_PRODUCT]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/images/:image_uuid/unpublish',
    validator: product[COMMANDS.UNPUBLISH_PRODUCT]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/images/:image_uuid',
    validator: product[ACTIONS.GET_PRODUCT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/images',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelProductVariantImage extends ApiClass {
  /**********************************
   * PRIVATE ENDPOINTS
   **********************************/

  // TODO validators
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images',
    validator: product[COMMANDS.CREATE_PRODUCT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images/:image_uuid',
    validator: product[COMMANDS.UPDATE_PRODUCT]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images/:image_uuid/publish',
    validator: product[COMMANDS.PUBLISH_PRODUCT]
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images/:image_uuid/unpublish',
    validator: product[COMMANDS.UNPUBLISH_PRODUCT]
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images/:image_uuid',
    validator: product[ACTIONS.GET_PRODUCT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/variants/:variant_uuid/images',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

export class ChannelProductVendor extends ApiClass {
  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/vendors/:vendor_uuid',
    validator: product[ACTIONS.GET_PRODUCT]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/products/:product_uuid/vendors',
    validator: product[ACTIONS.LIST_PRODUCTS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelProductEvent extends ApiClass {
  /**
   * List Product's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: '/channels/:channel_uuid/products/:product_uuid/events',
    validator: product[ACTIONS.LIST_PRODUCT_EVENTS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Product's events
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: '/channels/:channel_uuid/products/:product_uuid/events/:event_uuid',
    // validator: product[ACTIONS.GET_PRODUCT_EVENT]
  })
  @Paginate()
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Create Product's event
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Command({
    method: 'POST',
    route: '/channels/:channel_uuid/products/:product_uuid/events',
    // validator: product[COMMANDS.CREATE_EVENT]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
