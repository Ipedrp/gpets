const { usuarioFacade } = require("../dependency/injection");
const bcrypt = require("bcryptjs");
const { Usuarios } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  bcrypt
    .hash(senha, 12)
    .then((novaSenha) => {
      usuarioFacade.create({ nome: nome, email: email, senha: novaSenha });
    })
    .then((resultado) => {
      res.status(201).json({ resultado: "Usuário cadastrado com sucesso!" });
    })
    .catch((err) => {
      res.status(500);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const senha = req.body.senha;

  let usuarioCarregado;

  Usuarios.findOne({ where: { email: email } })
    .then((usuario) => {
      if (!usuario) {
        res.status(401).json({ error: "O email informado não foi cadastrado" });
      }

      usuarioCarregado = usuario;

      return bcrypt.compare(senha, usuario.senha);
    })
    .then((senhaDescriptografada) => {
      if (!senhaDescriptografada) {
        res.status(401).json({ error: "Usuário ou senha errado!" });
      }

      const token = jwt.sign(
        {
          email: usuarioCarregado.email
        },
        "minha_chave_secreta",
        { expiresIn: "1h" }
      );

      res.status(200).json({ token: token });
    })
    .catch((err) => {
      next(err);
    });
};
