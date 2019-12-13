const {RiSE, EVENTS, ACTIONS} = require('../../../../dist')
const {url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key} = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Task API', () => {

  let rise, adminToken, adminSession, userToken, userSession, user, task, product

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

  it.skip('## Should Create a Task', (done) => {

    rise.channelTask.create({
      handle: 'test-task',
      title: 'Test Task'
    })
      .then(_res => {
        task = _res.data
        // console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
  //
  it.skip('## Should Update a Task', (done) => {

    rise.channelTask.update({
      channel_uuid: channel_uuid,
      task_uuid: task.task_uuid
    })
      .then(_res => {
        task = _res.data

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should Search Channel Tasks', (done) => {

    rise.channelTask.search({}, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        task = _res.data[0]

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel Tasks', (done) => {

    rise.channelTask.search({}, {
      query: {
        term: 'test',
        limit: 5,
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        task = _res.data[0]

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('### Should List Channel Tasks', (done) => {

    rise.channelTask.list({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        task = _res.data[0]

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List Channel Tasks by where', (done) => {

    rise.channelTask.list({}, {
      query: {
        limit: 5,
        where: {}
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        task = _res.data[0]

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List Channel\'s Descendants\' Tasks', (done) => {

    rise.channelTask.listChannelDescendants({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Tasks', (done) => {

    rise.channelTask.searchChannelDescendants({}, {
      query: {
        term: 'test',
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Search Channel\'s Descendants\' Tasks by where', (done) => {

    rise.channelTask.searchChannelDescendants({}, {
      query: {
        term: 'test',
        limit: 5,
        where: {}
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should Get a Channel Task', (done) => {

    rise.channelTask.get({
      channel_uuid: channel_uuid,
      task_uuid: task.task_uuid
    })
      .then(_res => {
        task = _res.data

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })


  it.skip('### Should List Channel Task Upload Results', (done) => {

    rise.channelTask.listUploads({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it.skip('### Should List Channel Task Inventory Upload Results', (done) => {

    rise.channelTask.listInventoryUploads({}, {
      query: {
        limit: 5
      }
    })
      .then(_res => {
        assert.equal(_res.limit, 5)
        assert.equal(_res.offset, 0)

        console.log('brk task', _res)

        done()
      })
      .catch(err => {
        done(err)
      })
  })
})
