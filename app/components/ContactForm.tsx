"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Olá! Vim pelo site da Plantart. Meu nome é ${form.get("name")}. Gostaria de falar sobre: ${form.get("subject")}. ${form.get("message")}`;
    window.open(`https://wa.me/5561984838441?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return <form className="contact-form" onSubmit={submit}><div className="form-grid"><label>Nome<input name="name" required placeholder="Como podemos chamar você?" /></label><label>Assunto<select name="subject" defaultValue="Produtos"><option>Produtos</option><option>Paisagismo</option><option>Visita à loja</option><option>Outra dúvida</option></select></label></div><label>Mensagem<textarea name="message" required rows={5} placeholder="Conte brevemente como podemos ajudar." /></label><button className="btn btn--primary" type="submit">Enviar pelo WhatsApp</button>{sent ? <p className="form-success" role="status">Mensagem preparada. Se a nova aba não abrir, fale diretamente pelo botão de WhatsApp.</p> : <p className="form-note">Ao enviar, você será direcionado ao WhatsApp da Plantart.</p>}</form>;
}
