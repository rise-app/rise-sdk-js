const { RiSE, EVENTS, ACTIONS } = require('../../../../dist')
const { url, adminPassword, adminIdentifier, channel_uuid, private_key, public_key } = require('../../../fixtures/constants')

const assert = require('assert')

describe('# RiSE Channel Permission API', () => {

    let rise, adminToken, adminSession, userToken, userSession, user, permission, variant


    //copied test over from offer. currently converting to permission 

    before((done) => {
        rise = new RiSE({
            url: url,
            sandbox: true,
            public_key: public_key,
            private_key: private_key
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

    it.skip('## Should List User Permissions', (done) => {

        rise.channelPermission.list({
            channel_uuid: channel_uuid,
            user_uuid: user.user_uuid
        })
            .then(_res => {
                permission = _res.data
                // console.log('brk offer', _res)

                done()
            })
            .catch(err => {
                done(err)
            })
    })
    //
    it.skip('## Should List Role Permissions', (done) => {

        rise.channelRole.list({
            channel_uuid: channel_uuid,
            role_name: user.role_name
        })
            .then(_res => {
                permission = _res.data

                done()
            })
            .catch(err => {
                done(err)
            })
    })
})
