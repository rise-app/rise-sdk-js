const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Country API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, country, province

  before((done) => {
    rise = new RiSE({
      sandbox: true,
      public_key: public_key,
      private_key: private_key
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

  it.skip('## Should Create a Country', (done) => {

    rise.channelCountry.add({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        country = _res.data
        // console.log('brk country', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Country', (done) => {

    rise.channelCountry.update({
      channel_uuid: channel_uuid,
      country_code: country.country_code
    })
      .then(_res => {
        country = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Countries', (done) => {

    rise.channelCountry.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        country = _res.data[0]

        console.log('brk country', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Country', (done) => {

    rise.channelCountry.get({
      channel_uuid: channel_uuid,
      country_code: country.country_code
    })
      .then(_res => {
        country = _res.data

        console.log('brk country', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Public Channel Countries', (done) => {

    rise.channelCountry.listPublic({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        country = _res.data[0]

        console.log('brk country', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Public Channel Country', (done) => {

    rise.channelCountry.getPublic({
      channel_uuid: channel_uuid,
      country_code: country.country_code
    })
      .then(_res => {
        country = _res.data

        console.log('brk country', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
