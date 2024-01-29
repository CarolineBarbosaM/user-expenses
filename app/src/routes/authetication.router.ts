import { Router } from "express";
import UsersAutheticationController from "../controllers/authetication.controller";

const controller = new UsersAutheticationController()
const userAutheticationRouter = Router()

userAutheticationRouter.post('/login', controller.login.bind(controller))

export default userAutheticationRouter