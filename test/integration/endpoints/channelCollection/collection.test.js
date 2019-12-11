const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Collection API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, collection, product

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

  it.skip('## Should Create a Collection', (done) => {

    rise.channelCollection.create({
      handle: 'test-collection',
      title: 'Test Collection'
    })
      .then(_res => {
        collection = _res.data
        // console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Collection', (done) => {

    rise.channelCollection.update({
      channel_uuid: channel_uuid,
      collection_uuid: collection.collection_uuid
    })
      .then(_res => {
        collection = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Search Channel Collections', (done) => {

    rise.channelCollection.search({

    }, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        collection = _res.data[0]

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Collections by purpose', (done) => {

    rise.channelCollection.search({

    }, {
      query: {
        term: 'test',
        limit: 5,
        where: {
          purpose: 'category'
        }
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        collection = _res.data[0]

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Collections', (done) => {

    rise.channelCollection.list({

    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        collection = _res.data[0]

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Collections by purpose', (done) => {

    rise.channelCollection.list({

    }, {
      query: {
        limit: 5,
        where: {
          purpose: 'category'
        }
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        collection = _res.data[0]

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List Channel\'s Descendants\' Collections', (done) => {

    rise.channelCollection.listChannelDescendants({

    }, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List Channel\'s Descendants\' Collections by purpose', (done) => {

    rise.channelCollection.listChannelDescendants({

    }, {
      query: {
        limit: 5,
        where: {
          purpose: 'category'
        }
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Collections', (done) => {

    rise.channelCollection.searchChannelDescendants({

    }, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Collections by purpose', (done) => {

    rise.channelCollection.searchChannelDescendants({

    }, {
      query: {
        term: 'test',
        limit: 5,
        where: {
          purpose: 'category'
        }
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Collection', (done) => {

    rise.channelCollection.get({
      channel_uuid: channel_uuid,
      collection_uuid: collection.collection_uuid
    })
      .then(_res => {
        collection = _res.data

        console.log('brk collection', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
