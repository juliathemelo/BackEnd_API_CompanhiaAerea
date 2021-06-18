//LIGAÇÃO COM O MYSQL

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '21210',
    database: 'companhia_aerea',
    define: {
        timestamps: false,
        underscored: false
    }
}