import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { useGamePlayContext } from "../context/GamePlayContext";

const useClear = () => {
    const navigate = useNavigate();
    const { clearMovieContext } = useMovieContext();
    const { clearGameContext, refreshGameContext } = useGamePlayContext();

    const handleClear = (link?: string) => {
        clearMovieContext();
        clearGameContext();
        if (link) navigate(link);
    };

    const handleRefresh = () => {
        clearMovieContext();
        refreshGameContext();
    }

    return { handleClear, handleRefresh };
};

export default useClear;
