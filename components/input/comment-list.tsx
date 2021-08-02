// noinspection JSUnusedGlobalSymbols

import styles from './comment-list.module.css';
import IComment from "../../helpers/interfaces/comment";
import React from "react";

type Props = {
    comments: Array<IComment>;
}

const CommentList: React.FC<Props> = ({comments}) => {
    return (
        <ul className={styles.comments}>
            {/* Render list of comments - fetched from API */}
            {comments.map(comment => (
                <li key={comment._id}>
                    <p>{comment.text}</p>
                    <div>
                        By <address>{comment.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;
