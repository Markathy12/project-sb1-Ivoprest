require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const app = express();

// Sécuriser les headers HTTP
app.use(helmet());

// Configurer CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'https://ton-domaine-prod.com'],
};
app.use(cors(corsOptions));

// Limiter les requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Trop de requêtes, merci de réessayer plus tard.',
});
app.use('/api/', limiter);

// Lire JSON du frontend
app.use(express.json());

/* =====================
    ROUTE CONTACT
===================== */
app.post('/api/contact', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('subject').trim().notEmpty().escape(),
  body('message').trim().notEmpty().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
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

    res.status(200).json({ success: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message.' });
  }
});

/* =====================
    ROUTE DEVIS
===================== */
app.post('/api/devis', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty().escape(),
  body('message').trim().notEmpty().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ivoprest Devis" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nouvelle demande de devis - ${name}`,
      html: `
        <h3>Nouvelle demande de devis reçue depuis Ivoprest</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: 'Demande de devis envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi du devis.' });
  }
});

/* =====================
    ROUTE INSCRIPTION FORMATION
===================== */
app.post('/api/inscription', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('session').trim().notEmpty().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, session } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ivoprest Formations" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER, // l’adresse qui reçoit les inscriptions
      subject: `Nouvelle inscription à une formation`,
      html: `
        <h3>Nouvelle inscription reçue</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Session :</strong> ${session}</p>
      `,
    });

    res.status(200).json({ success: 'Inscription envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors de l'inscription." });
  }
});

/* =====================
    ROUTE INSCRIPTION EXAMENS
===================== */

app.post('/api/inscription-examen', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty().escape(),
  body('exam').trim().notEmpty().escape(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, exam } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Ivoprest Centre d'Examen" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nouvelle inscription examen - ${exam}`,
      html: `
        <h3>Nouvelle inscription à un examen reçue</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Examen :</strong> ${exam}</p>
      `,
    });

    res.status(200).json({ success: 'Inscription examen envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors de l'inscription à l'examen." });
  }
});

/* =====================
    ROUTE DEMANDE SSM
===================== */
app.post('/api/demande-ssm', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').trim().notEmpty().escape(),
  body('company').optional().trim().escape(),
  body('date').optional().isISO8601().toDate(),
], async (req, res) => {
  // Validation des données
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, company, date } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net', // ou ton SMTP
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Préparer le contenu de l'email
    let emailContent = `
      <h3>Nouvelle demande de démonstration SSM</h3>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
    `;

    if (company) {
      emailContent += `<p><strong>Entreprise :</strong> ${company}</p>`;
    }
    if (date) {
      emailContent += `<p><strong>Date souhaitée :</strong> ${new Date(date).toLocaleDateString()}</p>`;
    }

    await transporter.sendMail({
      from: `"Ivoprest SSM" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Demande de démonstration SSM de ${name}`,
      html: emailContent,
    });

    res.status(200).json({ success: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: "Erreur lors de l'envoi de la demande." });
  }
});

// Gestion des erreurs serveur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend Ivoprest lancé sur le port ${PORT}`);
});
