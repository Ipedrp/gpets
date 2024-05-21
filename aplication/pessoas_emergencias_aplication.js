class PessoaEmergenciaAplication {

    constructor(pessoaEmergenciaRepository){
        this.pessoaEmergenciaRepository = pessoaEmergenciaRepository;
    }

    async findAll() {
        return await  this.pessoaEmergenciaRepository.findAll();
    }

    async findById(id) {
        return await  this.pessoaEmergenciaRepository.findById(id);
    }

    async create(pessoas_emergencias) {
        return await  this.pessoaEmergenciaRepository.create(pessoas_emergencias);
    }

    async update(id, pessoa_emergencia) {
        await this.pessoaEmergenciaRepository.update(id, pessoa_emergencia);
           
    }

    async delete(id) {
        await  this.pessoaEmergenciaRepository.delete(id);
    }
}

module.exports = PessoaEmergenciaAplication;