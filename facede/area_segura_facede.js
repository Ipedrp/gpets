class AreaSeguraFacede {

    constructor(areaSeguraAplication){
        this.areaSeguraAplication = areaSeguraAplication;
    }
    async findAll() {
        return await areaSeguraAplication.findAll();
    }

    async findById(id) {
        return await areaSeguraAplication.findById(id);
    }

    async create(areas_seguras) {
        return await areaSeguraAplication.create(areas_seguras);
    }

    async update(id, areas_seguras) {
        await this.areaSeguraAplication.update(id,areas_seguras);

    }

    async delete(id) {
        await this.areaSeguraAplication.delete(id);

    }
}

module.exports = AreaSeguraFacede;