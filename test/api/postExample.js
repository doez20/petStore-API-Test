const request = require('supertest')
const baseUrl = require('./env')

describe('Post Request example', () => {
    it('Succes create user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
                "id": 0,
                "username": "string",
                "firstName": "string",
                "lastName": "string",
                "email": "string",
                "password": "string",
                "phone": "string",
                "userStatus": 0              
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})