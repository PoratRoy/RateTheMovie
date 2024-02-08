import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import Server from "../index";
import ServerSocket from "./socket";
import GameSocket from "./socket/game.socket";

const app: Application = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
new Server(app);

const httpServer = app
    .listen(PORT, "localhost", function () {
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
