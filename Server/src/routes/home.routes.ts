import { Router } from "express";
import HomeController from "../controllers/home.controller";

class HomeRoutes {
    router = Router();
    controller = new HomeController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/", this.controller.home);
        this.router.get("/ping", this.controller.ping);
        this.router.get("/status", this.controller.status);
    }
}

export default new HomeRoutes().router;
