import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.kinghost.net", // Altere para o host real
    port: 465, // Altere para a porta real
    secure: true, // true para 465, false para outras
    auth: {
      user: "contato@acctelecom.com.br", // Altere para o usuário real
      pass: "Acc@2954", // Altere para a senha real
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} <contato@acctelecom.com.br>`, // Altere para o usuário real
      to: "pedro.neto@groupoatk.com.br", // Altere para o destinatário real
      replyTo: email,
      subject: `Contato de ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Erro ao enviar e-mail:", e);
    return NextResponse.json({ error: "Falha no envio" }, { status: 500 });
  }
} 