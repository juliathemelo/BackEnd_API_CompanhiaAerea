// FORMATO DO USUÁRIO NA BASE DE DADOS

const {Model, DataTypes} = require('sequelize')

class Voo extends Model{
    static init(connection){
        super.init({
            numero_voo: {type:DataTypes.STRING, primaryKey:true},
            companhia_aerea: DataTypes.STRING,
            dias_da_semana: DataTypes.STRING,
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.hasMany(models.Trecho_voo, {foreignKey: 'numero_voo', as: 'vookey'})
    }
}

module.exports = Voo