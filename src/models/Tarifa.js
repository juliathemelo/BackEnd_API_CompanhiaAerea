// FORMATO DO USUÁRIO NA BASE DE DADOS

const {Model, DataTypes} = require('sequelize')

class Tarifa extends Model{
    static init(connection){
        super.init({
            numero_voo: DataTypes.STRING,
            codigo_tarifa: {type:DataTypes.STRING, primaryKey:true},
            quantidade: DataTypes.STRING,
            restricoes: DataTypes.STRING
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Voo, {foreignKey: 'numero_voo', as: 'voo11'})
    }
}

module.exports = Tarifa