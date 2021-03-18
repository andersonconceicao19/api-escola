const bodyParser = require('body-parser') 
const pessoas = require('./pessoas')
module.exports = app => {
    app.use(bodyParser.json());

    app.use('/api/pessoas', pessoas)
}