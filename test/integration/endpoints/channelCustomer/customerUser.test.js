const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Customer User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, customer

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

  describe('Test Dependencies', () => {
    it('## Should Create a Customer', (done) => {

      rise.channelCustomer.create({
        name_first: 'Hello',
        name_last: 'World'
      }, {
        params: {
          channel_uuid: channel_uuid
        }
      })
        .then(_res => {
          customer = _res.data
          assert.equal(customer.name_first, 'Hello')
          assert.equal(customer.name_last, 'World')

          // console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })

  describe('Test Methods', () => {
    it('## Should List a Customer\'s Users', (done) => {

      rise.channelCustomerUser.list({
      }, {
        params: {
          channel_uuid,
          customer_uuid: customer.customer_uuid
        }
      })
        .then(_res => {
          console.log('brk customer', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })
})
