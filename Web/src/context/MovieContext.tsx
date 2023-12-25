import { createContext, useContext, useState } from "react";
import { Movie } from "../models/types/movie";

export const MovieContext = createContext<{
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movieLoading: boolean;
    setMovieLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
    movies: [],
    setMovies: () => {},
    movieLoading: false,
    setMovieLoading: () => {},
});

export const useMovieContext = () => useContext(MovieContext);

export const MovieContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movieLoading, setMovieLoading] = useState<boolean>(false);

    return (
        <MovieContext.Provider value={{ movies, setMovies, movieLoading, setMovieLoading }}>
            {children}
        </MovieContext.Provider>
    );
};
