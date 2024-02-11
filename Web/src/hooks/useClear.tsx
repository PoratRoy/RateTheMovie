import { useNavigate } from "react-router-dom";
import { useGamePlayContext } from "../context/GamePlayContext";

const useClear = () => {
    const navigate = useNavigate();
    const { clearGameContext, refreshGameContext } = useGamePlayContext();

    const handleClear = (link?: string) => {
        clearGameContext();
        if (link) navigate(link);
    };

    const handleRefresh = () => {
        refreshGameContext();
    }

    return { handleClear, handleRefresh };
};

export default useClear;
