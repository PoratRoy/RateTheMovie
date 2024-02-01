import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import Server from "../index";
import Websocket from "./socket";
import OrdersSocket from "./socket/orders.socket";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

const forSocket = app
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

const io = Websocket.getInstance(forSocket);
io.initializeHandlers([{ path: "/orders", handler: new OrdersSocket() }]);
