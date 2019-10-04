const RiSE = require('../../../dist').RiSE
const adminIdentifier = require('../../fixtures/constants').adminIdentifier
const adminPassword = require('../../fixtures/constants').adminPassword
const channel_uuid = require('../../fixtures/constants').channel_uuid
const public_key = require('../../fixtures/constants').public_key
const private_key = require('../../fixtures/constants').private_key

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

  describe('# RiSE Channel Country API Dependencies', () => {
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
  })

  describe('# RiSE Channel Country API Methods', () => {

    it.skip('## Should Create a Country Province', (done) => {

      rise.channelCountryProvince.add({
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
    it.skip('## Should Update a Country Province', (done) => {

      rise.channelCountryProvince.update({
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

    it.skip('### Should List Channel Country Provinces', (done) => {

      rise.channelCountryProvince.list({
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

      rise.channelCountryProvince.get({
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

    it.skip('### Should List Public Channel Country Provinces', (done) => {

      rise.channelCountryProvince.listPublic({
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

    it.skip('### Should Get a Public Channel Country Province', (done) => {

      rise.channelCountryProvince.getPublic({
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
})
