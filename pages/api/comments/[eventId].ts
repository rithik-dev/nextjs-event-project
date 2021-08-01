// noinspection JSUnusedGlobalSymbols

import {NextApiRequest, NextApiResponse} from "next";
import IComment from "../../../helpers/interfaces/comment";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            return await getComments(req, res);
        case 'POST':
            return await addComment(req, res);
    }
}

const getComments = async (req: NextApiRequest, res: NextApiResponse) => {
    const comments: Array<IComment> = [
        {
            id: 'c1',
            name: 'Max',
            email: 'max987@gmail.com',
            text: 'This course is amazing.',
        },
        {
            id: 'c2',
            name: 'James',
            email: 'james12@gmail.com',
            text: 'The course instructor is even better.',
        },
    ];
    return res.status(200).json(JSON.stringify(comments));
}

const addComment = async (req: NextApiRequest, res: NextApiResponse) => {
    const comment = JSON.parse(req.body);
    comment.id = new Date().toDateString();
    return res.status(201).json({comment, message: `Comment ${comment.text} added.`})
}

export default handler;
