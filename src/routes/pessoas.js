const route = require('express').Router()
const pessoasController = require('../controllers/PessoasController')

route.get('/', pessoasController.get)
route.get('/:id', pessoasController.getById)
route.get('/:id/matricula/:matriculaId', pessoasController.getMatriculaByAluno)
route.post('/', pessoasController.post)
route.post('/:idEstudante/matricula', pessoasController.postMatricula)
route.put('/:id', pessoasController.put)
route.delete('/:id', pessoasController.delete)

module.exports = route;