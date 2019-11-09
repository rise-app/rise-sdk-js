import { RiSE, RiSEConfig, RiSEResponse } from './index'

export class ApiClass {

  constructor(public rise: RiSE, public globals: RiSEConfig['globals']) {

    this.rise = rise

    ApiClass.prototype.globals = globals
    return this
  }

  request(req, data, validated): Promise<RiSEResponse> {
    return this.rise.request(req, data, validated)
  }
}

// export interface ApiClass {
//   getGlobals()
// }
//
// ApiClass.prototype.getGlobals = function() {
//  return this.globals
// }
