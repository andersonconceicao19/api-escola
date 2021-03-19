const route = require('express').Router()
const niveisControlles = require('../controllers/NiveisControlles')

route.get('/', niveisControlles.get)
route.post('/', niveisControlles.post)
route.put('/:id', niveisControlles.put)
route.delete('/:id', niveisControlles.delete)

module.exports = route;