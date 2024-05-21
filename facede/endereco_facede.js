class EnderecoFacede {
  constructor(enderecoAplication) {
    this.enderecoAplication = enderecoAplication;
  }
  async findAll() {
    return await enderecoAplication.findAll();
  }

  async findById(id) {
    return await enderecoAplication.findById(id);
  }
  async findAllByIdUser(id) {
    return await enderecoAplication.findAllByIdUser(id);
  }
  async create(endereco) {
    return await enderecoAplication.create(endereco);
  }

  async update(id, endereco) {
    await this.enderecoAplication.update(id, endereco);

  }

  async delete(id) {
    await this.enderecoAplication.delete(id);

  }
}

module.exports = EnderecoFacede;