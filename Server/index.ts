import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./src/routes";
import logMiddleware from "./src/middlewares/logMiddleware";
import headersMiddleware from "./src/middlewares/headersMiddleware";

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    private config(app: Application): void {
        const corsOptions: CorsOptions = {
            origin: process.env.FE_URL || "http://localhost:3000",
            optionsSuccessStatus: 200,
        };

        app.use(cors(corsOptions));
        app.use(logMiddleware);
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(headersMiddleware);
    }
}
