const express = require('express')
const server = express()
// pegar o banco de dados
const db = require('./database/db')
const router = require('../src/router')


//Configurar pasta publica
server.use(express.static('public'))


//Configurando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


//habilitando o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true }))


//Ligar o servidor
server.listen(3000, () => {
    console.log('Server is running!')
})

//router
server.use(router)

