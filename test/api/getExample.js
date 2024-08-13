const request = require('supertest')
const baseUrl = require('./env')
describe('Get Request example', () => {
    it('Find Pet by Status', async () => {
        const response = request(baseUrl())
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})