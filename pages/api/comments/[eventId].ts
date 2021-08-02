// noinspection JSUnusedGlobalSymbols

import {NextApiRequest, NextApiResponse} from "next";
import {connectDatabase, getAllComments, insertDocument} from "../../../helpers/db-util";
import {MongoClient} from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    let client: MongoClient;

    try {
        client = await connectDatabase();
    } catch (error) {
        return res.status(500).json({message: 'Connecting to the database failed'});
    }

    switch (req.method) {
        case 'GET':
            await getComments(req, res, client);
            break;
        case 'POST':
            await addComment(req, res, client);
            break;
    }
    await client.close();
}

const getComments = async (req: NextApiRequest, res: NextApiResponse, client: MongoClient) => {
    const eventId = req.query.eventId as string;
    try {
        const comments = await getAllComments(client, 'comments', eventId);
        return res.status(200).json(JSON.stringify(comments));
    } catch (error) {
        return res.status(500).json({message: 'Getting comments failed'});
    }
}

const addComment = async (req: NextApiRequest, res: NextApiResponse, client: MongoClient) => {
    const comment = JSON.parse(req.body);
    comment.eventId = req.query.eventId;
    try {
        const result = await insertDocument(client, 'comments', comment);
        comment._id = result.insertedId;
        return res.status(201).json({comment, message: `Comment ${comment.text} added.`})
    } catch (error) {
        return res.status(500).json({message: 'Inserting data failed'});
    }
}

export default handler;
