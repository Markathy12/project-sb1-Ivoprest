require('dotenv').config();
const nodemailer = require('nodemailer');

async function test() {
  let transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    let info = await transporter.sendMail({
      from: `"Test Ivoprest" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Test SMTP Nodemailer",
      text: "Ceci est un test d'envoi SMTP OVH depuis Nodemailer.",
    });
    console.log("Message envoyé:", info.messageId);
  } catch (err) {
    console.error("Erreur SMTP:", err);
  }
}

test();
