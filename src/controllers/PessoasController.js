const _context = require('../models');

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
            const pessoa = await _context.Pessoas.findOne({
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
        const body = request.body;
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
            const upd = await _context.Pessoas.update(
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
    static async getMatriculaByAluno(request, response, next) {
        const { id, matriculaId } = request.params;
        try {
            const matricula = await _context.Matricula.findOne({
                where: {
                    id: matriculaId,
                    estudante_id: id
                }
            })
            return response.status(200).json(matricula)
        } catch (error) {
            throw new Error()
        }
    }
    static async postMatricula(request, response, next) {

        const { idEstudante } = request.params;
        const novaMatricula = { ...request.body, estudante_id: idEstudante };
        try {
            const cadastro = await _context.Matricula.create(novaMatricula);
            return response.status(201).json(cadastro);
        } catch (error) {
            throw new Error()
        }
    }

}
module.exports = PessoasController;