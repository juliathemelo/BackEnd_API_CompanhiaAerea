// FORMATO DO USUÁRIO NA BASE DE DADOS

const {Model, DataTypes} = require('sequelize')


class Reserva_assento extends Model{
    static init(connection){
        super.init({
            numero_voo: DataTypes.STRING,
            numero_trecho: DataTypes.STRING,
            data_: DataTypes.STRING,
            numero_assento:{ type:DataTypes.STRING , primaryKey:true},
            nome_cliente: DataTypes.STRING,
            telefone_cliente : DataTypes.STRING,
           
        },{
            sequelize: connection,
            freezeTableName: true,
        })
    }
    static associate(models){
        this.belongsTo(models.Instancia_trecho, {foreignKey: 'numero_voo', as: 'voo01'})
        this.belongsTo(models.Instancia_trecho, {foreignKey: 'numero_trecho', as: 'trecho01'})
        this.belongsTo(models.Instancia_trecho, {foreignKey: 'data_', as: 'data01'})
    }
}

module.exports = Reserva_assento