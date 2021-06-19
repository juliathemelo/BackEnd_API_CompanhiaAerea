'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipo_aeronave', { 
      nome_tipo_aeronave: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      qtd_max_assento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      companhia: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipo_aeronave');
  }
};