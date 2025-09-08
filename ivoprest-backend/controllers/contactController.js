const nodemailer = require("nodemailer");

exports.createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Tous les champs sont requis." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "ssl0.ovh.net",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Ton mot de passe normal OVH
      },
    });

    await transporter.sendMail({
      from: `"Ivoprest Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nouveau message: ${subject}`,
      html: `
        <h3>Nouveau message du site Ivoprest</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur :", error);
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
};
