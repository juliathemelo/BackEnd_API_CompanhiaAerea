const Aeroporto = require('../models/Aeroporto')

module.exports = {
    async consulta(req,res){
        const aeroporto = await Aeroporto.findAll()
        return res.json(aeroporto)
    },

    async create(req,res){
        const {codigo_aeroporto, nome, cidade, estado} = req.body

        const aeroporto = await Aeroporto.create({codigo_aeroporto, nome, cidade, estado})

        return res.json(aeroporto)
    }
}