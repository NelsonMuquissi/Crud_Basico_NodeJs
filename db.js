const Sequelize = require("sequelize")

const componenteSequelize = new Sequelize('dbproduto', 'root', '',
{
    dialect: 'mysql', host: 'localhost'
}
)

module.exports = componenteSequelize;