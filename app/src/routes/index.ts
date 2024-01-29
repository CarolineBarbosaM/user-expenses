import { Router } from "express";
import userRouter from "./user.router";
import userAutheticationRouter from "./authetication.router";
import expenseRouter from "./expense.route";

const router = Router()

router.use(
    userRouter,
    expenseRouter,
    userAutheticationRouter,
)

export default router