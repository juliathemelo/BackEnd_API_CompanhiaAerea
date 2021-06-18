//TABELA CRIAÇÃO

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('aeroporto', { 
      codigo_aeroporto: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
   
    return await queryInterface.dropTable('aeroporto');
    
  }
};
