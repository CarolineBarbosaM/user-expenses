import sequelize from "sequelize";
import { Model } from "sequelize";
import db from '.'

class Users extends Model {
    declare id: number
    declare name: string
    declare email: string
}

Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },
    nome: {
        type: sequelize.STRING
    },
    email: {
        type: sequelize.STRING
    },
    createdAt: {
        allowNull: false,
        type: sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: sequelize.DATE
    },
}, {
    sequelize: db,
    tableName: 'users',
    timestamps: true
})

export default Users