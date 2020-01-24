import { ApiClass } from '../../ApiClass'
import { Command, Action, Paginate } from '../../metadata'
// import { analytic } from '../../validators'
import { ACTIONS } from '../../enums'

export class ChannelAnalytic extends ApiClass {
  /**
   * Get a Analytic by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/stats',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  stats(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List analytics
   * @param data
   * @param req
   * @param validated
   */
  // TODO validators
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics',
    // validator: analytic[ACTIONS.LIST_ANALYTICS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic by ID
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/:analytic_uuid',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic MRR
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/mrr',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  mrr(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic LTV
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/ltv',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  ltv(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic NR
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/nr',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  nr(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic ARPC
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/arpc',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  arpc(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic ARR
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/arr',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  arr(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic RLTV
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/rltv',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  rltv(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic CHURN
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/churn',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  churn(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic MrrChurn
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/mrrChurn',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  mrrChurn(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic ABC
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/abc',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  abc(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic AC
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/ac',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  ac(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic RC
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/rc',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  rc(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic RT
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/rt',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  rt(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic FT
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/ft',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  ft(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic DT
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/dt',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  dt(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic RR
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/rr',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  rr(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic AS
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/as',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  as(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic SU
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/su',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  su(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic SD
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/sd',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  sd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic CS
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/cs',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  cs(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic DR
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/dr',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  dr(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic CB
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/cb',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  cb(data, req?, validated?) {
    return this.request(req, data, validated)
  }
  /**
   * Get a Analytic BL
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/bl',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  bl(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic FL
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/fl',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  fl(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic SL
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/sl',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  sl(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic ND
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/nd',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  nd(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Analytic FEES
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/analytics/fees',
    // validator: analytic[ACTIONS.GET_ANALYTIC]
  })
  fees(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
