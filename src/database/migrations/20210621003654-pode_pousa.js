'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pode_pousar', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true 
      },
      nome_tipo_aeronave: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'tipo_aeronave', key:'nome_tipo_aeronave'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_aeroporto: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'aeroporto', key:'codigo_aeroporto'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pode_pousar');
  }
};