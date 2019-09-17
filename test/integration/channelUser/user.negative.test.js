const RiSE = require('../../../dist').RiSE
const adminIdentifier = process.env.RISE_ADMIN
const adminPassword = process.env.RISE_PASSWORD
const channel_uuid = process.env.RISE_CHANNEL
const public_key = process.env.RISE_PUBLIC
const private_key = process.env.RISE_PRIVATE

const assert = require('assert')

describe('# RiSE Channel User API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user

  describe('## As admin user', () => {
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
