import { useState } from "react";

const useDoubleClick = () => {
    const [clickCount, setClickCount] = useState<number>(0);
    const [lastClickTime, setLastClickTime] = useState<number>(0);
    const [isDoubleClick, setIsDoubleClick] = useState<boolean>(false);

    const handleDoubleClick = () => {
        const currentTime = new Date().getTime();
        const clickTimeDifference = currentTime - lastClickTime;

        if (clickTimeDifference < 300) {
            // Consider it a double click
            setClickCount(clickCount + 1);
            // Perform your double click action here
            setIsDoubleClick(true);
        } else {
            // Single click
            setClickCount(1);
            setIsDoubleClick(false);
        }

        setLastClickTime(currentTime);
    };

    return { isDoubleClick, handleDoubleClick };
};

export default useDoubleClick;
