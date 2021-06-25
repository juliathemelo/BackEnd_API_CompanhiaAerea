const Aero = require('../models/Aeroporto')
const Pousar = require('../models/Pode_pousar')


module.exports = {
    async consulta(req,res){
        const pousar = await Pousar.findAll()

        return res.json(pousar)
    },

    async create(req,res){
        const {nome_tipo_aeronave,codigo_aeroporto} = req.params

        const aero = await Aero.findByPk(codigo_aeroporto)
        if(!aero){
            return res.status(400).json({error:'User not found'})
        }
        const pode = await Pousar.create({nome_tipo_aeronave,codigo_aeroporto})
        return res.json(pode)
    },

    async delete(req,res){
        const{codigo} = req.params

        const pode = await Pousar.destroy({where:{codigo_aeroporto:codigo}})
        return res.json(pode)
    }
}