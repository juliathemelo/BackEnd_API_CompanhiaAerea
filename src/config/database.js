//LIGAÇÃO COM O MYSQL

module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '21210',
    database: 'teste',
    define: {
        timestamps: false,
        underscored: true
    }
}