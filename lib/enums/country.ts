export const COUNTRY_COMMANDS = {
  'ADD_COUNTRY': 'add.channel.:channel_uuid.country',
  'ADD_COUNTRIES': 'add.channel.:channel_uuid.list.country',
  'UPDATE_COUNTRY': 'update.channel.:channel_uuid.country.:country_code',
  'REMOVE_COUNTRY': 'remove.channel.:channel_uuid.country.:country_code',
  'PUBLISH_COUNTRY': 'publish.channel.:channel_uuid.country.:country_code',
  'PUBLISH_COUNTRIES': 'publish.channel.:channel_uuid.list.country',
  'UNPUBLISH_COUNTRY': 'unpublish.channel.:channel_uuid.country.:country_code',

  'ADD_PROVINCE': 'add.channel.:channel_uuid.country.:country_code.province.:province_code',
  'ADD_PROVINCES': 'add.channel.:channel_uuid.country.:country_code.list.province',
  'UPDATE_PROVINCE': 'update.channel.:channel_uuid.country.:country_code.province.:province_code',
  'REMOVE_PROVINCE': 'remove.channel.:channel_uuid.country.:country_code.province.:province_code',
  'PUBLISH_PROVINCE': 'publish.channel.:channel_uuid.country.:country_code.province.:province_code',
  'PUBLISH_PROVINCES': 'publish.channel.:channel_uuid.country.:country_code.list.province',
  'UNPUBLISH_PROVINCE': 'unpublish.channel.:channel_uuid.country.:country_code.province.:province_code',
}

export const COUNTRY_ACTIONS = {
  'GET_COUNTRY': 'channel.country.get',
  'FIND_COUNTRY': 'channel.country.get', // ALIAS
  'LIST_COUNTRIES': 'channel.country.list',
  'FIND_COUNTRIES': 'channel.country.list', // ALIAS
  'GET_COUNTRY_PROVINCE': 'channel.country.province.get',
  'FIND_COUNTRY_PROVINCE': 'channel.country.province.get', // ALIAS
  'LIST_COUNTRY_PROVINCES': 'channel.country.province.list',
  'FIND_COUNTRY_PROVINCES': 'channel.country.province.list', // ALIAS
}

export const COUNTRY_EVENTS = {
  'COUNTRY_ADDED': 'channel.:channel_uuid.country.:country_code.added',
  'COUNTRIES_ADDED': 'channel.:channel_uuid.country.added.list',
  'COUNTRY_UPDATED': 'channel.:channel_uuid.country.:country_code.updated',
  'COUNTRY_REMOVED': 'channel.:channel_uuid.country.:country_code.removed',
  'COUNTRY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.published',
  'COUNTRIES_PUBLISHED': 'channel.:channel_uuid.country.published.list',
  'COUNTRY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.unpublished',

  'PROVINCE_ADDED': 'channel.:channel_uuid.country.:country_code.province.:province_code.added',
  'PROVINCES_ADDED': 'channel.:channel_uuid.country.:country_code.province.added.list',
  'PROVINCE_UPDATED': 'channel.:channel_uuid.country.:country_code.province.:province_code.updated',
  'PROVINCE_REMOVED': 'channel.:channel_uuid.country.:country_code.province.:province_code.removed',
  'PROVINCE_PUBLISHED': 'channel.:channel_uuid.country.:country_code.province.:province_code.published',
  'PROVINCES_PUBLISHED': 'channel.:channel_uuid.country.:country_code.province.published.list',
  'PROVINCE_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.province.:province_code.unpublished',

  'COUNTY_ADDED': 'channel.:channel_uuid.country.:country_code.county.:county_code.added',
  'COUNTIES_ADDED': 'channel.:channel_uuid.country.:country_code.county.added.list',
  'COUNTY_UPDATED': 'channel.:channel_uuid.country.:country_code.county.:county_code.updated',
  'COUNTY_REMOVED': 'channel.:channel_uuid.country.:country_code.county.:county_code.removed',
  'COUNTY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.county.:county_code.published',
  'COUNTY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.county.:county_code.unpublished',

  'CITY_ADDED': 'channel.:channel_uuid.country.:country_code.city.:city_code.added',
  'CITIES_ADDED': 'channel.:channel_uuid.country.:country_code.city.:city_code.added.list',
  'CITY_UPDATED': 'channel.:channel_uuid.country.:country_code.city.:city_code.updated',
  'CITY_REMOVED': 'channel.:channel_uuid.country.:country_code.city.:city_code.removed',
  'CITY_PUBLISHED': 'channel.:channel_uuid.country.:country_code.city.:city_code.published',
  'CITY_UNPUBLISHED': 'channel.:channel_uuid.country.:country_code.city.:city_code.unpublished',
}
