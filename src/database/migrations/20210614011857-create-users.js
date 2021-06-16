//TABELA CRIAÇÃO

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    return await queryInterface.dropTable('users');
    
  }
};
