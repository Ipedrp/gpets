const { Enderecos } = require('../data/dbContext');

class EnderecoRepository {
    async findAll() {
        return await Enderecos.findAll();
    }

    async findById(id) {
        return await Enderecos.findByPk(id);
    }
    async findAllByIdUser(id) {
        let enderecos = await Enderecos.findAll({
            where: {
                fk_usuario: id
            }
        });
        return enderecos;
    }

    async create(endereco) {
        return await Enderecos.create(endereco);
    }

    async update(id, endereco) {
        await Enderecos.update(endereco, {
            where: { id_endereco: id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const endereco = await this.findById(id);
        if (!endereco) {
            throw new Error('Endereço não encontrado');
        }
        await endereco.destroy();
        return endereco;
    }
}

module.exports = EnderecoRepository;