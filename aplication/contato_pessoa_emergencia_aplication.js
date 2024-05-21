class ContatoPessoaEmergenciaAplication {

    constructor(contatoPessoaEmergenciaRepository){
        this.contatoPessoaEmergenciaRepository = contatoPessoaEmergenciaRepository;
    }

    async findAll() {
        return await this.contatoPessoaEmergenciaRepository.findAll();
    }

    async findById(id) {
        return await this.contatoPessoaEmergenciaRepository.findById(id);
    }

    async create(Contatos_pessoas_emergencias) {
        return await this.contatoPessoaEmergenciaRepository.create(Contatos_pessoas_emergencias);
    }

    async update(id, contatoPessoaEmergencia) {
        await this.contatoPessoaEmergenciaRepository.update(id, contatoPessoaEmergencia);
    }

    async delete(id) {
        await this.contatoPessoaEmergenciaRepository.delete(id);
    }
}

module.exports = ContatoPessoaEmergenciaAplication;