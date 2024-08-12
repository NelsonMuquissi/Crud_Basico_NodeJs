const Sequelize = require("sequelize")

const database = require('./db.js')

const produto = database.define('produto', 
{
    id: 
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
    },
    nome: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    data:
    {
        type: Sequelize.date,
        allowNull: false
    }
}
)

module.exports = produto