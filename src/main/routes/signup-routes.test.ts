import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SigUp Routes', () => {
    beforeAll(async () => {
            if (!process.env.MONGO_URL) {
                throw new Error('MONGO_URL is not defined')
            }
            await MongoHelper.connect(process.env.MONGO_URL)
        })

        afterAll(async () => {
            await MongoHelper.disconnect()
        })

        beforeEach(async () => {
            const accountCollection = MongoHelper.getCollection('accounts')
            await accountCollection.deleteMany({})
        })

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
