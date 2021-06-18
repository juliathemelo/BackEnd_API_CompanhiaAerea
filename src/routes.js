const express = require('express')
const AeroportoController = require('./controllers/AeroportoController')
const VooController = require('./controllers/VooController')
const TrechoController = require('./controllers/TrechovooController')
const TipoController = require('./controllers/TipoaeronaveController')
const routes = express.Router()

routes.get('/aeroporto', AeroportoController.consulta )
routes.post('/aeroporto', AeroportoController.create )

routes.post('/voo', VooController.create)
routes.get('/voo', VooController.consulta)

routes.post('/trecho/:numero_voo/:codigo_aeroporto_partida/:codigo_aeroporto_chegada', TrechoController.create)
routes.get('/trecho', TrechoController.consulta)

routes.post('/tipo', TipoController.create)
routes.get('/tipo', TipoController.consulta)


module.exports = routes