const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user

  describe('## As admin user', () => {
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

    it('### Should Not Create a User', (done) => {
      rise.channelUser.create({
      })
        .then(() => {
          const err = new Error('Should have failed validation')
          done(err)
        })
        .catch(err => {
          done()
        })
    })

  })
})
