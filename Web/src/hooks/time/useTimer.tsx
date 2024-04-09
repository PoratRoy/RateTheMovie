import { useTimer as useReactTimer } from "react-timer-hook";
import Session from "../../utils/storage/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { Time } from "../../models/types/common";
import useReload from "../global/useReload";

const useTimer = (session: SessionKey, duration: number, handleTimeOut: () => void) => {

    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const { seconds, minutes, restart, pause } = useReactTimer({
        expiryTimestamp,
        autoStart: false,
        onExpire: handleTimeOut,
    });

    // Calculate progress percentage
    const remainingSeconds = minutes * 60 + seconds;
    const progress = (remainingSeconds / duration) * 100;

    const handleBeforeUnload = () => {
        Session.set(session, { seconds, minutes });
    };

    useReload(handleBeforeUnload, [seconds, minutes]);

    const refresh = (time: Time) => {
        const timestamp = new Date();
        //TODO: check if I can get how much time it takes for the page to reload and put insted of the -5
        timestamp.setSeconds(timestamp.getSeconds() + (time.seconds - 4));
        timestamp.setMinutes(timestamp.getMinutes() + time.minutes);
        restart(timestamp);
        //TODO: cousing the modal timer problem
        Session.remove(session);
    };

    return { expiryTimestamp, progress, pause, restart, refresh };
};

export default useTimer;
