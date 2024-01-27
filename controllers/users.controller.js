class UserController {
    static async createdUser(req, res) {
        return res.status(200).json('Criar usuario')
    }

    static async getUserById(req, res) {
        return res.status(200).json('Buscar todos usuarios')
    }

    static async getUsers(req, res) {
        return res.status(200).json('Buscar um usuário')
    }

    static async updatedUser(req, res) {
        return res.status(200).json('Atualizar usuário')
    }

    static async deletedUser(req, res) {
        return res.status(200).json('Deletar usuário')
    }
}

export default UserController