import sequelize from "sequelize";
import { Model } from "sequelize";
import db from '.'

class Expenses extends Model {
    declare id: number
    declare description: string
    declare date_expense: Date
    declare value: number
    declare user_id: number
}

Expenses.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER
    },      
    description: {
      type: sequelize.STRING,
    },
    date_expense: {
      type: sequelize.DATE,
    },
    value: {
      type: sequelize.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE,
    }
}, {
    sequelize: db,
    tableName: 'expenses',
    timestamps: true
})


export default Expenses