import { ModelStatic } from "sequelize";
import Expenses from "../database/models/Expenses";
import IExpenses from "../interfaces/IExpenses.interface";
import response from "../utils/responses";
import Email from "../email";
import UsersExpenses from "../database/models/UsersExpenses";
import Users from "../database/models/Users";

class ExpensesService {
    private model: ModelStatic<Expenses> = Expenses;
    private modelUserExpenses: ModelStatic<UsersExpenses> = UsersExpenses;
    private modelUser: ModelStatic<Users> = Users;
    private newEmail = new Email()

    async create(expense: IExpenses) {

        const createExpense = await this.model.create({ ...expense })

        await this.modelUserExpenses.create(
            {
                userId: expense.userId,
                expenseId: expense.id
            }
        )

        const userEmail = await this.getEmail(expense.id)

        this.newEmail.toSend(userEmail)

        return response(201, createExpense)
    }

    async getAll() {
        const expenses = await this.model.findAll()
        return response(200, expenses)
    }

    async getById(id: string) {
        const expense = await this.model.findOne({ where: { id} })

        if(!expense) return response(404, 'Despesa não encontrada')

        return response(200, expense)
    }

    async getEmail(userId: string | undefined) {
        const expense = await this.modelUser.findOne({ where: { id: userId } })

        if(!expense) return 

        return expense.email
    }

    async update(id: string, expense: IExpenses) {
        const expenseUpdated = await this.model.findOne({ where: { id} })

        if(!expenseUpdated) return response(404, 'Despesa não encontrada')

        const updatedExpense = await this.model.update({...expenseUpdated }, {where: {id}})

        return response(200, updatedExpense)
    }

    async delete(id: string) {
        const expenseDelete= await this.model.findOne({ where: { id} })

        if(!expenseDelete) return response(404, 'Despesa não encontrada')

        await this.model.destroy({ where: { id }})

        return response(200, 'Deletado com sucesso.')
    }
}

export default ExpensesService