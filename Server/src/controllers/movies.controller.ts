import { Request, Response } from "express";
import { CreateMovieRequestBody, GetMovieRequestBody } from "../model/types/http/requests";
import { Movie, MovieOMDB, MovieTMDB, VideoModel } from "../model/types/movie";
import { FETCH_MOVIES_NUM } from "../model/constant";
import { setNewMovie } from "../utils/init";
import URL from "../model/constant/path.json";
import MovieDatabaseService from "../database/MovieTable";
import { ResponseBody } from "../model/types/http/responses";
import msg from "../model/constant/http/messages.json";
import { fetchOMDB, fetchTMDB } from "../utils/fetch";
import { response } from "../libs/response";
import { StatusCode } from "../model/enum/http";
import { handleError } from "../libs/error";
import { setCrew } from "../utils/crew";
import { setVideo } from "../utils/video";
import { validation } from "../model/validation";
import { delayPromise, extractYearFromDate } from "../utils/time";
import { setIsBoxOffice } from "../utils/boxOffice";
import ActorDatabaseService from "../database/ActorTable";
import DirectorDatabaseService from "../database/DirectorTable";
import { Difficulty } from "../model/types/union";
import { logMovieCount } from "../utils/logs";
import { IActor, IDirector, IMovie } from "../model/interfaces/scheme";
import { getDifficulty } from "../utils/filter";

export default class MoviesController {
    async create(
        req: Request<any, any, CreateMovieRequestBody>,
        res: Response<ResponseBody<{ from: number; created: number; movies: IMovie[] }>>,
    ) {
        let moviesOutput: IMovie[] = [];
        let from = 0;
        let created = 0;
        try {
            const body: CreateMovieRequestBody = req.body;

            const { filters, page } = body;
            const resultsTMDB: MovieTMDB[] = await fetchTMDB(URL.tmdb.discover, page, filters);
            from = resultsTMDB.length;
            if (resultsTMDB && resultsTMDB.length >= FETCH_MOVIES_NUM) {
                for (const movie of resultsTMDB) {
                    const {
                        title,
                        release_date,
                        id,
                        genre_ids,
                        popularity,
                        original_language,
                        poster_path,
                        overview,
                    } = movie;

                    const isVlid = validation(filters, release_date, genre_ids, original_language);

                    if (
                        id &&
                        title &&
                        overview &&
                        release_date &&
                        poster_path &&
                        original_language &&
                        isVlid &&
                        genre_ids
                    ) {
                        const DBmovie = await MovieDatabaseService.getMovieById(id.toString());
                        if (!DBmovie) {
                            const year = extractYearFromDate(release_date);
                            const resultsOMDB: MovieOMDB = await fetchOMDB(URL.omdb, title, year);
                            const { imdbRating, imdbID } = resultsOMDB;
                            if (imdbRating && imdbRating !== "N/A" && imdbID) {
                                const { actors, director } = await setCrew(id);
                                const video: VideoModel | undefined = await setVideo(id);
                                const isBoxOffice: boolean = await setIsBoxOffice(id);
                                const difficulty = getDifficulty(
                                    popularity,
                                    isBoxOffice,
                                    original_language,
                                    imdbRating,
                                    year,
                                );

                                const newMovie: Movie = setNewMovie(
                                    title,
                                    id,
                                    poster_path,
                                    imdbRating,
                                    imdbID,
                                    difficulty,
                                    isBoxOffice,
                                    original_language,
                                    genre_ids,
                                    year,
                                    overview,
                                    video,
                                    director,
                                    actors,
                                );
                                const createOutput =
                                    await MovieDatabaseService.createMovie(newMovie);
                                moviesOutput.push(createOutput);
                                logMovieCount(created);
                                created++;
                            }
                        }
                    }
                    await delayPromise(1000);
                }
            }

            response(res, {
                statusCode: StatusCode.CREATED,
                message: msg.movies.success.create,
                data: { from, created, movies: moviesOutput },
            });
        } catch (error) {
            handleError(res, error, { from, created, movies: moviesOutput });
        }
    }

    async getMovies(
        req: Request<any, any, GetMovieRequestBody>,
        res: Response<ResponseBody<{ movies: IMovie[]; amount: number }>>,
    ) {
        try {
            const { filters, amount } = req.body;
            const { type, difficulty } = filters;
            let DBmovies: IMovie[] | null = null;

            if ("byDetails" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByDetails(
                    amount,
                    difficulty,
                    type.byDetails,
                );
            } else if ("byDirector" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByDirector(amount, type.byDirector);
            } else if ("byActor" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByActor(amount, type.byActor);
            } else if ("byBoxOffice" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByBoxOffice(amount, difficulty);
            } else if ("byTopRated" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByTopRated(amount, difficulty);
            } else if ("byNewRelease" in type) {
                DBmovies = await MovieDatabaseService.getMoviesByNewRelease(amount, difficulty);
            }
            const movies: IMovie[] = DBmovies ? [...DBmovies] : [];

            response(res, {
                statusCode: StatusCode.OK,
                message: msg.movies.success.get,
                data: { movies, amount: movies.length },
            });
        } catch (error) {
            handleError(res, error);
        }
    }

    async getCrew(
        req: Request,
        res: Response<ResponseBody<{ directors: IDirector[]; actors: IActor[] }>>,
    ) {
        try {
            const actors = await ActorDatabaseService.getAllActors();
            const directors = await DirectorDatabaseService.getAllDirectors();

            response(res, {
                statusCode: StatusCode.OK,
                message: msg.movies.success.get,
                data: { directors, actors },
            });
        } catch (error) {
            handleError(res, error);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "delete OK",
                reqParamId: req.params.id,
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!",
            });
        }
    }
}
