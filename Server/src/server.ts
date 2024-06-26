import express, { Application } from "express";
import Server from "../index";
import ServerSocket from "./socket";
import GameSocket from "./socket/game.socket";
import mongoose from "mongoose";

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const URL: string = process.env.URL || "localhost";

new Server(app);

mongoose
    .connect((process.env.MONGO_KEY as string) || "")
    .then(() => {
        console.log("Connected to database");
        const httpServer = app
            .listen(PORT, URL, function () {
                console.log(`Server is running on port ${PORT}.`);
            })
            .on("error", (err: any) => {
                if (err.code === "EADDRINUSE") {
                    console.error("Error: address already in use");
                } else {
                    console.error(err);
                }
            });
        const io = ServerSocket.getInstance(httpServer);
        io.initializeHandlers([{ path: "/game", handler: new GameSocket() }]);
    })
    .catch((err) => {
        console.log("Error: ", err);
    });
