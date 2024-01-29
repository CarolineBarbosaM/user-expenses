import sequelize from "sequelize";
import { Model } from "sequelize";
import db from '.'
import Users from "./Users";
import Expenses from "./Expenses";

class UsersExpenses extends Model {
    declare id: number
    declare description: string
    declare date_expense: Date
    declare value: number
    declare user_id: number
}

UsersExpenses.init({
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER
  },      
  userId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: { 
      model: 'users', 
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  expenseId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: { 
      model: 'expenses', 
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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
    tableName: 'user_expenses',
    timestamps: true
})

Users.belongsToMany(Expenses, {
  foreignKey: 'userId',
  otherKey: 'expenseId',
  as: 'expenses',
  through: UsersExpenses,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

Expenses.hasOne(Users, {
  foreignKey: 'expenseId',
  as: 'users',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

export default UsersExpenses