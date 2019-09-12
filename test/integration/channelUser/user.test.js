const RiSE = require('../../../dist').RiSE
const channel_uuid = process.env.RISE_CHANNEL
const public_key = process.env.RISE_PUBLIC
const private_key = process.env.RISE_PRIVATE


describe('RiSE Channel User API', () => {
  let rise
  before(() => {
    rise = new RiSE({
      sandbox: true
    })
  })
  it('should create a user', (done) => {

    const username = `sdkjstest${Math.floor((Math.random() * 100) + 1)}`

    rise.channelUser.create({
      channel_uuid: channel_uuid,
      username: username
    })
      .then(_res => {
        console.log('brk user', _res)
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})