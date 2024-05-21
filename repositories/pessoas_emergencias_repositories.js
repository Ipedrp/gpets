const { Pessoas_Emergencias } = require('../data/dbContext');

class PessoaEmergenciaRepository {
    async findAll() {
        return await Pessoas_Emergencias.findAll();
    }

    async findById(id) {
        return await Pessoas_Emergencias.findByPk(id);
    }

    async create(pessoas_emergencias) {
        return await Pessoas_Emergencias.create(pessoas_emergencias);
    }

    async update(id, pessoas_emergencias) {
        await Pessoas_Emergencias.update(pessoas_emergencias, {
            where: { id_pessoa_emergencia : id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const pessoaEmergencia = await this.findById(id);
        if (!pessoaEmergencia) {
            throw new Error('Pessoa de emergência não encontrada');
        }
        await pessoaEmergencia.destroy();
        return pessoaEmergencia;
    }
}

module.exports = PessoaEmergenciaRepository;