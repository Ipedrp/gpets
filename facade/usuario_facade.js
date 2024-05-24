class UsuarioFacade {

    constructor(usuarioAplication){
        this.usuarioAplication = usuarioAplication;
    }
    async findAll() {
        return await this.usuarioAplication.findAll();
    }

    async findById(id) {
        return await this.usuarioAplication.findById(id);
    }

    async create(usuarios) {
        return await this.usuarioAplication.create(usuarios);
    }

    async update(id, usuario) {
        await this.usuarioAplication.update(id, usuario);

    }

    async delete(id) {
        await this.usuarioAplication.delete(id);

    }
}

module.exports = UsuarioFacade;