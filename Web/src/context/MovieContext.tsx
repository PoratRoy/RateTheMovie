import { createContext, useContext, useState } from "react";
import { Movie, MovieFilters } from "../models/types/movie";
import { initMovieList } from "../models/initialization/movie";
import Session from "../utils/sessionStorage";
import { SessionKey } from "../models/enums/session";

export const MovieContext = createContext<{
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieLoading: boolean | undefined;
    setMovieLoading: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    filters: MovieFilters | undefined;
    setFilters: React.Dispatch<React.SetStateAction<MovieFilters | undefined>>;
    clearMovieContext: () => void;
}>({
    movies: [],
    setMovies: () => {},
    movieLoading: undefined,
    setMovieLoading: () => {},
    filters: undefined,
    setFilters: () => {},
    clearMovieContext: () => {},
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>(initMovieList());
    const [movieLoading, setMovieLoading] = useState<boolean | undefined>();
    const [filters, setFilters] = useState<MovieFilters | undefined>();

    const clearMovieContext = () => {
        Session.remove(SessionKey.MOVIES);
        setMovies(initMovieList());
        setFilters(undefined);
    };

    return (
        <MovieContext.Provider
            value={{
                movies,
                setMovies,
                movieLoading,
                setMovieLoading,
                filters,
                setFilters,
                clearMovieContext,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};
