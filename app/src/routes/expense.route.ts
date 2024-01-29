import { Router } from "express";
import ExpenseController from "../controllers/expenses.controller";

const controller = new ExpenseController()
const expenseRouter = Router()

expenseRouter.post('/expense', controller.create.bind(controller))
expenseRouter.get('/expense', controller.getAll.bind(controller))
expenseRouter.get('/expense/:id', controller.getById.bind(controller))
expenseRouter.put('/expense', controller.update.bind(controller))
expenseRouter.delete('/expense', controller.delete.bind(controller))

export default expenseRouter