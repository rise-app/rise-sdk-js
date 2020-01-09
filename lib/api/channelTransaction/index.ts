import { ApiClass } from '../../ApiClass'
import { Action, Command } from '../../metadata'
import { ACTIONS, COMMANDS } from '../../enums'
// import { transaction } from '../../validators'
// import { COMMANDS } from '../../enums'

// TODO validators and enums
export class ChannelTransaction extends ApiClass {
  /**
   * Get an Order's Transaction by ID
   * @param data
   * @param req
   * @param validated
   */
  // TODO VALIDATOR
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid',
    // validator: transaction[ACTIONS.GET_ORDER]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List an Order's Transactions
   * @param data
   * @param req
   * @param validated
   */
  // TODO validator
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/transactions',
    // validator: transaction[ACTIONS.LIST_ORDERS]
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Update Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid',
    // validator: transaction[COMMANDS.UPDATE_TRANSACTION]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Authorize Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/authorize',
    // validator: transaction[COMMANDS.AUTHORIZE_TRANSACTION]
  })
  authorize(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Capture Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/capture',
    // validator: transaction[COMMANDS.CAPTURE_TRANSACTION]
  })
  capture(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Sale Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/sale',
    // validator: transaction[COMMANDS.SALE_TRANSACTION]
  })
  sale(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Void Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/void',
    // validator: transaction[COMMANDS.VOID_TRANSACTION]
  })
  void(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Refund Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/refund',
    // validator: transaction[COMMANDS.REFUND_TRANSACTION]
  })
  refund(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Cancel Order Transaction
   * @param data
   * @param req
   * @param validated
   */
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/transactions/:transaction_uuid/cancel',
    // validator: transaction[COMMANDS.CANCEL_TRANSACTION]
  })
  cancel(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
