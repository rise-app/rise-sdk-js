const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Auth API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, recovery, username, password,
    offer, item_uuid

  describe('## As admin/manager user', () => {
    before((done) => {
      rise = new RiSE({
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

      done()
      // rise.authenticateApiUser(
      //   channel_uuid,
      //   adminIdentifier,
      //   adminPassword
      // )
      //   .then(res => {
      //     adminToken = res.token
      //     adminSession = res.session
      //     done()
      //   })
      //   .catch(err => done(err))
    })

    describe('# RiSE Channel Auth API Dependencies', () => {
      it('## Should Get an Offer for Cart Testing', (done) => {

        rise.channelOffer.listPublic({
          // channel_uuid: channel_uuid
        }, {
          query: {
            limit: 1
          }
        })
          .then(_res => {
            offer= _res.data[0]
            assert.equal(_res.list, 'ChannelOffer')
            assert.ok(offer)

            done()
          })
          .catch(err => {
            done(err)
          })
      })
    })

    describe('## Session', () => {
      let username, password = 'test1234567'

      it('### Should Register a user', (done) => {
        username = `sdkjstest${Math.floor((Math.random() * 100) + 1)}`

        rise.channelAuth.register({
          username: username,
          password: password
        })
          .then(_res => {
            userSession = _res.session
            userToken = _res.token
            user = _res.data.ChannelUser

            assert.ok(userSession)
            assert.ok(userToken)

            // console.log('brk user', _res)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should validate token', (done) => {

        rise.channelAuth.validateToken({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            assert.equal(_res.session, userSession)
            assert.ok(_res.token)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session', (done) => {

        rise.channelAuth.session({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })


      it('### Should get user session cart (Current)', (done) => {

        rise.channelAuth.sessionCart({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should update user session cart (Current)', (done) => {

        rise.channelAuth.updateSessionCart({
          // channel_uuid: channel_uuid
          title: 'My Special Session Cart'
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should set user session cart billing address (Current)', (done) => {

        rise.channelAuth.setSessionCartBilling({
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session cart billing address (Current)', (done) => {

        rise.channelAuth.sessionCartBilling({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should set user session cart shipping address (Current)', (done) => {

        rise.channelAuth.setSessionCartShipping({
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session cart shipping address (Current)', (done) => {

        rise.channelAuth.sessionCartShipping({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should set user session cart payment details (Current)', (done) => {

        rise.channelAuth.setSessionCartPayment({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session cart payment details (Current)', (done) => {

        rise.channelAuth.sessionCartPayment({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should create user session cart\'s item(s) (Current)', (done) => {

        rise.channelAuth.createSessionCartItems({
          offer_uuid: offer.offer_uuid,
          variant_uuid: offer.variant_default_uuid,
          quantity: 1,
          notes: 'Who you gonna call?'
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            item_uuid = _res.data.item_uuid
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should update user session cart\'s item (Current)', (done) => {

        rise.channelAuth.updateSessionCartItem({
          notes: 'Who you not gonna call?'
        }, {
          token: userToken,
          session: userSession,
          params: {
            item_uuid: item_uuid
          }
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should get user session cart\'s item (Current)', (done) => {

        rise.channelAuth.getSessionCartItem({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession,
          params: {
            item_uuid: item_uuid
          }
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should remove user session cart\'s item (Current)', (done) => {

        rise.channelAuth.removeSessionCartItem({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession,
          params: {
            item_uuid: item_uuid
          }
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should list user session cart\'s items (Current)', (done) => {

        rise.channelAuth.sessionCartItems({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should checkout user session cart (Current)', (done) => {

        rise.channelAuth.checkoutSessionCart({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })


      it('### Should get user session customer (Current)', (done) => {

        rise.channelAuth.sessionCustomer({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should update user session customer (Current)', (done) => {

        rise.channelAuth.updateSessionCustomer({
          // channel_uuid: channel_uuid
          name_display: 'Lookie Loo'
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should set user session customer billing address (Current)', (done) => {

        rise.channelAuth.setSessionCustomerBilling({
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer billing address (Current)', (done) => {

        rise.channelAuth.sessionCustomerBilling({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should set user session customer shipping address (Current)', (done) => {

        rise.channelAuth.setSessionCustomerShipping({
          address_1: '1600 Pennsylvania Ave NW',
          address_2: '',
          address_3: '',
          company: '',
          city: 'Washington',
          province_code: 'DC',
          country_code: 'US',
          postal_code: '20500',
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer shipping address (Current)', (done) => {

        rise.channelAuth.sessionCustomerShipping({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer\'s orders (Current)', (done) => {

        rise.channelAuth.sessionCustomerOrders({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should get user session customer\'s order (Current)', (done) => {

        rise.channelAuth.getSessionCustomerOrder({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession,
          params: {
            order_uuid: order_uuid
          }
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer\'s users (Current)', (done) => {

        rise.channelAuth.sessionCustomerUsers({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should get user session customer\'s carts (Current)', (done) => {

        rise.channelAuth.sessionCustomerCarts({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should get user session customer\'s feeds (Current)', (done) => {

        rise.channelAuth.sessionCustomerFeeds({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer\'s accounts (Current)', (done) => {

        rise.channelAuth.sessionCustomerGatewayAccounts({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session customer\'s sources (Current)', (done) => {

        rise.channelAuth.sessionCustomerGatewaySources({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session roles', (done) => {

        rise.channelAuth.sessionRoles({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session channel (Current)', (done) => {

        rise.channelAuth.sessionChannel({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it('### Should get user session channels (All Channels)', (done) => {

        // TODO test pagination
        rise.channelAuth.sessionChannels({
          // channel_uuid: channel_uuid
        }, {
          token: userToken,
          session: userSession
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })
    })

    describe('## Password Recovery', () => {

      it.skip('### Should send recovery directions and return redirect', (done) => {

        rise.channelAuth.setRecovery({
          // channel_uuid: channel_uuid,
          email: ''
        })
          .then(_res => {
            assert.ok(_res.redirect)

            done()
          })
          .catch(err => {
            done(err)
          })
      })

      it.skip('### Should reset local password', (done) => {

        rise.channelAuth.recover({
          // channel_uuid: channel_uuid,
          recovery: recovery
        })
          .then(_res => {
            done()
          })
          .catch(err => {
            done(err)
          })
      })
    })
  })
})
