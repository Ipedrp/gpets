class LocalizacaoTempoRealFacade {

  constructor(localizacaoTempoRealApication){
      this.localizacaoTempoRealAplication = localizacaoTempoRealApication;
  }
  async findAll() {
      return await this.localizacaoTempoRealAplication.findAll();
  }

  async findById(id) {
      return await this.localizacaoTempoRealAplication.findById(id);
  }

  async create(localizacao) {
      return await this.localizacaoTempoRealAplication.create(localizacao);
  }

  async update(id, localizacao) {
      await this.localizacaoTempoRealAplication.update(id, localizacao);

  }

  async delete(id) {

      await this.localizacaoTempoRealAplication.delete(id);
  }
}

module.exports = LocalizacaoTempoRealFacade;