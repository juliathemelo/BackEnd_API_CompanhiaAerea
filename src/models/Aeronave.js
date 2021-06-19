const {Model, DataTypes, STRING} = require('sequelize')

class Aeronave extends Model{
    static init(connection){
        super.init({
            codigo_aeronave: {type: DataTypes.STRING, primaryKey: true},
            numero_total_assentos: DataTypes.STRING,
            tipo_aeronave: DataTypes.STRING,
            
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.belongsTo(models.Tipo_aeronave, {foreignKey: 'tipo_aeronave', as: 'tipoAa'})
    }
}

module.exports = Aeronave