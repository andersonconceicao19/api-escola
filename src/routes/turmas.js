const route = require('express').Router()
const turmasControlles = require('../controllers/TurmasController')

route.get('/', turmasControlles.get)
route.post('/', turmasControlles.post)
route.put('/:id', turmasControlles.put)
route.delete('/:id', turmasControlles.delete)

module.exports = route;