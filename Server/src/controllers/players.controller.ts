import { Request, Response } from "express";
import { CreateMovieRequestBody, GetMovieRequestBody } from "../model/types/http/requests";
import { Movie, MovieOMDB, MovieTMDB, VideoModel } from "../model/types/movie";
import { FETCH_MOVIES_NUM, PACK_CARDS_NUM } from "../model/constant";
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
import { logMovieCount } from "../utils/logs";
import { IActor, IDirector, IMovie } from "../model/interfaces/scheme";
import { getDifficulty } from "../utils/filter";
import { getDBmovies, splitRoundsMovies } from "../utils/movies";

export default class PlayersController {
    async create(
        req: Request<any, any, CreateMovieRequestBody>,
        res: Response<
            ResponseBody<{ from: number; created: number; nextPage: number; movies: IMovie[] }>
        >,
    ) {
        const body: CreateMovieRequestBody = req.body;
        // response(res, {
        //     statusCode: StatusCode.CREATED,
        //     message: msg.movies.success.create,
        //     data: { from, created, nextPage, movies: moviesOutput },
        // });
        // handleError(res, error, { from, created, nextPage, movies: moviesOutput });
    }

    async getPlayers(
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
