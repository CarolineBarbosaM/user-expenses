import { ModelStatic } from "sequelize";
import Users from "../database/models/Users";
import response from "../utils/responses";
import IUsers from "../interfaces/IUsers.interface";
import md5 from "md5";
import schema from "./validations/schema";

class UsersService {
    private model: ModelStatic<Users> = Users;

    async create(user: IUsers) {
        const { error } = schema.user.validate(user)
        if(error) return response(422, error.message)

        const { email } = user
        const newUser = await this.model.findOne({ where: { email} })

        if(newUser) {
            return response(404, 'Usuário já está cadastrado!')
        }

        const hashPass = md5(user.password)
        const createUser = await this.model.create({ ...user, password: hashPass })

        return response(201, createUser)
    }

    async getAll() {
        const users = await this.model.findAll()
        return response(200, users)
    }

    async getById(id: string) {
        const user = await this.model.findOne({ where: { id} })

        if(!user) return response(404, 'Usuário não encontrado')

        return response(200, user)
    }

    async update(id: string, user: IUsers) {
        const userUpdated = await this.model.findOne({ where: { id} })

        if(!userUpdated) return response(404, 'Usuário não encontrado')

        const hashPass = md5(user.password)
        const updatedUser = await this.model.update({...userUpdated, password: hashPass}, {where: {id}})

        return response(200, updatedUser)
    }

    async delete(id: string) {
        const userDelete= await this.model.findOne({ where: { id} })

        if(!userDelete) return response(404, 'Usuário não encontrado')

        await this.model.destroy({ where: { id }})

        return response(200, 'Deletado com sucesso')
    }
}

export default UsersService