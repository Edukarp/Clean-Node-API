import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
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

    const makeSut = (): AccountMongoRepository => {
        return new AccountMongoRepository()
    }

    test('Should return an account on success', async () => {
        const sut = makeSut()
        const account = await sut.add({
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        })
        expect(account).toBeTruthy()
        expect(account.id).toBeTruthy()
        expect(account.name).toBe('valid_name')
        expect(account.email).toBe('valid_email@mail.com')
        expect(account.password).toBe('valid_password')
    })
})
