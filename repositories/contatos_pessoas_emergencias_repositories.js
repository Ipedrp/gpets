const { Contatos_pessoas_emergencias } = require('../data/dbContext');

class contatoPessoaEmergenciaRepository {
    async findAll() {
        return await Contatos_pessoas_emergencias.findAll();
    }

    async findById(id) {
        return await Contatos_pessoas_emergencias.findByPk(id);
    }

    async create(contatos_pessoas_emergencias) {
        return await Contatos_pessoas_emergencias.create(contatos_pessoas_emergencias);
    }

    async update(id, contatos_pessoas_emergencias) {
        await Contatos_pessoas_emergencias.update(contatos_pessoas_emergencias, {
            where: {id_contato_pessoa_emergencia : id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const contatoPessoaEmergencia = await this.findById(id);
        if (!contatoPessoaEmergencia) {
            throw new Error('Contato de pessoa de emergência não encontrado');
        }
        await contatoPessoaEmergencia.destroy();
        return contatoPessoaEmergencia;
    }
}

module.exports = contatoPessoaEmergenciaRepository;