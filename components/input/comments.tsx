// noinspection JSUnusedGlobalSymbols

import React, {useEffect, useState} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import styles from './comments.module.css';
import IComment from "../../helpers/interfaces/comment";

type Props = {
    eventId: string;
}
const Comments: React.FC<Props> = ({eventId}) => {
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState<Array<IComment>>();

    useEffect(() => {
        (async () => {
            if (showComments) {
                const comments = await (await fetch(`/api/comments/${eventId}`)).json();
                setComments(comments);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showComments])

    const toggleCommentsHandler = () => {
        setShowComments((prevStatus) => !prevStatus);
    }

    const addCommentHandler = async (commentData: IComment) => {
        const data = await (await fetch(`/api/comments/${eventId}`, {
            method: 'POST',
            body: JSON.stringify(commentData),
        })).json();
        console.log(data);
    }

    return (
        <section className={styles.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler}/>}
            {showComments && comments && <CommentList comments={comments}/>}
        </section>
    );
}

export default Comments;
