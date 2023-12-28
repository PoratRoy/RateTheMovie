import { createContext, useContext, useState } from "react";
import { Movie, MovieFilters } from "../models/types/movie";

export const MovieContext = createContext<{
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieLoading: boolean;
    setMovieLoading: React.Dispatch<React.SetStateAction<boolean>>;
    filters: MovieFilters | undefined;
    setFilters: React.Dispatch<React.SetStateAction<MovieFilters | undefined>>;
}>({
    movies: [],
    setMovies: () => {},
    movieLoading: false,
    setMovieLoading: () => {},
    filters: undefined,
    setFilters: () => {},
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movieLoading, setMovieLoading] = useState<boolean>(false);
    const [filters, setFilters] = useState<MovieFilters | undefined>();

    return (
        <MovieContext.Provider
            value={{ movies, setMovies, movieLoading, setMovieLoading, filters, setFilters }}
        >
            {children}
        </MovieContext.Provider>
    );
};
