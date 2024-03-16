import { Router } from "express";
import MoviesController from "../controllers/movies.controller";

class MoviesRoutes {
    router = Router();
    controller = new MoviesController();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.post("/", this.controller.getMovies);
        this.router.post("/create", this.controller.create);
        this.router.get("/crew", this.controller.getCrew);
        this.router.delete("/:id", this.controller.delete);
    }
}

export default new MoviesRoutes().router;
