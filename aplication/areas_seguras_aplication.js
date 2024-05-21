class AreaSeguraAplication {

    constructor(areaSeguraRepository){
        this.areaSeguraRepository = areaSeguraRepository;
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
}

module.exports = AreaSeguraAplication;