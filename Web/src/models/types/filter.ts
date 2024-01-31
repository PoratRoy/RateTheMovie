export type DateRangeOptionFilter = { start?: number; end?: number };

export type GenreOptionFilter = {
    id: number;
    name: string;
};

export type CountryOptionFilter = {
    name: string;
    emoji: string;
    image: string;
    iso_3166_1: string;
};

export type LanguageOptionFilter = {
    id: string;
    name: string;
    emoji: string;
}