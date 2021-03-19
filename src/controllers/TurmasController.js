const _context = require('../models');
class Turmas {
    static async get(request, response, next) {
        try {
            const turmas = await _context.Turmas.findAll()
            return response.status(200).json(turmas);
        }
        catch (error) {
            //tratar erro
            throw new Error()
        }
    }
    static async post(request, response, next) {
        const body = request.body;
        try {
            const turmas = await _context.Turmas.create(body);
            return response.status(201).json(turmas);
        } catch (error) {
            throw new Error()
        }
    }
    static async put(request, response, next) {
        const body = request.body
        const { id } = request.params;
        try {
            const upd = await _context.Turmas.update(
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
            const dlt = await _context.Turmas.destroy({
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