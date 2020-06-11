const RiSE = require('../../dist').RiSE
import { url } from '../fixtures/constants'

describe('RiSE API', () => {
  it('should instantiate', () => {
    new RiSE({
      url: url,
      sandbox: true
    })
  })
})
