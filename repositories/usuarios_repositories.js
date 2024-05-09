const { Usuarios } = require('../data/dbContext');

class UsuarioRepository {
    async findAll() {
        return await Usuarios.findAll();
    }

    async findById(id) {
        return await Usuarios.findByPk(id);
    }

    async create(usuarios) {
        return await Usuarios.create(usuarios);
    }

    async update(id, usuario) {
        await Usuarios.update(usuario, {
            where: { id_usuario: id }
        });
        return await this.findById(id);
    }

    async delete(id) {
        const usuario = await this.Usuarios.findById(id);
        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }
        await usuario.destroy();
        return usuario;
    }
}

module.exports = UsuarioRepository;