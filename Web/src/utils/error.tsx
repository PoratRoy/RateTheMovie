import { Store } from "react-notifications-component";
import { NotificationType } from "../models/types/union";

export const notification = (title: string, message: any, type: NotificationType) => {
    return Store.addNotification({
        title,
        message: message,
        type,
        insert: "bottom",
        container: "bottom-full",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 3000,
            onScreen: true,
        },
    });
};
