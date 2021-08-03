import React, {useContext} from "react";
import MainHeader from "./main-header/main-header";
import Notification from "../ui/notification/notification";
import NotificationContext from "../../store/notification-context";

const Layout: React.FC = ({children}) => {
    const notificationCtx = useContext(NotificationContext);
    const notification = notificationCtx.notification;

    return (
        <>
            <MainHeader/>
            <main>{children}</main>
            {notification && <Notification notification={notification}/>}
        </>
    )
}

export default Layout;
