import { Request, Response } from "express";

export default class HomeController {
    home(req: Request, res: Response) {
        return res.status(200).json({ message: "Welcome to the Server!" });
    }
    
    ping(req: Request, res: Response) {
        return res.status(200).json({ message: "pong" });
    }

    status(req: Request, res: Response) {
        return res.status(200).json({ users: [] }); //TODO: fix users
    }
}
