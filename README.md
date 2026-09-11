# Floricultura Plantart

Site institucional da Floricultura Plantart, desenvolvido com Next.js, React e Tailwind CSS. O projeto está configurado para deploy nativo na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm test
npm run build
```

## Deploy na Vercel

Importe o repositório na Vercel usando a raiz deste projeto. Não é necessário configurar framework ou build customizado: a Vercel detecta Next.js automaticamente.

- Framework preset: `Next.js`
- Build command: `npm run build`
- Install command: `npm install` (ou o padrão detectado pela Vercel)
- Output directory: deixar vazio / padrão do Next.js
- Node.js: `22.x` ou superior, conforme `package.json`

O deploy não exige variáveis de ambiente para as páginas atuais. O formulário abre o WhatsApp com a mensagem preenchida e não armazena dados no servidor.
