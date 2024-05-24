class Petsfacade {

    constructor(petsAplication){
        this.petsAplication = petsAplication;
    }

    async findAll() {
        return await  this.petsAplication.findAll();
    }

    async findById(id) {
        return await  this.petsAplication.findById(id);
    }

    async create(pets) {
        return await  this.petsAplication.create(pets);
    }

    async update(id, pet) {
        await this.petsAplication.update(id, pet);
           
    }

    async delete(id) {
        await  this.petsAplication.delete(id);
    }
}

module.exports = Petsfacade;