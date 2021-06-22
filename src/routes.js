const express = require('express')
const AeroportoController = require('./controllers/AeroportoController')
const VooController = require('./controllers/VooController')
const TrechoController = require('./controllers/TrechovooController')
const TipoController = require('./controllers/TipoaeronaveController')
const AeroController = require('./controllers/AeronaveController')
const InstanciaController = require('./controllers/InstanciaController')
const PousarController = require('./controllers/PodepousarController')
const TarifaController = require('./controllers/TarifaController')
const ReservaController = require('./controllers/ReservaassentoController')
const routes = express.Router()

routes.get('/aeroporto', AeroportoController.consulta )
routes.post('/aeroporto', AeroportoController.create )

routes.post('/voo/:numero_voo', VooController.create)
routes.get('/voo', VooController.consulta)
routes.put('/voo/:numero_voo', VooController.atualizar)

routes.post('/trecho/:numero_voo/:codigo_aeroporto_partida/:codigo_aeroporto_chegada', TrechoController.create)
routes.get('/trecho', TrechoController.consulta)
routes.put('/trecho', TrechoController.atualizar)

routes.post('/tipo', TipoController.create)
routes.get('/tipo', TipoController.consulta)

routes.post('/aero/:tipo_aeronave', AeroController.create)
routes.get('/aero', AeroController.consulta)
routes.put('/aero', AeroController.atualizar)

routes.post('/instancia/:numero_voo/:numero_trecho/:codigo_aeronave/:codigo_aeroporto_partida/:codigo_aeroporto_chegada', InstanciaController.create)
routes.get('/instancia', InstanciaController.consulta)
routes.put('/instancia', InstanciaController.atualizar)

routes.post('/pousar/:nome_tipo_aeronave/:codigo_aeroporto', PousarController.create)
routes.get('/pousar', PousarController.consulta)

routes.post('/tarifa/:numero_voo', TarifaController.create)
routes.get('/tarifa', TarifaController.consulta)
routes.put('/tarifa', TarifaController.atualizar)

routes.post('/reserva/:numero_voo/:numero_trecho/:data_', ReservaController.create)
routes.get('/reserva', ReservaController.consulta)
routes.put('/reserva', ReservaController.atualizar)

module.exports = routes