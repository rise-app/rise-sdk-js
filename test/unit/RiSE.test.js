const RiSE = require('../../dist').RiSE
const { url } = require('../fixtures/constants')

let rise

describe('RiSE API', () => {
  it('should instantiate', () => {
    rise = new RiSE({
      url: url,
      sandbox: true
    })
  })
  it('should have rise mode', () => {
    console.log(rise.riseMode)
  })
  it('should have rise uri', () => {
    console.log(rise.requestUri)
  })
  it('should have rise url', () => {
    console.log(rise.riseUrl)
  })
  it('should have request url', () => {
    console.log(rise.requestUrl)
  })
})
