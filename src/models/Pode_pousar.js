// FORMATO DO USUÁRIO NA BASE DE DADOS

const {Model, DataTypes} = require('sequelize')


class Pode_pousar extends Model{
    static init(connection){
        super.init({
            id:{ type:DataTypes.INTEGER , primaryKey:true},
            nome_tipo_aeronave: DataTypes.STRING,
            codigo_aeroporto: DataTypes.STRING,
           
        },{
            sequelize: connection,
            freezeTableName: true,
        })
    }
    static associate(models){
        this.belongsTo(models.Aeroporto, {foreignKey: 'codigo_aeroporto', as: 'aeroportoPousar'})
        this.belongsTo(models.Tipo_aeronave, {foreignKey: 'nome_tipo_aeronave', as: 'AeronavePousar'})
    }
}

module.exports = Pode_pousar