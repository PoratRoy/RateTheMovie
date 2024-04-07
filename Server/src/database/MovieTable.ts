import MovieModel from "../model/schemas/Movie";
import { DBCreateError, DBError } from "../libs/error";
import { Tables } from "../model/enum/database";
import { Movie } from "../model/types/movie";
import { ByActorFilter, ByDetailsFilter, ByDirectorFilter } from "../model/types/filter";
import ActorDatabaseService from "./ActorTable";
import DirectorDatabaseService from "./DirectorTable";
import { TOP_RATED_NUM } from "../model/constant";
import { currentYear } from "../utils/time";
import { Difficulty } from "../model/types/union";
import { IMovie } from "../model/interfaces/scheme";
import { populateMovie } from "../model/db/populate";
import { specifyDifficulty } from "../model/db/difficulty";

export default class MovieDatabaseService {
    public static createMovie = async (movieProps: Movie): Promise<IMovie> => {
        try {
            const newMovie = new MovieModel({
                ...movieProps,
            });
            console.info(`Create new movie with params: `, newMovie);
            const savedMovie = await MovieModel.create(newMovie);
            console.info(`New movie created: `, savedMovie);
            return savedMovie.toObject();
        } catch (error) {
            throw new DBCreateError(error as string, Tables.Movies);
        }
    };

    public static getMovieById = async (id: string): Promise<IMovie | null> => {
        try {
            console.info(`Get movie with movie id: ${id}`);
            const movie = await MovieModel.findOne({ id }).lean().exec();
            console.info(`Movie with movie id ${id}: `, movie);
            return movie;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByDifficulty = async (
        amount: number,
        difficulty: Difficulty,
    ): Promise<IMovie[] | null> => {
        console.info(`Get movies with difficulty: ${difficulty}`);
        const difficultyCriteria = specifyDifficulty(difficulty);
        try {
            const movies = await MovieModel.aggregate([
                { $match: { ...difficultyCriteria } },
                { $sample: { size: amount } },
                ...populateMovie,
            ]).exec();
            console.info(`difficulty ${difficulty} movies: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByGenre = async (
        amount: number,
        difficulty: Difficulty,
        genre: string[] | undefined,
    ): Promise<IMovie[] | null> => {
        console.info(`Get movies with genres: ${genre}`);
        if (!genre) return null;
        const difficultyCriteria = specifyDifficulty(difficulty);
        try {
            const movies = await MovieModel.aggregate([
                {
                    $match: {
                        genre_ids: { $in: genre.map((g) => parseInt(g)) },
                        ...difficultyCriteria,
                    },
                },
                { $sample: { size: amount } },
                ...populateMovie,
            ]);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByActor = async (
        amount: number,
        filters: ByActorFilter,
    ): Promise<IMovie[] | null> => {
        const { name } = filters;

        try {
            console.info(`Get movies with actor name: ${name}`);
            const actor = await ActorDatabaseService.getActorByName(name);
            if (!actor) return null;

            const movies = await MovieModel.aggregate([
                { $match: { actors: actor._id } },
                { $sample: { size: amount } },
                ...populateMovie,
            ]);
            console.info(`Movies with actor name: ${name}: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByTopMovies = async (
        amount: number,
        difficulty: Difficulty,
    ): Promise<IMovie[] | null> => {
        console.info(`Get top movies`);
        const difficultyCriteria = specifyDifficulty(difficulty);
        try {
            const movies = await MovieModel.aggregate([
                { $match: { imdbRating: { $gt: TOP_RATED_NUM }, ...difficultyCriteria } },
                { $sample: { size: amount } },
                ...populateMovie,
            ]);
            console.info(`Top movies: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };
}
