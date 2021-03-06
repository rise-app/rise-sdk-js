import { ApiClass } from '../../ApiClass'
import { Action, Command, Paginate } from '../../metadata'
import { country } from '../../validators'
import { ACTIONS } from '../../enums'

/**
 * ChannelCountry
 * @description
 */
export class ChannelCountry extends ApiClass {
  /**
   * Add a Country to Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({method: 'POST', route: 'channels/:channel_uuid/countries', validator: country.add})
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Country on Channel
   * @param data
   * @param req
   * @param validated
   */
  @Command({method: 'PUT', route: 'channels/:channel_uuid/countries/:country_code', validator: country.update})
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Publish a Country on Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/countries/:country_code/publish',
    validator: country.update
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Unpublish a Country on Channel
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/countries/:country_code/unpublish',
    validator: country.update
  })
  uunpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Country on Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/countries/:country_code', validator: country.get})
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Countries on Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/countries', validator: country.list})
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }


  /**
   * Search All Countries of a given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/countries',
    validator: country[ACTIONS.LIST_COUNTRIES]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Countries from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/countries',
    validator: country[ACTIONS.LIST_DESCENDANTS_COUNTRIES]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Countries from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/countries',
    validator: country[ACTIONS.LIST_DESCENDANTS_COUNTRIES]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  /**
   * Get a Published Country
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/public/countries/:country_code', validator: country.get})
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Published Countries
   * @param data
   * @param req
   * @param validated
   */
  @Action({method: 'GET', route: 'channels/:channel_uuid/public/countries', validator: country.list})
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}

/**
 * ChannelCountryProvince
 * @description
 */
export class ChannelCountryProvince extends ApiClass {
  @Command({method: 'POST', route: 'channels/:channel_uuid/countries/:country_code/provinces', validator: country.add})
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code',
    validator: country.update
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code/publish',
    validator: country.update
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code/unpublish',
    validator: country.update
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/countries/:country_code/provinces/:province_code',
    validator: country.get
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Action({method: 'GET', route: 'channels/:channel_uuid/countries/:country_code/provinces', validator: country.list})
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**********************************
   * PUBLIC ENDPOINTS
   **********************************/

  /**
   * Get Published Province by Selected Country
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/countries/:country_code/provinces/:province_code',
    validator: country.get
  })
  getPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List Published Provinces by Selected Country
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/public/countries/:country_code/provinces',
    validator: country.list
  })
  listPublic(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}


export class ChannelPublicCountry extends ApiClass {
  get = ChannelCountry.prototype.getPublic
  list = ChannelCountry.prototype.listPublic
}

export class ChannelPublicCountryProvince extends ApiClass {
  get = ChannelCountryProvince.prototype.getPublic
  list = ChannelCountryProvince.prototype.listPublic
}
