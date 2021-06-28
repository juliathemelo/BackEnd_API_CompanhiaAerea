const Voo = require('../models/Voo')
const Tarifa = require('../models/Tarifa')


module.exports = {
    async consulta(req,res){
        const tarifa = await Tarifa.findAll()

        return res.json(tarifa)
    },

    async create(req,res){
    
        const {numero_voo,codigo_tarifa,quantidade,restricoes} = req.body

        const voo = await Voo.findByPk(numero_voo)
        if(!voo){
            return res.status(400).json({error:'User not found'})
        }
        const tarifa = await Tarifa.create({numero_voo,codigo_tarifa,quantidade,restricoes})
        return res.json(tarifa)
    },

    async atualizar(req,res){

        const {numero,codigo_tarifa,quantidade,restricoes} = req.body

        const tarifa = await Tarifa.update({codigo_tarifa,quantidade,restricoes}, {where: {numero_voo: numero}})

        return res.json(tarifa)
    },
    async delete(req,res){
        const {numero} = req.body

        const tarifa = await Tarifa.destroy({where: {numero_voo: numero}})

        return res.json(tarifa)
    }
}