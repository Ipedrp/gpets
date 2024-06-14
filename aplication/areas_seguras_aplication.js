const LocalizacaoFactory = require('../factories/localizacao_tempo_real_factory');

class AreaSeguraAplication {

    constructor(areaSeguraRepository, localizacaoTempoRealRepository){
        this.areaSeguraRepository = areaSeguraRepository;
        this.localizacaoTempoRealRepository = localizacaoTempoRealRepository;
    }

    async findAll() {
        return await this.areaSeguraRepository.findAll();
    }

    async findById(id) {
        return await this.areaSeguraRepository.findById(id);
    }

    async create(areas_seguras) {
        return await this.areaSeguraRepository.create(areas_seguras);
    }

    async update(id, areas_seguras) {
        await this.areaSeguraRepository.update(id, areas_seguras);
    }

    async delete(id) {
        await this.areaSeguraRepository.delete(id);
    }
    async buscaLocalizacao(id){
        let areaSegura = await this.areaSeguraRepository.findByIdPet(id);
        let localizaoTempoReal = await this.localizacaoTempoRealRepository.findLast(id);
        let localizacao = new LocalizacaoFactory(areaSegura, localizaoTempoReal).novaLocalizacao();
        return localizacao.getQuadrante();   
    }
}

module.exports = AreaSeguraAplication;