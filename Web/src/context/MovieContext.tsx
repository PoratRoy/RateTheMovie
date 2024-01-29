import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";
import { initMovieList } from "../models/initialization/movie";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";

export const MovieContext = createContext<{
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieLoading: boolean | undefined;
    setMovieLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    clearMovieContext: () => void;
}>({
    movies: [],
    setMovies: () => {},
    movieLoading: undefined,
    setMovieLoading: () => {},
    clearMovieContext: () => {},
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>(initMovieList());
    const [movieLoading, setMovieLoading] = useState<boolean | undefined>();

    const clearMovieContext = () => {
        Session.remove(SessionKey.MOVIES);
        setMovies(initMovieList());
        setMovieLoading(undefined);
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                setMovies,
                movieLoading,
                setMovieLoading,
                clearMovieContext,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
