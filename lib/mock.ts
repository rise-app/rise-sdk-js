
import { EventEmitter } from 'events'

// export const mockHttp = httpMocks

export const makeMockReq = (req?) => (req)
export const makeMockRes = (res?) => ({
  ...res,
  eventEmitter: EventEmitter
})
