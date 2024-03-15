import { Application } from "express";
import homeRoutes from "./home.routes";
import movieRoutes from "./movies.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    app.use("/api/movie", movieRoutes);
  }
}
