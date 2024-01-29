import { Router } from "express";
import UsersController from "../controllers/users.controller";

const controller = new UsersController()
const userRouter = Router()

userRouter.post('/user', controller.create.bind(controller))
userRouter.get('/user', controller.getAll.bind(controller))
userRouter.get('/user/:id', controller.getById.bind(controller))
userRouter.put('/user', controller.update.bind(controller))
userRouter.delete('/user', controller.delete.bind(controller))

export default userRouter