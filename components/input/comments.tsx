// noinspection JSUnusedGlobalSymbols

import React, {useContext, useEffect, useState} from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import styles from './comments.module.css';
import IComment from "../../helpers/interfaces/comment";
import NotificationContext from "../../store/notification-context";
import {Status} from "../../helpers/interfaces/notification";

type Props = {
    eventId: string;
}
const Comments: React.FC<Props> = ({eventId}) => {
    const [showComments, setShowComments] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [comments, setComments] = useState<Array<IComment>>();

    const notificationCtx = useContext(NotificationContext);

    useEffect(() => {
        (async () => {
            if (showComments) {
                setCommentsLoading(true);
                const comments = await (await fetch(`/api/comments/${eventId}`)).json();
                setCommentsLoading(false);
                setComments(comments);
            }
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showComments])

    const toggleCommentsHandler = () => {
        setShowComments((prevStatus) => !prevStatus);
    }

    const addCommentHandler = async (commentData: IComment) => {
        try {
            notificationCtx.showNotification({
                title: 'Adding comment',
                message: 'Your comment is currently being stored',
                status: Status.pending,
            });

            const response = await fetch(`/api/comments/${eventId}`, {
                method: 'POST',
                body: JSON.stringify(commentData),
            });

            const data = await response.json();
            if (response.ok) {
                notificationCtx.showNotification({
                    title: 'Success',
                    message: 'Comment added successfully',
                    status: Status.success,
                });
            } else {
                // noinspection ExceptionCaughtLocallyJS
                throw new Error(data?.message || 'Something went wrong');
            }
        } catch (error) {
            notificationCtx.showNotification({
                title: `Error!`,
                message: error?.message || 'Something went wrong',
                status: Status.error,
            });
        }
    }

    return (
        <section className={styles.comments}>
            <button onClick={toggleCommentsHandler}>
                {showComments ? 'Hide' : 'Show'} Comments
            </button>
            {showComments && <NewComment onAddComment={addCommentHandler}/>}
            {showComments && commentsLoading && <h3>Loading event comments...</h3>}
            {showComments && !commentsLoading && comments && <CommentList comments={comments}/>}
        </section>
    );
}

export default Comments;
