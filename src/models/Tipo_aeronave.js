const {Model, DataTypes, STRING} = require('sequelize')

class Tipo_aeronave extends Model{
    static init(connection){
        super.init({
            nome_tipo_aeronave: {type: DataTypes.STRING, primaryKey: true},
            qtd_max_assento: DataTypes.STRING,
            companhia: DataTypes.STRING,
            
            

        },{
            sequelize: connection,
            freezeTableName: true
        })
    }

    static associate(models){
        this.hasMany(models.Aeronave, {foreignKey: 'tipo_aeronave', as: 'tipoA'})
    }
}

module.exports = Tipo_aeronave