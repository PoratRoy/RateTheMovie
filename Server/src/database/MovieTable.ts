import MovieModel from "../model/schemas/Movie";
import { DBCreateError, DBError } from "../libs/error";
import { Tables } from "../model/enum/database";
import { Movie } from "../model/types/movie";
import { MovieOutput } from "../model/types/schemas";
import { ByActorFilter, ByDetailsFilter, ByDirectorFilter } from "../model/types/filter";
import ActorDatabaseService from "./ActorTable";
import DirectorDatabaseService from "./DirectorTable";
import { TOP_RATED_NUM } from "../model/constant";
import { currentYear } from "../utils/time";
import { Difficulty } from "../model/types/union";

export default class MovieDatabaseService {
    public static createMovie = async (movieProps: Movie): Promise<MovieOutput> => {
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

    public static getMovieById = async (id: string): Promise<MovieOutput | null> => {
        try {
            console.info(`Get movie with movie id: ${id}`);
            const movie = await MovieModel.findOne({ id }).lean().exec();
            console.info(`Movie with movie id ${id}: `, movie);
            return movie;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByDetails = async (
        amount: number,
        difficulty: Difficulty,
        filters: ByDetailsFilter,
    ): Promise<MovieOutput[] | null> => {
        const { year, genre, language } = filters;
        if (!year) return null;

        try {
            const movies = await MovieModel.aggregate([
                {
                    $match: {
                        release_date: {
                            $gte: year[0],
                            $lte: year[1],
                        },
                    },
                },
                { $sample: { size: amount } },
            ]);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByActor = async (
        amount: number,
        difficulty: Difficulty,
        filters: ByActorFilter,
    ): Promise<MovieOutput[] | null> => {
        const { name } = filters;

        try {
            console.info(`Get movie with actor name: ${name}`);
            const actor = await ActorDatabaseService.getActorByName(name);
            if (!actor) return null;

            const movies = await MovieModel.aggregate([
                { $match: { actors: actor._id } },
                { $sample: { size: amount } },
            ]);
            console.info(`Movies with actor name: ${name}: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByDirector = async (
        amount: number,
        difficulty: Difficulty,
        filters: ByDirectorFilter,
    ): Promise<MovieOutput[] | null> => {
        const { name } = filters;

        try {
            console.info(`Get movie with director name: ${name}`);
            const director = await DirectorDatabaseService.getDirectorByName(name);
            if (!director) return null;

            const movies = await MovieModel.aggregate([
                { $match: { director: director._id } },
                { $sample: { size: amount } },
            ]);
            console.info(`Movies with director name: ${name}: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByBoxOffice = async (
        amount: number,
        difficulty: Difficulty,
    ): Promise<MovieOutput[] | null> => {
        try {
            const movies = await MovieModel.aggregate([
                { $match: { isBoxOffice: true } },
                { $sample: { size: amount } },
            ]);
            console.info(`Box office movies: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByTopRated = async (
        amount: number,
        difficulty: Difficulty,
    ): Promise<MovieOutput[] | null> => {
        try {
            const movies = await MovieModel.aggregate([
                { $match: { imdbRating: { $gt: TOP_RATED_NUM } } },
                { $sample: { size: amount } },
            ]);
            console.info(`Top rated movies: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };

    public static getMoviesByNewRelease = async (
        amount: number,
        difficulty: Difficulty,
    ): Promise<MovieOutput[] | null> => {
        try {
            const movies = await MovieModel.aggregate([
                { $match: { release_date: currentYear } },
                { $sample: { size: amount } },
            ]);
            console.info(`New release movies: `, movies);
            return movies;
        } catch (error) {
            throw new DBError(error as string);
        }
    };
}
