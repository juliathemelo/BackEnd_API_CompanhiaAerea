const {Model, DataTypes} = require('sequelize')

class Trecho_voo extends Model{
    static init(connection){
        super.init({
            numero_voo: DataTypes.STRING,
            numero_trecho: {type:DataTypes.STRING, primaryKey:true},
            codigo_aeroporto_partida: DataTypes.STRING,
            codigo_aeroporto_chegada: DataTypes.STRING,
            horario_partida_previsto: DataTypes.STRING,
            horario_chegada_previsto: DataTypes.STRING
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Voo, {foreignKey: 'numero_voo', as: 'codigoVoo'})
        this.belongsTo(models.Aeroporto, {foreignKey: 'codigo_aeroporto_partida', as: 'partidaAero'})
        this.belongsTo(models.Aeroporto, {foreignKey: 'codigo_aeroporto_chegada', as: 'chegadaAero'})
    }
}

module.exports = Trecho_voo