'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('voo', { 
      numero_voo: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      companhia_aerea: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dias_da_semana: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('voo');
  }
};