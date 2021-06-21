'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tarifa', { 
      numero_voo: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'voo', key:'numero_voo'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      codigo_tarifa: {
        type: Sequelize.STRING,
        allowNull: false,
        primeryKey: true
      },
      quantidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      restricoes: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarifa');
  }
};