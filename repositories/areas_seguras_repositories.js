const { Areas_seguras } = require('../data/dbContext');

class AreaSeguraRepository {
    async findAll() {
        
        return await Areas_seguras.findAll();
    }

    async findById(id) {
        console.log(typeof Areas_seguras.findAll());
        return await Areas_seguras.findByPk(id);
    }

    async create(areaSegura) {
        return await Areas_seguras.create(areaSegura);
    }

    async update(id, areaSegura) {
        await Areas_seguras.update(areaSegura, {
            where: { id_area_segura : id}
        });
        return await this.findById(id);
    }

    async delete(id) {
        const areaSegura = await this.findById(id);
        if (!areaSegura) {
            throw new Error('Área segura não encontrada');
        }
        await areaSegura.destroy();
        return areaSegura;
    }
}

module.exports =  AreaSeguraRepository;