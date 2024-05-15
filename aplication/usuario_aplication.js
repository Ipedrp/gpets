class UsuarioAplication {

    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    async findAll() {
        return await this.usuarioRepository.findAll();
    }

    async findById(id) {
        return await this.usuarioRepository.findById(id);
    }

    async create(usuarios) {
        return await this.usuarioRepository.create(usuarios);
    }

    async update(id, usuario) {
        await this.usuarioRepository.update(id, usuario);
    }

    async delete(id) {
        await this.usuarioRepository.delete(id);
    }
}

module.exports = UsuarioAplication;