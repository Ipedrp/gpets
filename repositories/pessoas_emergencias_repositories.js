const { Pessoas_Emergencias } = require('../data/dbContext');

class PessoaEmergenciaRepository {
    async findAll() {
        return await Pessoas_Emergencias.findAll();
    }

    async findById(id) {
        return await Pessoas_Emergencias.findByPk(id);
    }

    async create(pessoaEmergencia) {
        return await Pessoas_Emergencias.create(pessoaEmergencia);
    }

    async update(id, pessoaEmergencia) {
        await Pessoas_Emergencias.update(pessoaEmergencia, {
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