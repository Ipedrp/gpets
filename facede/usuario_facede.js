class UsuarioFacede {

    constructor(usuarioAplication){
        this.usuarioAplication = usuarioAplication;
    }
    async findAll() {
        return await usuarioAplication.findAll();
    }

    async findById(id) {
        return await usuarioAplication.findById(id);
    }

    async create(usuarios) {
        return await usuarioAplication.create(usuarios);
    }

    async update(id, usuario) {
        await this.usuarioAplication.update(id, usuario);

    }

    async delete(id) {
        await this.usuarioAplication.delete(id);

    }
}

module.exports = UsuarioFacede;