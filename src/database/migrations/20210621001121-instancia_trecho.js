'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instancia_trecho', { 
      numero_voo: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'voo', key:'numero_voo'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      numero_trecho: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'trecho_voo', key:'numero_trecho'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_aeronave: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'aeronave', key:'codigo_aeronave'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_aeroporto_partida: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'aeroporto', key:'codigo_aeroporto'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_aeroporto_chegada: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'aeroporto', key:'codigo_aeroporto'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data_: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      numero_assento_disponivel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario_partida: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario_chegada: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instancia_trecho');
  }
};