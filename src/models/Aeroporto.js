// FORMATO DO USUÁRIO NA BASE DE DADOS

const {Model, DataTypes} = require('sequelize')


class Aeroporto extends Model{
    static init(connection){
        super.init({
            codigo_aeroporto:{ type:DataTypes.STRING , primaryKey:true},
            nome: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING
        },{
            sequelize: connection,
            freezeTableName: true,
        })
    }
    static associate(models){
        this.hasMany(models.Trecho_voo, {foreignKey: 'codigo_aeroporto_partida', as: 'partidaA'})
        this.hasMany(models.Trecho_voo, {foreignKey: 'codigo_aeroporto_chegada', as: 'chegadaA'})
        this.hasMany(models.Instancia_trecho, {foreignKey: 'codigo_aeroporto_partida', as: 'aapartidaA'})
        this.hasMany(models.Instancia_trecho, {foreignKey: 'codigo_aeroporto_chegada', as: 'aachegadaA'})
    }
}

module.exports = Aeroporto