const Reserva = require('../models/Reserva_assento')
const Instancia = require('../models/Instancia_trecho')

module.exports = {
    async consulta(req,res){
        const reserva = await Reserva.findAll()

        return res.json(reserva)
    },

    async create(req,res){
        const {numero_voo,numero_trecho,data_} = req.params
        const {numero_assento,nome_cliente,telefone_cliente} = req.body

        const reserva = await Reserva.create({numero_voo,numero_trecho,data_,numero_assento,nome_cliente,telefone_cliente})
        return res.json(reserva)
    },

    async atualizar(req,res){
        const {numero_voo,numero_assento,nome_cliente,telefone_cliente} = req.body

        const reserva = await Reserva.update({numero_assento,nome_cliente,telefone_cliente}, {where: {numero_voo: numero_voo}})

        return res.json(reserva)
    }
}