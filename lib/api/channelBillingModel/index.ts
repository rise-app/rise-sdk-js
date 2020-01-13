import { ApiClass } from '../../ApiClass'
import { Action, Command } from '../../metadata'
import { billing_model as billingModels } from '../../validators'

export class ChannelBillingModel extends ApiClass {
  // TODO validators
  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/billing_models',
    // validator: billingModels.create
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/billing_models',
    // validator: billingModels.add
  })
  add(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/billing_models/:model_uuid',
    // validator: billingModels.update
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/billing_models/:model_uuid/publish',
    // validator: billingModels.update
  })
  publish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validator
  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/billing_models/:model_uuid/unpublish',
    // validator: billingModels.update
  })
  unpublish(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/billing_models/:model_uuid',
    // validator: billingModels.get
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/billing_models',
    // validator: billingModels.list
  })
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

}
