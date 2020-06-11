const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel BillingModel API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, billingModel, province

  before((done) => {
    rise = new RiSE({
      url: url,
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

  it.skip('## Should Create a BillingModel', (done) => {

    rise.channelBillingModel.add({
      channel_uuid: channel_uuid
    })
      .then(_res => {
        billingModel = _res.data
        // console.log('brk billingModel', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a BillingModel', (done) => {

    rise.channelBillingModel.update({
      channel_uuid: channel_uuid,
      billingModel_code: billingModel.billingModel_code
    })
      .then(_res => {
        billingModel = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel BillingModels', (done) => {

    rise.channelBillingModel.list({
      channel_uuid: channel_uuid
    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        billingModel = _res.data[0]

        console.log('brk billingModel', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel BillingModel', (done) => {

    rise.channelBillingModel.get({
      channel_uuid: channel_uuid,
      billingModel_code: billingModel.billingModel_code
    })
      .then(_res => {
        billingModel = _res.data

        console.log('brk billingModel', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
