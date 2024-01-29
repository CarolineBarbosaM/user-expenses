import { ModelStatic } from "sequelize";
import md5 from "md5";
import Users from "../database/models/Users";
import response from "../utils/responses";
import { sign } from "../jwt/jwt";

class UserAutheticationService {
    private model: ModelStatic<Users> = Users;

    async login(body: { email: string, password: string }) {
        const hashPassword = md5(body.password)

        const user = await this.model.findOne({
            where: {
                email: body.email,
                password: hashPassword
            }
        })

        if(!user) return response(404, 'NOT_FOUND')

        const { id, email } = user
        const token = sign({ id, email })

        return response(200, { id, email, token })
    }
}

export default UserAutheticationService