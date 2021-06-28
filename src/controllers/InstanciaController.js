const Voo = require('../models/Voo')
const Instancia = require('../models/Instancia_trecho')

module.exports = {
    async consulta(req,res){
        const instancia = await Instancia.findAll()

        return res.json(instancia)
    },

    async create(req,res){
        const {numero_voo,numero_trecho,codigo_aeronave,codigo_aeroporto_partida,codigo_aeroporto_chegada,data_,numero_assento_disponivel, horario_partida, horario_chegada} = req.body

        const voo = await Voo.findByPk(numero_voo)
        if(!voo){
            return res.status(400).json({error:'User not found'})
        }
        const instancia = await Instancia.create({numero_voo,numero_trecho,codigo_aeronave,codigo_aeroporto_partida,codigo_aeroporto_chegada,data_,numero_assento_disponivel, horario_partida, horario_chegada})
        return res.json(instancia)
    },

    async atualizar(req,res){
        const {numero} = req.params
        const {data_,numero_assento_disponivel, horario_partida, horario_chegada} = req.body

        const instancia = await Instancia.update({data_,numero_assento_disponivel, horario_partida, horario_chegada}, {where: {numero_voo: numero}})

        return res.json(instancia)
    },

    async delete(req,res){
        const {numero} = req.params
        const instancia = await Instancia.destroy({where:{numero_voo: numero}})
        return res.json(instancia)
    }
}