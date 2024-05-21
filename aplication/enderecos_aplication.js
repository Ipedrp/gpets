class EnderecoAplication  {
  constructor(enderecosRepository){
    this.enderecosRepository = enderecosRepository;
  };
  async findAll() {
    return await this.enderecosRepository.findAll();
  }
  async findById(id){
    return await this.enderecosRepository.findById(id);
  }
  async findAllByIdUser(id){
    return await this.enderecosRepository.findAllByIdUser(id);
}
  async create(endereco){
    return await this.enderecosRepository.create(endereco);
  }
  async update(id, endereco){
    return await this.enderecosRepository.update(id, endereco);
  }
  async delete(id){
    return await this.enderecosRepository.delete(id);
  }
}
module.exports = EnderecoAplication
