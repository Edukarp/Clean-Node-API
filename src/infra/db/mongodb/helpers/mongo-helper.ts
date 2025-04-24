import { type Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
    client: null as unknown as MongoClient,
    connect: async (uri: string): Promise<void> => {
        if (!process.env.MONGO_URL) {
            throw new Error('MONGO_URL is not defined in the environment variables')
        }
        MongoHelper.client = await MongoClient.connect(process.env.MONGO_URL)
    },

    disconnect: async (): Promise<void> => {
        await MongoHelper.client.close()
    },

    getCollection (name: string): Collection {
        return MongoHelper.client.db().collection(name)
    },

    map (collection: any): any {
        const { _id, ...collectionWithoutId } = collection
        return Object.assign({}, collectionWithoutId, { id: _id })
    }
}
