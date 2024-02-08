"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../index"));
const socket_1 = __importDefault(require("./socket"));
const orders_socket_1 = __importDefault(require("./socket/orders.socket"));
const app = (0, express_1.default)();
const server = new index_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
const forSocket = app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running on port ${PORT}.`);
})
    .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.error("Error: address already in use");
    }
    else {
        console.error(err);
    }
});
const io = socket_1.default.getInstance(forSocket);
io.initializeHandlers([{ path: "/orders", handler: new orders_socket_1.default() }]);
