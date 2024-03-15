import mongoose, { Schema } from "mongoose";
import { MovieModelSchema } from "../types/schemas";

const MovieSchema = new Schema<MovieModelSchema>(
    {
        title: { type: String, required: true },
        id: { type: String, required: true },
        poster_path: { type: String, required: true },
        imdbRating: { type: Number, required: true },
        imdbID: { type: String, required: true },
        difficulty: { type: String, required: true },
        isBoxOffice: { type: Boolean, required: true },
        language: { type: String, required: true },
        genre_ids: { type: [Number], required: true },
        release_date: { type: Number, required: true },
        description: { type: String, required: true },
        video: {
            url: { type: String },
            title: { type: String },
        },
        actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
        director: { type: Schema.Types.ObjectId, ref: "Director" },
    },
    {
        versionKey: false,
        timestamps: true,
    },
);

const MovieModel = mongoose.model<MovieModelSchema>("Movies", MovieSchema);
export default MovieModel;
