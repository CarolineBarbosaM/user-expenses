import { NextFunction, Request, Response } from "express";
import UserAutheticationService from "../services/authetication.service";


class UsersAutheticationController {
    private service = new UserAutheticationService()

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message: message } = await this.service.login(
                req.body
            )
            
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default UsersAutheticationController