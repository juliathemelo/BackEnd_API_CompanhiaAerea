const {Model, DataTypes} = require('sequelize')

class Instancia_trecho extends Model{
    static init(connection){
        super.init({
            numero_trecho: DataTypes.STRING,
            numero_voo: DataTypes.STRING,
            data_: {type:DataTypes.STRING, primaryKey:true},
            numero_assento_disponivel: DataTypes.STRING,
            codigo_aeronave: DataTypes.STRING,
            codigo_aeroporto_partida: DataTypes.STRING,
            codigo_aeroporto_chegada: DataTypes.STRING,
            horario_partida: DataTypes.STRING,
            horario_chegada: DataTypes.STRING
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Voo, {foreignKey: 'numero_voo', as: 'vooA'})
        this.belongsTo(models.Aeroporto, {foreignKey: 'codigo_aeroporto_partida', as: 'Apartida'})
        this.belongsTo(models.Aeroporto, {foreignKey: 'codigo_aeroporto_chegada', as: 'Achegada'})
        this.belongsTo(models.Trecho_voo, {foreignKey: 'numero_trecho', as: 'trechoA'})
        this.belongsTo(models.Aeronave, {foreignKey: 'codigo_aeronave', as: 'aeroA'})
    }
}

module.exports = Instancia_trecho