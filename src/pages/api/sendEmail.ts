import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;
  if (req.method === "POST") {
    // Configure o Nodemailer com suas credenciais

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-mail para enviar
    const emailTo = process.env.EMAIL_TO;
    if (typeof emailTo === "undefined") {
      throw new Error("EMAIL_TO não está definido");
    }
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER, // E-mail de origem
        to: emailTo, // E-mail de destino
        subject: `Neptune Lab - Contato de ${body.nome}`, // Assunto
        text: JSON.stringify(body), // Corpo do e-mail
        html: `<p>Olá, voce recebeu um contato de <strong style="text-transform:uppercase;">${body.nome}</strong>, a mensagem é:<br /><b>${body.mensagem}</b><br /><p>telefone: <b>${body.telefone}</b></p><br /><p>email: <b>${body.email}</b></p></p>`,
      });

      res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao enviar e-mail" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
