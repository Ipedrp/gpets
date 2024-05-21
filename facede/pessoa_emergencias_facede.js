class PessoaEmergenciaFacede {

    constructor(pessoaEmergenciaAplication){
        this.pessoaEmergenciaAplication = pessoaEmergenciaAplication;
    }

    async findAll() {
        return await  this.pessoaEmergenciaAplication.findAll();
    }

    async findById(id) {
        return await  this.pessoaEmergenciaAplication.findById(id);
    }

    async create(pessoas_emergencias) {
        return await  this.pessoaEmergenciaAplication.create(pessoas_emergencias);
    }

    async update(id, pessoa_emergencia) {
        await this.pessoaEmergenciaAplication.update(id, pessoa_emergencia);
           
    }

    async delete(id) {
        await  this.pessoaEmergenciaAplication.delete(id);
    }
}

module.exports = PessoaEmergenciaFacede;