import http from "http";
import express, { Application } from "express";
import { ServerSocket } from "./tests";

const application: Application = express();
const httpServer = http.createServer(application);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

/** Start Socket */
new ServerSocket(httpServer);

/** Log the request */
application.use((req, res, next) => {
    console.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on("finish", () => {
        console.info(
            `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
        );
    });

    next();
});

/** Parse the body of the request */
application.use(express.urlencoded({ extended: true }));
application.use(express.json());

/** Rules of our API */
application.use((req, res, next) => {
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

/** Healthcheck */
application.get("/ping", (req, res, next) => {
    return res.status(200).json({ hello: "world!" });
});

/** Socket Information */
application.get("/status", (req, res, next) => {
    return res.status(200).json({ users: ServerSocket.instance.users });
});

/** Error handling */
application.use((req, res, next) => {
    const error = new Error("Not found");

    res.status(404).json({
        message: error.message,
    });
});

httpServer
    .listen(PORT, () => console.log(`Server is running on port ${PORT}.`))
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.error("Error: address already in use");
        } else {
            console.error(err);
        }
    });
