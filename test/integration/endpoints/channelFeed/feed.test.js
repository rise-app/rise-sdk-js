const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const {url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key} = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Feed API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, feed, feedItem, customer, offer

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

    rise.authenticateApiUser(
      channel_uuid,
      adminIdentifier,
      adminPassword
    )
      .then(res => {
        adminToken = res.token
        adminSession = res.session
        done()
      })
      .catch(err => done(err))
  })

  describe('# RiSE Channel Feed API Dependencies', () => {

  })

  describe('## RiSE Channel Feed API Methods', () => {

    it.skip('### Should Create a Feed', (done) => {

      rise.channelFeed.create({
        channel_uuid: channel_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFeed')
          // assert.equal(_res.event_type, EVENTS.Feed_CREATED)
          Feed = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })
    //
    it.skip('### Should Update a Feed', (done) => {

      rise.channelFeed.update({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFeed')


          feed = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Set Feed Primary', (done) => {

      rise.channelFeed.setFeedPrimary({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFeed')


          feed = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get Channel Feed Primary', (done) => {

      rise.channelFeed.getFeedPrimary({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid,
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFeed')


          feed = _res.data

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Get a Channel Feed', (done) => {

      rise.channelFeed.get({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid
      })
        .then(_res => {
          assert.equal(_res.object, 'ChannelFeed')
          assert.equal(_res.action, ACTIONS.GET_FEED)

          feed = _res.data

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Channel Feeds', (done) => {

      rise.channelFeed.list({
        channel_uuid: channel_uuid
      }, {
        query: {
          limit: 5
        }
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, ACTIONS.LIST_FEEDS)

          assert.equal(_res.limit, 5)
          assert.equal(_res.offset, 0)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Create a Feed Item', (done) => {

      rise.channelFeedItem.create({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, COMMANDS.CREATE_FEED_ITEM)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Update a Feed Item', (done) => {

      rise.channelFeedItem.update({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid,
        feedItem_uuid: item.feedItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, COMMANDS.UPDATE_FEED_ITEM)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Destroy a Feed Item', (done) => {

      rise.channelFeedItem.delete({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid,
        feedItem_uuid: item.feedItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, COMMANDS.DESTROY_FEED_ITEM)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should Mark a Feed Item', (done) => {

      rise.channelFeedItem.mark({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid,
        feedItem_uuid: item.feedItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, COMMANDS.MARK_FEED_ITEM)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })


    it.skip('### Should Get a Feed Item', (done) => {

      rise.channelFeedItem.get({
        channel_uuid: channel_uuid,
        feed_uuid: feed_uuid,
        feedItem_uuid: item.feedItem_uuid
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, ACTIONS.GET_FEED_ITEM)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it.skip('### Should List Feed Items', (done) => {

      rise.channelFeedItem.list({
        channel_uuid: channel_uuid,
        feed_uuid: feed.feed_uuid,
      })
        .then(_res => {
          assert.equal(_res.list, 'ChannelFeed')
          assert.equal(_res.action, ACTIONS.LIST_FEED_ITEMS)

          console.log('brk Feed', _res)

          done()
        })
        .catch(err => {
          done(err)
        })
    })

  })
})
