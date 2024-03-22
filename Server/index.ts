import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./src/routes";

export default class Server {
    constructor(app: Application) {
        this.config(app);
        new Routes(app);
    }

    private config(app: Application): void {
        // const corsOptions: CorsOptions = {
        //     origin: [process.env.FE_URL || "http://localhost:5173"],
        // };
        //TODO: middlewares
        app.use(cors());
        app.use((req, res, next) => {
            console.info(
                `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`,
            );

            res.on("finish", () => {
                console.info(
                    `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
                );
            });

            next();
        });
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            );

            if (req.method == "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
                return res.status(200).json({});
            }

            next();
        });
    }
}
