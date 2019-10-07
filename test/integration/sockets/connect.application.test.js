const RiSE = require('../../../dist').RiSE
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user

  describe('## As admin/manager user', () => {

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

    describe('## Connect to Socket', () => {
      it('should connect', (done) => {

        rise.application.connect()

        done()
      })
    })
  })
})
