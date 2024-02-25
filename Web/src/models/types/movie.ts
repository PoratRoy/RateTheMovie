export type Movie = {
    title: string;
    id: string;
    poster_path: string;
    imdbRating: string;
    imdbID?: string;
    genre_ids?: number[];
    release_date?: string;
    video?: VideoModel;
    actors: CrewModel[];
    director?: CrewModel;
    description?: string;
};

export type CrewModel = {
    name: string;
    img: string;
    job: string;
};

export type VideoModel = {
    url: string;
    title: string;
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

export type MovieVideo = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export type MovieCast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

export type MovieCrew = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
};

