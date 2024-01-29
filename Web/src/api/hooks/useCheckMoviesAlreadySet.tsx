import { useState } from "react";
import { useMovieContext } from "../../context/MovieContext";
import { useSingleton } from "../../hooks/useSingleton";
import { SessionKey } from "../../models/enums/session";
import Session from "../../utils/sessionStorage";
import { checkMoviesAlreadySet } from "../utils";

const useCheckMoviesAlreadySet = (shuffle: boolean = false) => {
    const { movies, setMovies, setMovieLoading } = useMovieContext();
    const [isExist, setIsExist] = useState<boolean>(false);

    useSingleton(async () => {
        if (shuffle) return;
        setMovieLoading(true);
        if (!checkMoviesAlreadySet(movies)){
            const sessionMovies = Session.get(SessionKey.MOVIES);
            if (sessionMovies && sessionMovies.length > 0) {
                setMovies(sessionMovies);
                setMovieLoading(false);
                setIsExist(true);
            }
        }else{
            setMovieLoading(false);
        }
    });

    return { isExist };
};

export default useCheckMoviesAlreadySet;
