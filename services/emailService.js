require('dotenv').config();
const nodemailer = require('nodemailer')
async function sentMail({ from, to, subject, text, html }) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });

    let info = await transporter.sendMail({
        from: `Forkit <${from}>`,
        to: to,
        subject: subject,
        text: text,
        html: html
    });
}

module.exports = sentMail;

