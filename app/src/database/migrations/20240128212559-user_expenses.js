'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('user_expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },      
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'users', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      expenseId: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('user_expenses')
  }
};
