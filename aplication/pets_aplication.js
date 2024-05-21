class PetsAplication {

    constructor(petsRepository){
        this.petsRepository = petsRepository;
    }

    async findAll() {
        return await  this.petsRepository.findAll();
    }

    async findById(id) {
        return await  this.petsRepository.findById(id);
    }

    async create(pets) {
        return await  this.petsRepository.create(pets);
    }

    async update(id, pet) {
        await this.petsRepository.update(id, pet);
           
    }

    async delete(id) {
        await  this.petsRepository.delete(id);
    }
}

module.exports = PetsAplication;