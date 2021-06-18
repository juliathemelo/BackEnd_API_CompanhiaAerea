const Voo = require('../models/Voo')

module.exports = {
    async consulta(req,res){
        const voo = await Voo.findAll()

        return res.json(voo)
    },

    async create(req,res){
        
        const {numero_voo, companhia_aerea, dias_da_semana } = req.body

        
        const voo = await Voo.create({numero_voo, companhia_aerea, dias_da_semana})
        
        return res.json(voo)
    }
}