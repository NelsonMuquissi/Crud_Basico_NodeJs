const Sequelize = require('sequelize')

const produto = require('./produto')

(async() => {
    const database = require('./db')

    const produto = require('./produto')

    await database.async()

    
await produto.create(

    {
        nome: "Primeiro Teste",
        data: Date()
    }
)
await produto.create(

    {
        nome: "Segundo Teste",
        data: Date()
    }
)
await produto.create(

    {
        nome: "Terceiro Teste",
        data: Date()
    }
)

const alterprod = await produto.findByPk(2)
alterprod.name = "Arquivo alterado"
await alterprod.save()

produto.destroy({where: {id:1}})

const findPro = await produto.findByPk(3)

console.log(findPro)

const pesqui = await produto.findAll()

console.log(pesqui)

})()

