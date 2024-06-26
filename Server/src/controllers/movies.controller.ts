import { Request, Response } from "express";
import { CreateMovieRequestBody, GetMovieRequestBody } from "../model/types/http/requests";
import { Movie, MovieOMDB, MovieTMDB, VideoModel } from "../model/types/movie";
import { FETCH_MOVIES_NUM, PACK_CARDS_NUM } from "../model/constant";
import { setNewMovie } from "../utils/init";
import URL from "../model/constant/path.json";
import MovieDatabaseService from "../database/MovieTable";
import { ResponseBody } from "../model/types/http/responses";
import msg from "../model/constant/messages.json";
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
import { logMovieCount } from "../utils/logs";
import { IActor, IDirector, IMovie } from "../model/interfaces/scheme";
import { getDifficulty } from "../utils/filter";
import { getDBmovies, splitRoundsMovies } from "../utils/movies";

export default class MoviesController {
    async create(
        req: Request<any, any, CreateMovieRequestBody>,
        res: Response<
            ResponseBody<{ from: number; created: number; nextPage: number; movies: IMovie[] }>
        >,
    ) {
        const body: CreateMovieRequestBody = req.body;
        const { filters, page: startPage, iterations } = body;
        let moviesOutput: IMovie[] = [];
        let from = 0;
        let created = 0;
        let nextPage = startPage + 1;

        try {
            for (let page = startPage; page < startPage + iterations; page++) {
                const resultsTMDB: MovieTMDB[] = await fetchTMDB(URL.tmdb.discover, page, filters);
                from = from + resultsTMDB.length;
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

                        const isVlid = validation(
                            filters,
                            release_date,
                            genre_ids,
                            original_language,
                        );

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
                                const resultsOMDB: MovieOMDB = await fetchOMDB(
                                    URL.omdb,
                                    title,
                                    year,
                                );
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
                                    nextPage = page + 1;
                                }
                            }
                        }
                        await delayPromise(1000);
                    }
                }
            }
            response(res, {
                statusCode: StatusCode.CREATED,
                message: msg.movies.success.create,
                data: { from, created, nextPage, movies: moviesOutput },
            });
        } catch (error) {
            handleError(res, error, { from, created, nextPage, movies: moviesOutput });
        }
    }

    async getMovies(
        req: Request<any, any, GetMovieRequestBody>,
        res: Response<ResponseBody<{ movies: IMovie[][]; amount: number }>>,
    ) {
        try {
            const { filters, rounds } = req.body;
            const amount = PACK_CARDS_NUM * rounds;
            const movies: IMovie[] = await getDBmovies(filters, amount);
            const matrix: IMovie[][] = await splitRoundsMovies(movies, filters, rounds);

            response(res, {
                statusCode: StatusCode.OK,
                message: msg.movies.success.get,
                data: { movies: matrix, amount: matrix.length },
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
}
