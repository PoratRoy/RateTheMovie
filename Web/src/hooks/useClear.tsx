import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import { useGamePlayContext } from "../context/GamePlayContext";
import path from "../router/routePath.json";

const useClear = () => {
    const navigate = useNavigate();
    const { clearMovieContext } = useMovieContext();
    const { clearGameContext } = useGamePlayContext();

    const handleClear = (link: string = path.land) => {
        clearMovieContext();
        clearGameContext();
        navigate(link);
    };

    return { handleClear };
};

export default useClear;
