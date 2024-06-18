const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração do transporte
const transporter = nodemailer.createTransport({
  service: 'gmail', // Você pode usar outros serviços como Outlook, Yahoo, etc.

  auth: {
    type: process.env.TYPE,
    user: process.env.USER,
    pass: process.env.PASS,
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    accessToken: process.env.ACESSTOKEN,
    refreshToken: process.env.REFRESHTOKEN
  }
});

const enviarEmail = async (destinatario, longitude, latitude) => {
  const mailOptions = {
    from: 'no-reply-gpets@gmail.com',
    to: destinatario,
    subject: 'Alerta de Segurança: Seu Pet Está Fora da Área Segura!',
    text: `
      Olá,

      Gostaríamos de informá-lo que seu pet saiu da área segura designada. Para garantir a segurança do seu pet, por favor, clique no link abaixo para acompanhar a localização dele em tempo real.

      [Acompanhe a localização do seu pet em tempo real](https://www.google.com.br/maps/@${latitude},${longitude},15z?entry=ttu)

      Atenciosamente,
      Equipe GPets

      Nota: Este é um e-mail automático. Por favor, não responda a este e-mail.
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado: ' + info.response);
  } catch (error) {
    console.error('Erro ao enviar email: ' + error);
  }
};

module.exports = enviarEmail;