import { Request, Response } from "express";
import MovieDatabaseService from "../database/MovieTable";
import { mockMovie } from "../model/mock";
import { response } from "../libs/response";
import { StatusCode } from "../model/enum/http";
import msg from "../model/constant/http/messages.json";

export default class HomeController {
    home(req: Request, res: Response) {
        return res.status(200).json({ message: "Welcome to the Server!" });
    }

    ping(req: Request, res: Response) {
        return res.status(200).json({ message: "pong" });
    }

    async connectDB(req: Request, res: Response) {
        const createOutput = await MovieDatabaseService.createMovie(mockMovie);
        response(res, {
            statusCode: StatusCode.CREATED,
            message: msg.movies.success.create,
            data: createOutput,
        });
    }
}
