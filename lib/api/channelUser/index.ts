import { ApiClass } from '../../ApiClass'
import { Endpoint } from '../../metadata'
import { user } from '../../validators'

export class ChannelUser extends ApiClass {
  @Endpoint({ method: 'POST', route: 'channels/:channel_uuid/users', validator: user.create })
  create(data, req) {

    console.log('computed', req)
    return user.create(data)
      .then(validation => {
        return this.rise.request(req, data, validation)
      })
  }
}