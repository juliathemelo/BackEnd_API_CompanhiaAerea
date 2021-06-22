//LIGAÇÃO COM O SEQUELIZE E O DATABASE.JS(MYSQL)

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Aeroporto = require('../models/Aeroporto')
const Voo = require('../models/Voo')
const Trecho_voo = require('../models/Trecho_voo')
const Tipo =  require('../models/Tipo_aeronave')
const Aero = require('../models/Aeronave')
const Instancia = require('../models/Instancia_trecho')
const Pousar = require('../models/Pode_pousar')
const Tarifa = require('../models/Tarifa')
const Reserva = require('../models/Reserva_assento')

const connection = new Sequelize(dbConfig)

Aeroporto.init(connection)
Voo.init(connection)
Trecho_voo.init(connection)
Tipo.init(connection)
Aero.init(connection)
Instancia.init(connection)
Pousar.init(connection)
Tarifa.init(connection)
Reserva.init(connection)


Aeroporto.associate(connection.models)
Voo.associate(connection.models)
Trecho_voo.associate(connection.models)
Tipo.associate(connection.models)
Aero.associate(connection.models)
Instancia.associate(connection.models)
Pousar.associate(connection.models)
Tarifa.associate(connection.models)
Reserva.associate(connection.models)

module.exports = connection