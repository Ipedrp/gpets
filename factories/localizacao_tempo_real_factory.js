const Localizacao = require('../entities/localizacao')

class LocalizacaoFactory {
  constructor(areaSegura, localizcao) {
    this.areaSegura = areaSegura;
    this.localizacao = localizcao;
  }
  novaLocalizacao() {
    return new Localizacao(this.localizacao, this.areaSegura);
  }
  
}

module.exports = LocalizacaoFactory;