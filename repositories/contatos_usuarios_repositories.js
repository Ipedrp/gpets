const {Contatos_usuarios} = require('../data/dbContext');

class ContatoUsuarioRepository {
    async findAll() {
        return await Contatos_usuarios.findAll();
    }

    async findById(id) {
        return await Contatos_usuarios.findByPk(id);
    }

    async create(contatos_usuarios) {
        return await Contatos_usuarios.create(contatos_usuarios);
    }

    async update(id, contatos_usuarios) {
        await Contatos_usuarios.update(contatos_usuarios, {
            where: { id_contato_usuario : id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const contatoUsuario = await this.findById(id);
        if (!contatoUsuario) {
            throw new Error('Contato de usuário não encontrado');
        }
        await contatoUsuario.destroy();
        return contatoUsuario;
    }
}

module.exports =  ContatoUsuarioRepository;