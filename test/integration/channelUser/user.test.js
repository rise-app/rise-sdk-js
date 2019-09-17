const RiSE = require('../../../dist').RiSE
const channel_uuid = process.env.RISE_CHANNEL
const public_key = process.env.RISE_PUBLIC
const private_key = process.env.RISE_PRIVATE

const assert = require('assert')

describe('# RiSE Channel User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user

  before(() => {
    rise = new RiSE({
      sandbox: true,
      public_key: public_key,
      private_key: private_key
    })
  })

  it('## Should Register a user', (done) => {

    const username = `sdkjstest${Math.floor((Math.random() * 100) + 1)}`

    rise.channelUser.register({
      channel_uuid: channel_uuid,
      username: username,
      password: 'test1234567'
    })
      .then(_res => {
        userSession = _res.session
        userToken = _res.token
        user = _res.data.ChannelUser

        assert.ok(userSession)
        assert.ok(userToken)

        // console.log('brk user', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('## Should Update a user', (done) => {

    rise.channelUser.update({
      channel_uuid: channel_uuid,
      user_uuid: user.user_uuid,
      name_first: 'Hello',
      name_last: 'World'
    }, {
      token: userToken,
      session: userSession
    })
      .then(_res => {
        user = _res.data
        // assert.equal(user.name_first, 'Hello')
        // assert.equal(user.name_last, 'World')

        // console.log('brk user', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

})
