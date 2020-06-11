const RiSE = require('../../dist').RiSE
const { url } = require('../fixtures/constants')

describe('RiSE API', () => {
  it('should instantiate', () => {
    new RiSE({
      url: url,
      sandbox: true
    })
  })
})
