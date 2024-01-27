class ExpensesController {
    static async createdExpenses(req, res) {
        return res.status(200).json('Criar expense')
    }

    static async getExpensesById(req, res) {
        return res.status(200).json('Buscar todos expenses')
    }

    static async getExpensess(req, res) {
        return res.status(200).json('Buscar um expense')
    }

    static async updatedExpenses(req, res) {
        return res.status(200).json('Atualizar expense')
    }

    static async deletedExpenses(req, res) {
        return res.status(200).json('Deletar expense')
    }
}

export default ExpensesController