const { Localizacoes_tempo_real } = require('../data/dbContext');

class LocalizacaoTempoRealRepository {
    async findAll() {
        return await Localizacoes_tempo_real.findAll();
    }

    async findById(id) {
        return await Localizacoes_tempo_real.findByPk(id);
    }

    async create(localizacao) {
        return await Localizacoes_tempo_real.create(localizacao);
    }

    async update(id, localizacao) {
        await Localizacoes_tempo_real.update(localizacao, {
            where: { id_localizacao_tempo_real : id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const localizacao = await this.findById(id);
        if (!localizacao) {
            throw new Error('Localização em tempo real não encontrada');
        }
        await localizacao.destroy();
        return localizacao;
    }
    async findLast(id){
      const ultimoElemento = await Localizacoes_tempo_real.findOne({
          raw: true,
          where:{
              fk_pet: id
          },

        order: [
          ['id_localizacao_tempo_real','DESC']  // Ordenar pela coluna de criação em ordem decrescente
        ]
      });

      return ultimoElemento;
    }

}

module.exports =  LocalizacaoTempoRealRepository;