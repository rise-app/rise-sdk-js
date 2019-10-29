import { RiSE, RiSEResponse } from './index'

export class ApiClass {
  constructor(public rise: RiSE) {
    this.rise = rise
    return this
  }
  request(req, data, validated): Promise<RiSEResponse> {
    return this.rise.request(req, data, validated)
  }
}
