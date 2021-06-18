const Tipo = require('../models/Tipo_aeronave')

module.exports = {
    async consulta(req,res){
        const tipo = await Tipo.findAll()

        return res.json(tipo)
    },

    async create(req,res){
        
        const {nome_tipo_aeronave, qtd_max_assento, companhia } = req.body

        
        const tipo = await Tipo.create({nome_tipo_aeronave, qtd_max_assento, companhia})
        
        return res.json(tipo)
    }
}