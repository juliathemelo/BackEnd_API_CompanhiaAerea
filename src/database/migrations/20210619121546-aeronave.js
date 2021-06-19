'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aeronave', { 
      codigo_aeronave: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      numero_total_assentos: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_aeronave: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'tipo_aeronave', key:'nome_tipo_aeronave'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('aeronave');
  }
};