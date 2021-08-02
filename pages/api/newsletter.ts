// noinspection JSUnusedGlobalSymbols

import {NextApiRequest, NextApiResponse} from "next";
import {connectDatabase, insertDocument} from "../../helpers/db-util";
import {MongoClient} from "mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        const email: string | null = JSON.parse(req.body).email;
        if (!email || !email.includes('@'))
            return res.status(422).json({error: 'Bad input'});

        let client: MongoClient;

        try {
            client = await connectDatabase();
        } catch (error) {
            return res.status(500).json({message: 'Connecting to database failed!'});
        }

        try {
            await insertDocument(client, 'newsletter', {email});
            await client.close();
            return res.status(201).json({message: `Signed up: ${email}`});
        } catch (error) {
            return res.status(500).json({message: 'Inserting data failed'});
        }
    }
}

export default handler;
