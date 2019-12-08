// import * as assert from 'assert'
const { RiSE, EVENTS, ACTIONS } = require('../../dist.browser')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../fixtures/constants')

describe('Browser', () => {
  describe('sanity', () => {
    it('should exist', () => {
      const rise = new RiSE({
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
      assert(rise)
    })
  })
})
