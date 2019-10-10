const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Order API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, order, item, customer, offer

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

  describe('# RiSE Channel Order API Dependencies', () => {

    it('## Should list Public Offers for Order Testing', (done) => {
      done()
    })
    it('## Should Create a Customer for Order Testing', (done) => {
      done()
    })
    it('## Should Create a Cart for Order Testing', (done) => {
      done()
    })
  })
  describe('# RiSE Channel Order API Methods', () => {
    it('## Should list Orders', (done) => {
      done()
    })

    it('## Should get Orders', (done) => {
      done()
    })

    it('## Should set Order payment details', (done) => {
      done()
    })
    it('## Should get Order payment details', (done) => {
      done()
    })
    it('## Should set Order fulfillment details', (done) => {
      done()
    })
    it('## Should get Order fulfillment details', (done) => {
      done()
    })

    describe('# RiSE Channel Order Item API Methods', () => {
      it('## Should list Order Items', (done) => {
        done()
      })

      it('## Should get Order Item', (done) => {
        done()
      })

      it('## Should add Order Item', (done) => {
        done()
      })
      it('## Should update Order Item', (done) => {
        done()
      })
      it('## Should remove Order Item', (done) => {
        done()
      })
      it('## Should add/remove Order Item tax lines', (done) => {
        done()
      })
      it('## Should add/remove Order Item shipping lines', (done) => {
        done()
      })
      it('## Should add/remove Order Item pricing override lines', (done) => {
        done()
      })
      it('## Should set Order Item payment details', (done) => {
        done()
      })
      it('## Should get Order Item payment details', (done) => {
        done()
      })
      it('## Should set Order Item fulfillment details', (done) => {
        done()
      })
      it('## Should get Order Item fulfillment details', (done) => {
        done()
      })
    })
  })
})
