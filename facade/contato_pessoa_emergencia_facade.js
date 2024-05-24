class ContatoPessoaEmergenciaFacade {

    constructor(contatoPessoaEmergenciaAplication){
        this.contatoPessoaEmergenciaAplication = contatoPessoaEmergenciaAplication;
    }
    async findAll() {
        return await this.contatoPessoaEmergenciaAplication.findAll();
    }

    async findById(id) {
        return await this.contatoPessoaEmergenciaAplication.findById(id);
    }

    async create(Contatos_pessoas_emergencias) {
        return await this.contatoPessoaEmergenciaAplication.create(Contatos_pessoas_emergencias);
    }

    async update(id, contatoPessoaEmergencia) {
        await this.contatoPessoaEmergenciaAplication.update(id, contatoPessoaEmergencia);

    }

    async delete(id) {
        await this.contatoPessoaEmergenciaAplication.delete(id);

    }
}

module.exports = ContatoPessoaEmergenciaFacade;