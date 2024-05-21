class ContatoUsuarioAplication {

    constructor(contatoUsuarioRepository){
        this.contatoUsuarioRepository = contatoUsuarioRepository;
    }
    async findAll() {
        return await  this.contatoUsuarioRepository.findAll();
    }

    async findById(id) {
        return await  this.contatoUsuarioRepository.findById(id);
    }

    async create(contatos_usuarios) {
        return await  this.contatoUsuarioRepository.create(contatos_usuarios);
    }

    async update(id, contato_usuario) {
        await this.contatoUsuarioRepository.update(id, contato_usuario);
           
    }

    async delete(id) {
        await  this.contatoUsuarioRepository.delete(id);
    }
}

module.exports = ContatoUsuarioAplication;