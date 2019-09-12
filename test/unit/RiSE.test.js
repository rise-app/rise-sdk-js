const RiSE = require('../../dist').RiSE
describe('RiSE API', () => {
  it('should instantiate', () => {
    new RiSE({
      sandbox: true
    })
  })
})