import { useGamePlayContext } from "../context/GamePlayContext";

const useClear = () => {
    const { clearGameContext, refreshGameContext } = useGamePlayContext();

    const handleClear = () => {
        clearGameContext();
    };

    const handleRefresh = () => {
        refreshGameContext();
    }

    return { handleClear, handleRefresh };
};

export default useClear;
