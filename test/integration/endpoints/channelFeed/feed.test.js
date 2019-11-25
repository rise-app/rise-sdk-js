'use strict'
/* global describe, it */
const assert = require('assert')
const supertest = require('supertest')
const qs = require('qs')
const _ = require('lodash')
const regexdot = require('@fabrix/regexdot').regexdot
const { CHANNEL_EVENTS, CHANNEL_COMMANDS, CHANNEL_ACTIONS } = require('../../../../../../../dist/spools/spool-channel/lib/enums')

describe('Admin User ChannelFeedController', () => {
    let adminUser, admin, session, token, testChannel, testFeed

    before((done) => {

        testChannel = {
            //
            handle: 'test-feeds',
            title: 'Test Feeds'
        }

        adminUser = supertest.agent(global.app.spools.express.server)
        // Login as Admin
        adminUser
            .post(`${global.app.config.get('platform.prefix')}/auth/local`)
            .set({
                'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                Accept: 'application/json'
            }) //set header for this test
            .send({
                username: global.app.config.get('platform.default_user_username'),
                password: global.app.config.get('platform.default_user_password')
            })
            .expect(200)
            .end((err, res) => {
                admin = res.body.data.User
                session = res.body.session


                if (err) {
                    console.log('UserController before err', err)
                    return done(err)
                }

                done()
            })
    })

    it.skip('should exist', () => {
        assert(global.app.api.controllers['ChannelFeedController'])
        assert(global.app.controllers['ChannelFeedController'])
    })

    it.skip('should create a channel with feeds', (done) => {
        adminUser
            .post(`${global.app.config.get('platform.prefix')}/channels`)
            .set({
                'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                Accept: 'application/json',
                Session: session
            })
            .send(testChannel)
            .expect(200)
            .end((err, res) => {
                testChannel = res.body.data

                // assert.equal(res.body.event_type, 'channel.created')
                const { pattern } = regexdot(CHANNEL_EVENTS.CREATED)
                assert.ok(pattern.test(`.${res.body.event_type}`))
                assert.equal(res.body.object, 'Channel')
                assert.equal(res.body.url, `/api/v1/channels/${testChannel.channel_uuid}`)

                assert.ok(testChannel.handle.includes('test-feeds'))
                assert.equal(testChannel.title, 'Test Feeds')
                done(err)
            })
    })
    describe('Channel Feed Interactions', () => {
        // Give the Feeds a half second to propagate
        before(function (done) {
            setTimeout(function () {
                done()
            }, 500)
        })

        it.skip('should get channel\'s feeds', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${testChannel.channel_uuid}/feeds`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    testFeed = res.body.data[0]
                    assert.equal(res.body.action, 'channel.feed.list')
                    assert.equal(res.body.list, 'ChannelFeed')
                    assert.equal(res.body.url, `/api/v1/channels/${testChannel.channel_uuid}/feeds`)

                    assert.ok(res.body.total >= 1)
                    assert.equal(res.body.offset, 0)
                    assert.equal(res.body.limit, 10)

                    assert.ok(res.body.data.find(n => n.channel_uuid === testChannel.channel_uuid))
                    done(err)
                })
        })

        it.skip('should get channel\'s descendants feeds', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${testChannel.channel_uuid}/descendants/feeds`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    testFeed = res.body.data[0]
                    assert.equal(res.body.action, 'channel.feed.list')
                    assert.equal(res.body.list, 'ChannelFeed')
                    assert.equal(res.body.url, `/api/v1/channels/${testChannel.channel_uuid}/descendants/feeds`)

                    assert.ok(res.body.total >= 1)
                    assert.equal(res.body.offset, 0)
                    assert.equal(res.body.limit, 10)

                    done(err)
                })
        })

        it.skip('should get channel\'s feed', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${testChannel.channel_uuid}/feeds/${testFeed.feed_uuid}`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    done(err)
                })
        })

        it.skip('should update channel\'s feed', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${testChannel.channel_uuid}/feeds/${testFeed.feed_uuid}`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    testFeed = res.body.data[0]
                    assert.equal(res.body.action, 'channel.feed.update')
                    assert.equal(res.body.list, 'ChannelFeed')
                    assert.equal(res.body.url, `/api/v1/channels/${testChannel.channel_uuid}/feeds/${testFeed.feed_uuid}`)


                    done(err)
                })
        })

        it.skip('should get channel\'s feed items', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${testChannel.channel_uuid}/feeds/${testFeed.feed_uuid}/items`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    done(err)
                })
        })

        it.skip('should get root channel\'s feeds which should include descendant channel\'s feeds', (done) => {
            adminUser
                .get(`${global.app.config.get('platform.prefix')}/channels/${global.app.config.get('platform.root_uuid')}/descendants/feeds`)
                .set({
                    'X-APPLICATION-KEY': global.app.config.get('platform.default_ui_application_public'),
                    Accept: 'application/json',
                    Session: session
                })
                .query({
                    limit: 150,
                })
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        console.log('err', err)
                    }

                    console.log('BRK res.body', res.body)

                    assert.equal(res.body.action, 'channel.feed.list')
                    assert.equal(res.body.list, 'ChannelFeed')
                    assert.equal(res.body.url, `/api/v1/channels/${global.app.config.get('platform.root_uuid')}/descendants/feeds`)

                    assert.ok(res.body.total >= 1)
                    assert.equal(res.body.offset, 0)
                    assert.equal(res.body.limit, 150)

                    assert.ok(res.body.data.find(n => n.channel_uuid === testChannel.channel_uuid))
                    assert.ok(res.body.data.find(n => n.channel_uuid === global.app.config.get('platform.root_uuid')))
                    done(err)
                })
        })
    })
})
