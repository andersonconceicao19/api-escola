const _context = require('../models');
class Turmas {
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
    static async post(request, response, next) {
        const body = request.body;
        console.log(body)
        try {
            const cadastro = await _context.Pessoas.create(body);
            return response.status(201).json(cadastro);
        } catch (error) {
            throw new Error()
        }
    }
    static async put(request, response, next) {
        const body = request.body
        const { id } = request.params;
        try {
            const upd = await  _context.Pessoas.update(
                body,
                {
                    where: {
                        id: id
                    }
                }
            )
            return response.status(204).end();
        } catch (error) {
            throw new Error()
        }
    }
    static async delete(request, response, next) {
        const { id } = request.params;
        try {
            const dlt = await _context.Pessoas.destroy({
                where: {
                    id: id
                }
            })
            return response.status(204).end();
        } catch (error) {
            throw new Error()
        }
    }
}
module.exports = Turmas;