'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trecho_voo', { 
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
        primaryKey: true
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
      horario_partida_previsto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      horario_chegada_previsto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trecho_voo');
  }
};