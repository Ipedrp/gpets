const { Pets } = require('../data/dbContext');

class PetRepository {
    async findAll() {
        return await Pets.findAll();
    }

    async findById(id) {
        return await Pets.findByPk(id);
    }

    async create(pet) {
        return await Pets.create(pet);
    }

    async update(id, pet) {
        await Pets.update(pet, {
            where: { id_pet : id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const pet = await this.findById(id);
        if (!pet) {
            throw new Error('Pet não encontrado');
        }
        await pet.destroy();
        return pet;
    }
}

module.exports = PetRepository;