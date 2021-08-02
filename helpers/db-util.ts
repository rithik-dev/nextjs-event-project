import {MongoClient} from "mongodb";
import IComment from "./interfaces/comment";

export const connectDatabase = async (): Promise<MongoClient> =>
    await MongoClient.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.szwvn.mongodb.net/events`);

export const insertDocument = async (client: MongoClient, collection: string, document: object) => {
    const db = client.db();
    return await db.collection(collection).insertOne(document);
}

export const getAllComments = async (client: MongoClient, collection: string, eventId: string) => {
    const db = client.db();
    return await db.collection(collection)
        .find({eventId})
        // sort the comments in descending order then return
        .sort({_id: -1})
        .toArray<IComment>();
}
