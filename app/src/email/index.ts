import nodemailer from 'nodemailer';
import response from "../utils/responses";


class Email {
    async toSend(email: string | undefined) {
        if(!email) return response(404, 'E-mail não pode ser vazio!')

        const transport = nodemailer.createTransport({
            host: '',
            port: 0,
            secure: false,
            auth: {}
        });
        
        transport.sendMail({
            from: 'Despesas Cadastradas',
            to: email,
            subject: 'Despesas Cadastradas',
            html: '<h1>Olá, que bom te ver por aqui!<h1> <p>Suas despesas foram cadastradas com sucesso!!!</p>',
            text: 'Olá, que bom te ver por aqui!, Suas despesas foram cadastradas com sucesso!!! '
        })
        .then(() => console.log('Email enviado com sucesso'))
        .catch((err) => console.log('Erro ao enviar o email: ', err));
    }
}

export default Email