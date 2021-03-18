const route = require('express').Router({mergeParams: true})
const pessoasController = require('../controllers/PessoasController')

route.get('/', pessoasController.get)
route.get('/:id', pessoasController.getById)
route.get('/', pessoasController.post)
route.get('/:id', pessoasController.put)
route.get('/:id', pessoasController.delete)

module.exports = route;