const express = require('express')
const AeroportoController = require('./controllers/AeroportoController')
const VooController = require('./controllers/VooController')
const TrechoController = require('./controllers/TrechovooController')
const TipoController = require('./controllers/TipoaeronaveController')
const AeroController = require('./controllers/AeronaveController')
const routes = express.Router()

routes.get('/aeroporto', AeroportoController.consulta )
routes.post('/aeroporto', AeroportoController.create )

routes.post('/voo', VooController.create)
routes.get('/voo', VooController.consulta)

routes.post('/trecho/:numero_voo/:codigo_aeroporto_partida/:codigo_aeroporto_chegada', TrechoController.create)
routes.get('/trecho', TrechoController.consulta)
routes.put('/trecho', TrechoController.atualizar)

routes.post('/tipo', TipoController.create)
routes.get('/tipo', TipoController.consulta)

routes.post('/aero/:tipo_aeronave', AeroController.create)
routes.get('/aero', AeroController.consulta)
routes.put('/aero', AeroController.atualizar)


module.exports = routes