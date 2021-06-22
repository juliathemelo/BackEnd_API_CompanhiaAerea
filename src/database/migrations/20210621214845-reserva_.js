'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reserva_assento', { 
      numero_voo: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'instancia_trecho', key:'numero_voo'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      numero_trecho: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'instancia_trecho', key:'numero_trecho'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data_: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'instancia_trecho', key:'data_'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      numero_assento: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nome_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telefone_cliente: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reserva_assento');
  }
};