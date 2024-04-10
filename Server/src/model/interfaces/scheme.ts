import mongoose, { Schema } from "mongoose";

export interface IActor {
    _id: mongoose.Types.ObjectId;
    name: string;
    img: string;
    job: string;
}

export interface IDirector {
    _id: mongoose.Types.ObjectId;
    name: string;
    img: string;
    job: string;
}

export interface IMovie extends Document {
    _id: mongoose.Types.ObjectId;
    title: string;
    id: string;
    poster_path: string;
    imdbRating: number;
    imdbID: string;
    difficulty: string;
    isBoxOffice: boolean;
    language: string;
    genre_ids: number[];
    release_date: number;
    description: string;
    video: {
        url: string;
        title: string;
    };
    actors: Schema.Types.ObjectId[];
    director: Schema.Types.ObjectId;
}

export interface IPlayer extends Document {
    name: string;
    avaterId: number;
    score: number;
    rank: number;
}
