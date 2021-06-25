const Voo = require('../models/Voo')

module.exports = {
    async consulta(req,res){
        const voo = await Voo.findAll()

        return res.json(voo)
    },

    async create(req,res){
        
        const {numero_voo, companhia_aerea, dias_da_semana } = req.body

        
        const voo = await Voo.create({numero_voo, companhia_aerea,dias_da_semana})
        
        return res.json(voo)
    },

    async atualizar(req,res){
        const {numero} = req.params
        const {numero_voo,companhia_aerea, dias_da_semana} = req.body

        const voo = await Voo.update({numero_voo, companhia_aerea, dias_da_semana}, {where: {numero_voo: numero}})

        return res.json(voo)
    },
    async delete(req,res){
        const {numero_voo} = req.params
        const voo = await Voo.destroy({ where:{numero_voo: numero_voo}})
        return res.json(voo)
    }
}