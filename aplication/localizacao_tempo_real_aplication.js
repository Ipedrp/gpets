class LocalizacaoTempoReal {

    constructor(localizacaoTempoRealRepository) {
        this.localizacaoTempoRealRepository = localizacaoTempoRealRepository;
        
     
    }

    async findAll() {
        return await this.localizacaoTempoRealRepository.findAll();
    }

    async findById(id) {
        return await this.localizacaoTempoRealRepository.findById(id);
    }


    async create(localizacao) {
        return await this.localizacaoTempoRealRepository.create(localizacao);
    }

    async update(id, localizacao) {
        await this.localizacaoTempoRealRepository.update(id, localizacao);
    }

    async delete(id) {
        await this.localizacaoTempoRealRepository.delete(id);
    }
    async findLast(id) {
        return await this.localizacaoTempoRealRepository.findLast(id);
    }

}
module.exports = LocalizacaoTempoReal;