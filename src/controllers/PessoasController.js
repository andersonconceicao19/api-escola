const _context = require('../models')

class PessoasController {
    static async get(request, response, next) {
        const pessoas = await _context.pessoas.findAll()
        return response.status(200).json(pessoas);
    }
}