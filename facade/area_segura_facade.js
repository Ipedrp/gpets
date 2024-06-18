class AreaSeguraFacade {

    constructor(areaSeguraAplication) {
        this.areaSeguraAplication = areaSeguraAplication;
    }
    async findAll() {
        return await this.areaSeguraAplication.findAll();
    }

    async findById(id) {
        return await this.areaSeguraAplication.findById(id);
    }

    async create(areas_seguras) {
        return await this.areaSeguraAplication.create(areas_seguras);
    }

    async update(id, areas_seguras) {
        await this.areaSeguraAplication.update(id, areas_seguras);

    }

    async delete(id) {
        await this.areaSeguraAplication.delete(id);

    }
    async findByIdPet(id) {
        await this.areaSeguraAplication.findByIdPet(id);
    }

    async buscaLocalizacao(id) {
        return await this.areaSeguraAplication.buscaLocalizacao(id);
    }
    async enviarMail(id){
        await this.areaSeguraAplication.enviarMail(id);
    }
}

module.exports = AreaSeguraFacade;