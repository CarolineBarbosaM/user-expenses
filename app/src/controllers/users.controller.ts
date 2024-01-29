import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users.service";

class UsersController {
    private service = new UsersService()

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message: message } = await this.service.create(req.body)

            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const { status, message: message } = await this.service.getAll()
            
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const { status, message: message } = await this.service.getById(
                id
            )

            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params
            const body = req.body

            const { status, message: message } = await this.service.update(
                id,
                body
            )
            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params

            const { status, message: message } = await this.service.delete(
                id
            )

            res.status(status).json(message)
        } catch (error) {
            next(error)
        }
    }
}

export default UsersController