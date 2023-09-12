import nodemailer from 'nodemailer';
import config from '../config/config.js';

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.GMAIL_USER_AUTH,
        pass: config.GMAIL_PASS_AUTH
    }
})

export const sendMail = async options => {
    let result = await transport.sendMail(options);
    return result;
}

export const createOptions = to => {
    return {
        from: 'Email <mimailgmail@gmail.com>',
        to,
        subject: 'Asunto del mail'
    }
}