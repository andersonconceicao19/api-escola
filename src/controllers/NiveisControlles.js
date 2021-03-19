const _context = require('../models');
class Niveis {
    static async get(request, response, next) {
        try {
            const niveis = await _context.Niveis.findAll()
            return response.status(200).json(niveis);
        }
        catch (error) {
            //tratar erro
            throw new Error()
        }
    }
    static async post(request, response, next) {
        const body = request.body;
        try {
            const niveis = await _context.Niveis.create(body);
            return response.status(201).json(niveis);
        } catch (error) {
            throw new Error()
        }
    }
    static async put(request, response, next) {
        const body = request.body
        const { id } = request.params;
        try {
            const upd = await _context.Niveis.update(
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
            const dlt = await _context.Niveis.destroy({
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
module.exports = Niveis;