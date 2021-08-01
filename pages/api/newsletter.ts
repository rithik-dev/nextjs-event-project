// noinspection JSUnusedGlobalSymbols

import {NextApiRequest, NextApiResponse} from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        const email: string | null = JSON.parse(req.body).email;
        if (!email || !email.includes('@'))
            return res.status(422).json({error: 'Bad input'});
        return res.status(201).json({message: `Signed up: ${email}`});
    }
}

export default handler;
