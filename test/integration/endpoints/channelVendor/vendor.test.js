const {RiSE, EVENTS, ACTIONS} = require('../../../../dist')
const {url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key} = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Vendor API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, vendor, product

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

  it.skip('## Should Create a Vendor', (done) => {

    rise.channelVendor.create({
      handle: 'test-vendor',
      title: 'Test Vendor'
    })
      .then(_res => {
        vendor = _res.data
        // console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Vendor', (done) => {

    rise.channelVendor.update({
      channel_uuid: channel_uuid,
      vendor_uuid: vendor.vendor_uuid
    })
      .then(_res => {
        vendor = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Search Channel Vendors', (done) => {

    rise.channelVendor.search({}, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        vendor = _res.data[0]

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel Vendors', (done) => {

    rise.channelVendor.search({}, {
      query: {
        term: 'test',
        limit: 5,
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        vendor = _res.data[0]

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Vendors', (done) => {

    rise.channelVendor.list({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        vendor = _res.data[0]

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List Channel Vendors by where', (done) => {

    rise.channelVendor.list({}, {
      query: {
        limit: 5,
        where: {}
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        vendor = _res.data[0]

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List Channel\'s Descendants\' Vendors', (done) => {

    rise.channelVendor.listChannelDescendants({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Vendors', (done) => {

    rise.channelVendor.searchChannelDescendants({}, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Vendors by where', (done) => {

    rise.channelVendor.searchChannelDescendants({}, {
      query: {
        term: 'test',
        limit: 5,
        where: {}
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Vendor', (done) => {

    rise.channelVendor.get({
      channel_uuid: channel_uuid,
      vendor_uuid: vendor.vendor_uuid
    })
      .then(_res => {
        vendor = _res.data

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it('### Should List Channel Vendor Upload Results', (done) => {

    rise.channelVendor.listUploads({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List Channel Vendor Inventory Upload Results', (done) => {

    rise.channelVendor.listInventoryUploads({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk vendor', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
