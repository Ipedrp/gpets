class ContatoUsuarioFacade {

    constructor(contatoUsuarioAplication){
        this.contatoUsuarioAplication = contatoUsuarioAplication;
    }
    
    async findAll() {
        return await this.contatoUsuarioAplication.findAll();
    }

    async findById(id) {
        return await this.contatoUsuarioAplication.findById(id);
    }

    async create(contatos_usuarios) {
        return await this.contatoUsuarioAplication.create(contatos_usuarios);
    }

    async update(id, contato_usuario) {
        await this.contatoUsuarioAplication.update(id, contato_usuario);

    }

    async delete(id) {
        await this.contatoUsuarioAplication.delete(id);

    }
}

module.exports = ContatoUsuarioFacade;