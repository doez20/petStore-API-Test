const {expect} = require('chai')
const request = require('supertest')
const DATA = require('../../data/userData')

describe('Post Request Example', () => {
    
    /*
    it('Succes create user', async () => {
        const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send({
            "id": 12345,
            "username": "myskill-auto",
            "firstName": "myskill",
            "lastName": "auto",
            "email": "myskill@mail.com",
            "password": "myskill123",
            "phone": "081234567898",
            "userStatus": 1             
        })
        
    })
    */

    const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send(DATA.CREATE_USER_DATA)

    it('response status equal to 200', async () => {
        //Check response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () =>  {
        //Expect dalam body response terdapat value 'message'
        expect((await response).body).to.haveOwnProperty('message')
    })
})