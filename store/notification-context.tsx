// noinspection JSUnusedGlobalSymbols

import React, {createContext, useEffect, useState} from "react";
import INotification, {Status} from "../helpers/interfaces/notification";

type Props = {
    notification: INotification | null;
    showNotification: (notificationData: INotification) => void,
    hideNotification: () => void,
}

const NotificationContext = createContext<Props>({
    notification: null,
    showNotification: () => {
    },
    hideNotification: () => {
    },
})

export const NotificationContextProvider: React.FC = ({children}) => {

    const [activeNotification, setActiveNotification] = useState<INotification | null>(null);

    useEffect(() => {
        if (activeNotification && activeNotification.status !== Status.pending) {
            // hide notification after 3 seconds
            const timer = setTimeout(() => {
                hideNotificationHandler();
            }, 3000);

            // useEffect's clean up function
            return () => {
                clearTimeout(timer);
            }
        }

    }, [activeNotification]);

    const showNotificationHandler = (notificationData: INotification) => setActiveNotification(notificationData);

    const hideNotificationHandler = () => setActiveNotification(null);

    const context: Props = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHandler,
    }

    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;
