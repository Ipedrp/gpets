const LocalizacaoFactory = require('../factories/localizacao_tempo_real_factory');
const enviarEmail = require('../aplication/emails_send');
const LocalizacaoTempoReal = require('./localizacao_tempo_real_aplication');
class AreaSeguraAplication {

    constructor(areaSeguraRepository, localizacaoTempoRealRepository, usuarioRepository, petRepository) {
        this.areaSeguraRepository = areaSeguraRepository;
        this.localizacaoTempoRealRepository = localizacaoTempoRealRepository;
        this.usuarioRepository = usuarioRepository;
        this.petRepository = petRepository;
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
    async buscaLocalizacao(id) {
        let areaSegura = await this.areaSeguraRepository.findByIdPet(id);
        let localizacaoTempoReal = await this.localizacaoTempoRealRepository.findLast(id);
        let localizacao = new LocalizacaoFactory(areaSegura, localizacaoTempoReal).novaLocalizacao();
        return localizacao.getQuadrante()
    }

    async enviarMail(id) {
        let pet = await this.petRepository.findById(id);
        let usuario = await this.usuarioRepository.findById(pet.fk_usuario);
        let localizacaoTempoReal = await this.localizacaoTempoRealRepository.findLast(id);
        await enviarEmail(usuario.email, localizacaoTempoReal.longitude, localizacaoTempoReal.latitude);
    }
}

module.exports = AreaSeguraAplication;