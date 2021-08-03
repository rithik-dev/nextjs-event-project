import React, {useContext} from 'react';

import styles from './notification.module.css';
import INotification, {Status} from "../../../helpers/interfaces/notification";
import NotificationContext from "../../../store/notification-context";

type Props = {
    notification: INotification;
}

const Notification: React.FC<Props> = ({notification}) => {
    const notificationCtx = useContext(NotificationContext);
    const {title, message, status} = notification;

    let statusClasses = '';
    switch (status) {
        case Status.success:
            statusClasses = styles.success;
            break;
        case Status.error:
            statusClasses = styles.error;
            break;
        case Status.pending:
            statusClasses = styles.pending;
            break;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    return (
        <div className={activeClasses} onClick={notificationCtx.hideNotification}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Notification;
