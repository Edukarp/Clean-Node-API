import { MongoClient } from 'mongodb'

export const MongoHelper = {
    client: null as unknown as MongoClient,
    connect: async (uri: string): Promise<void> => {
        MongoHelper.client = await MongoClient.connect(process.env.MONGO_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    },

    disconnect: async (): Promise<void> => {
        await MongoHelper.client.close()
    }
}
