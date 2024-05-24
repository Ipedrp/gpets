class EnderecoFacade {
  
  constructor(enderecoAplication) {
    this.enderecoAplication = enderecoAplication;
  }
  async findAll() {
    return await this.enderecoAplication.findAll();
  }

  async findById(id) {
    return await this.enderecoAplication.findById(id);
  }
  async findAllByIdUser(id) {
    return await this.enderecoAplication.findAllByIdUser(id);
  }
  async create(endereco) {
    return await this.enderecoAplication.create(endereco);
  }

  async update(id, endereco) {
    await this.enderecoAplication.update(id, endereco);

  }

  async delete(id) {
    await this.enderecoAplication.delete(id);

  }
}

module.exports = EnderecoFacade;