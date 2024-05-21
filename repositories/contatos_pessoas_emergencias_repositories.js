const { Contatos_pessoas_emergencias } = require('../data/dbContext');

class ContatoPessoaEmergenciaRepository {
    async findAll() {
        return await Contatos_pessoas_emergencias.findAll();
    }

    async findById(id) {
        return await Contatos_pessoas_emergencias.findByPk(id);
    }

    async create(contatoPessoaEmergencia) {
        return await Contatos_pessoas_emergencias.create(contatoPessoaEmergencia);
    }

    async update(id, contatoPessoaEmergencia) {
        await Contatos_pessoas_emergencias.update(contatoPessoaEmergencia, {
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

module.exports = ContatoPessoaEmergenciaRepository;