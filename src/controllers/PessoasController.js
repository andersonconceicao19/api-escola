const _context = require('../models')

class PessoasController {
    static async get(request, response, next) {
        try {
            const pessoas = await _context.Pessoas.findAll()
            return response.status(200).json(pessoas);
        }
        catch (error) {
            //tratar erro
            throw new Error()
        }
    }
    static async getById(request, response, next) {
        const { id } = request.params;
        try {
            const pessoa = await  _context.Pessoas.findOne({
                where: {
                    id: id
                }
            })
            return response.status(200).json(pessoa)
        } catch (error) {
            throw new Error()
        }
    }
    static async post(request, response, next) {

    }
    static async put(request, response, next) {

    }
    static async delete(request, response, next) {

    }
}
module.exports = PessoasController;