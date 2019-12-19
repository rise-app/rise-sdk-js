import { AUTH_COMMANDS, AUTH_EVENTS, AUTH_ACTIONS } from './auth'
import { APPLICATION_ACTIONS, APPLICATION_COMMANDS, APPLICATION_EVENTS } from './application'
import { BILLING_MODEL_ACTIONS, BILLING_MODEL_COMMANDS, BILLING_MODEL_EVENTS } from './billing_model'
import { CART_ACTIONS, CART_COMMANDS, CART_EVENTS } from './cart'
import { COLLECTION_ACTIONS, COLLECTION_COMMANDS, COLLECTION_EVENTS } from './collection'
import { CHANNEL_ACTIONS, CHANNEL_COMMANDS, CHANNEL_EVENTS } from './channel'
import { COUNTRY_ACTIONS, COUNTRY_COMMANDS, COUNTRY_EVENTS } from './country'
import { CUSTOMER_ACTIONS, CUSTOMER_COMMANDS, CUSTOMER_EVENTS } from './customer'
import { FEED_ACTIONS, FEED_COMMANDS, FEED_EVENTS } from './feed'
import { FULFILLMENT_ACTIONS, FULFILLMENT_COMMANDS, FULFILLMENT_EVENTS } from './fulfillment'
import { FULFILLMENT_SERVICE_ACTIONS, FULFILLMENT_SERVICE_COMMANDS, FULFILLMENT_SERVICE_EVENTS } from './fulfillment_service'
import { GATEWAY_ACTIONS, GATEWAY_COMMANDS, GATEWAY_EVENTS } from './gateway'
import { OFFER_ACTIONS, OFFER_COMMANDS, OFFER_EVENTS } from './offer'
import { ORDER_ACTIONS, ORDER_COMMANDS, ORDER_EVENTS } from './order'
import { PERMISSION_ACTIONS, PERMISSION_COMMANDS, PERMISSION_EVENTS } from './permission'
import { SUBSCRIPTION_ACTIONS, SUBSCRIPTION_COMMANDS, SUBSCRIPTION_EVENTS } from './subscription'
import { TASK_ACTIONS, TASK_COMMANDS, TASK_EVENTS } from './task'
import { TRANSACTION_ACTIONS, TRANSACTION_COMMANDS, TRANSACTION_EVENTS } from './transaction'
import { USER_ACTIONS, USER_COMMANDS, USER_EVENTS } from './user'
import { VENDOR_ACTIONS, VENDOR_COMMANDS, VENDOR_EVENTS } from './vendor'
import { PRODUCT_ACTIONS, PRODUCT_COMMANDS, PRODUCT_EVENTS } from './product'


export const ACTIONS = {
  ...AUTH_ACTIONS,
  ...APPLICATION_ACTIONS,
  ...BILLING_MODEL_ACTIONS,
  ...CART_ACTIONS,
  ...CHANNEL_ACTIONS,
  ...COLLECTION_ACTIONS,
  ...COUNTRY_ACTIONS,
  ...CUSTOMER_ACTIONS,
  ...FEED_ACTIONS,
  ...FULFILLMENT_ACTIONS,
  ...FULFILLMENT_SERVICE_ACTIONS,
  ...GATEWAY_ACTIONS,
  ...OFFER_ACTIONS,
  ...ORDER_ACTIONS,
  ...PERMISSION_ACTIONS,
  ...PRODUCT_ACTIONS,
  ...SUBSCRIPTION_ACTIONS,
  ...TASK_ACTIONS,
  ...TRANSACTION_ACTIONS,
  ...USER_ACTIONS,
  ...VENDOR_ACTIONS
}

export const COMMANDS = {
  ...AUTH_COMMANDS,
  ...APPLICATION_COMMANDS,
  ...BILLING_MODEL_COMMANDS,
  ...CART_COMMANDS,
  ...CHANNEL_COMMANDS,
  ...COLLECTION_COMMANDS,
  ...COUNTRY_COMMANDS,
  ...CUSTOMER_COMMANDS,
  ...FEED_COMMANDS,
  ...FULFILLMENT_COMMANDS,
  ...FULFILLMENT_SERVICE_COMMANDS,
  ...GATEWAY_COMMANDS,
  ...OFFER_COMMANDS,
  ...ORDER_COMMANDS,
  ...PERMISSION_COMMANDS,
  ...PRODUCT_COMMANDS,
  ...SUBSCRIPTION_COMMANDS,
  ...TASK_COMMANDS,
  ...TRANSACTION_COMMANDS,
  ...USER_COMMANDS,
  ...VENDOR_COMMANDS
}

export const EVENTS = {
  ...AUTH_EVENTS,
  ...APPLICATION_EVENTS,
  ...BILLING_MODEL_EVENTS,
  ...COLLECTION_EVENTS,
  ...CART_EVENTS,
  ...CHANNEL_EVENTS,
  ...COUNTRY_EVENTS,
  ...CUSTOMER_EVENTS,
  ...FEED_EVENTS,
  ...FULFILLMENT_EVENTS,
  ...FULFILLMENT_SERVICE_EVENTS,
  ...GATEWAY_EVENTS,
  ...OFFER_EVENTS,
  ...ORDER_EVENTS,
  ...PERMISSION_EVENTS,
  ...PRODUCT_EVENTS,
  ...SUBSCRIPTION_EVENTS,
  ...TASK_EVENTS,
  ...TRANSACTION_EVENTS,
  ...USER_EVENTS,
  ...VENDOR_EVENTS
}
