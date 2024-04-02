import { useEffect, useMemo } from "react";
import { useTimer as useReactTimer } from "react-timer-hook";
import Session from "../../utils/storage/sessionStorage";
import { SessionKey } from "../../models/enums/session";
import { Time } from "../../models/types/common";

const useTimer = (duration: number, handleTimeOut: () => void, autoStart: boolean = false) => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

    const { seconds, minutes, restart, pause } = useReactTimer({
        expiryTimestamp,
        autoStart,
        onExpire: handleTimeOut,
    });

    // Calculate progress percentage
    const progress = useMemo(() => {
        const totalSeconds = duration;
        const remainingSeconds = minutes * 60 + seconds;
        return (remainingSeconds / totalSeconds) * 100;
    }, [minutes, seconds]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            Session.set(SessionKey.TIMER, { seconds, minutes });
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [seconds, minutes]);

    const refresh = (time: Time) => {
        const timestamp = new Date();
        //TODO: check if I can get how much time it takes for the page to reload and put insted of the -5
        timestamp.setSeconds(timestamp.getSeconds() + (time.seconds - 5));
        timestamp.setMinutes(timestamp.getMinutes() + time.minutes);
        restart(timestamp);
        Session.remove(SessionKey.TIMER);
    };

    return { expiryTimestamp, progress, pause, restart, refresh };
};

export default useTimer;
