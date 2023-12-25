export type Movie = {
    title: string;
    poster_path: string;
    imdbID?: string;
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    release_date?: string;
    imdbRating?: string;
    imdbVotes?: string;
    video?: string;
    actors?: string;
    director?: string;
    website?: string;
};

export type MovieTMDB = {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
};

export type MovieOMDB = {
    Actors?: string;
    Awards?: string;
    BoxOffice?: string;
    Country?: string;
    DVD?: string;
    Director?: string;
    Genre?: string;
    Language?: string;
    Metascore?: string;
    Plot?: string;
    Poster?: string;
    Production?: string;
    Rated?: string;
    Ratings?: { Source?: string; Value?: string }[];
    Released?: string;
    Response?: string;
    Runtime?: string;
    Title?: string;
    Type?: string;
    Website?: string;
    Writer?: string;
    Year?: string;
    imdbID?: string;
    imdbRating?: string;
    imdbVotes?: string;
};

export type TargetMovieCard = {
    id?: string;
    movie?: Movie;
}