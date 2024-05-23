class LocalizacaoTempoRealFacede {

  constructor(localizacaoTempoRealApication){
      this.localizacaoTempoRealAplication = localizacaoTempoRealApication;
  }
  async findAll() {
      return await localizacaoTempoRealAplication.findAll();
  }

  async findById(id) {
      return await localizacaoTempoRealAplication.findById(id);
  }

  async create(localizacao) {
      return await localizacaoTempoRealAplication.create(localizacao);
  }

  async update(id, localizacao) {
      await this.localizacaoTempoRealAplication.update(id, localizacao);

  }

  async delete(id) {

      await this.localizacaoTempoRealAplication.delete(id);
  }
}

module.exports = LocalizacaoTempoRealFacede;