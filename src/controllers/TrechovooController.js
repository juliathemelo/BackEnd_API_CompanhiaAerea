const Voo = require('../models/Voo')
const Trecho_voo = require('../models/Trecho_voo')
const Aero = require('../models/Aeroporto')


module.exports = {
    async consulta(req,res){
        const trechovoo = await Trecho_voo.findAll()

        return res.json(trechovoo)
    },

    async create(req,res){
        const {numero_voo,codigo_aeroporto_partida,codigo_aeroporto_chegada,numero_trecho, horario_partida_previsto, horario_chegada_previsto} = req.body

        const trechinho = await Voo.findByPk(numero_voo)
        if(!trechinho){
            return res.status(400).json({error:'User not found'})
        }
        const trecho = await Trecho_voo.create({numero_voo,codigo_aeroporto_partida,codigo_aeroporto_chegada,numero_trecho, horario_partida_previsto, horario_chegada_previsto})
        return res.json(trecho)
    },

    async atualizar(req,res){
       
        const {numero,numero_trecho, horario_partida_previsto, horario_chegada_previsto} = req.body

        const trecho = await Trecho_voo.update({numero_trecho, horario_partida_previsto, horario_chegada_previsto}, {where: {numero_voo: numero}})

        return res.json(trecho)
    },
    async delete(req,res){
        const {numero} = req.body
        const trecho = await Trecho_voo.destroy({ where:{numero_trecho: numero}})
        return res.json(trecho)
    }
}