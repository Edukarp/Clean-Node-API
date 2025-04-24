import request from 'supertest'
import app from '../config/app'

describe('SigUp Routes', () => {
    test('Should return an account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: 'Eduardo',
                email: 'eduardo@gamil.com',
                password: '123',
                passwordConfirmation: '123'
            })
            .expect(200)
        })
})
