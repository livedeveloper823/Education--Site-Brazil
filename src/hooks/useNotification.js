import { useContext } from "react";
import { NotificationContext } from './../contexts/notificationContext';

const useNotification = () => {
    const context = useContext(NotificationContext)
    if (!context) {
        throw new Error("No notification")
    }
    return context;
}

export default useNotification;
