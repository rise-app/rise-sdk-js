const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Channel API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, channel, item, customer, offer

  before((done) => {
    rise = new RiSE({
      url: url,
      sandbox: true,
      public_key: public_key,
      private_key: private_key,
      globals: {
        params: {
          channel_uuid
        }
      }
    })

    rise.authenticateApiUser(
      channel_uuid,
      adminIdentifier,
      adminPassword
    )
      .then(res => {
        adminToken = res.token
        adminSession = res.session
        done()
      })
      .catch(err => done(err))
  })

  describe('# RiSE Channel API Dependencies', () => {

  })
  describe('# RiSE Channel API Methods', () => {

    it('### Should Get Supplied Global Channel', (done) => {

      rise.channel.get({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          console.log('BRK', _res)
          assert.equal(_res.object, 'Channel')
          // assert.equal(_res.event_type, EVENTS.CART_CREATED)
          channel = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should Get Supplied Global Channel', (done) => {

      rise.channel.list({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Children', (done) => {

      rise.channel.listChildren({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Siblings', (done) => {

      rise.channel.listSiblings({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('### Should list Supplied Global Channel Descendants', (done) => {

      rise.channel.listDescendants({
        // channel_uuid: channel_uuid
      })
        .then(_res => {
          // console.log('BRK', _res)
          // assert.equal(_res.list, 'Channel')

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
