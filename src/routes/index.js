const bodyParser = require('body-parser') 
const pessoas = require('./pessoas')
const niveis = require('./niveis')
const turmas = require('./turmas')
module.exports = app => {
    app.use(bodyParser.json());

    app.use('/api/pessoas', pessoas)
    app.use('/api/niveis', niveis )
    app.use('/api/turmas', turmas)
}