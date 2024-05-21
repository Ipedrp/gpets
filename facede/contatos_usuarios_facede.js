class ContatoUsuarioFacede {

    constructor(contatoUsuarioAplication){
        this.contatoUsuarioAplication = contatoUsuarioAplication;
    }
    
    async findAll() {
        return await contatoUsuarioAplication.findAll();
    }

    async findById(id) {
        return await contatoUsuarioAplication.findById(id);
    }

    async create(contatos_usuarios) {
        return await contatoUsuarioAplication.create(contatos_usuarios);
    }

    async update(id, contato_usuario) {
        await this.contatoUsuarioAplication.update(id, contato_usuario);

    }

    async delete(id) {
        await this.contatoUsuarioAplication.delete(id);

    }
}

module.exports = ContatoUsuarioFacede;