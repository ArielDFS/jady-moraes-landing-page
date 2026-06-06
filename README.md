# Jady Moraes — Leitura Crítica Literária

Landing page profissional para serviço de leitura crítica literária, construída com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Funcionalidades

- Design editorial premium com paleta vinho/dourado/creme
- 9 seções completas: Hero, Sobre, Como Funciona, Serviços, Portfólio, Depoimentos, FAQ, Contato, CTA Final
- Formulário de contato integrado com Resend API
- Botão flutuante WhatsApp com animação pulse
- CTAs WhatsApp ao longo de todo o site
- Animações suaves com Framer Motion (scroll-triggered)
- SEO completo: OpenGraph, Schema JSON-LD, sitemap, robots.txt
- 100% responsivo (mobile-first)
- Accordion FAQ, carrossel de depoimentos, contador animado

## 🛠️ Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** com design tokens customizados
- **Framer Motion** para animações
- **Lucide React** para ícones
- **Resend** para envio de e-mail
- **React Hook Form** + **Zod** para formulário

---

## 🚀 Como rodar localmente

### 1. Pré-requisitos

- Node.js 18+ instalado ([nodejs.org](https://nodejs.org))
- npm ou yarn

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie o arquivo de exemplo e preencha com seus dados:

```bash
cp .env.example .env.local
```

Abra `.env.local` e substitua os valores:

```env
# Chave da API Resend (https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx

# E-mail que receberá as mensagens
CONTACT_EMAIL=seu@email.com.br

# Número WhatsApp (apenas números, com DDI)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999

# Instagram
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/seuinstagram

# URL do site em produção
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build de produção

```bash
npm run build
npm start
```

---

## 🌐 Deploy na Vercel

### Passo 1 — Push para GitHub

```bash
git init
git add .
git commit -m "Initial commit — Jady Moraes landing page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### Passo 2 — Importar na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Selecione o repositório GitHub que você criou
4. Clique em **"Import"**

### Passo 3 — Configurar variáveis de ambiente

Na tela de configuração do projeto (antes de fazer deploy), clique em **"Environment Variables"** e adicione:

| Variável | Valor |
|---|---|
| `RESEND_API_KEY` | Sua chave do Resend |
| `CONTACT_EMAIL` | E-mail de destino |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp |
| `NEXT_PUBLIC_INSTAGRAM_URL` | URL do Instagram |
| `NEXT_PUBLIC_SITE_URL` | URL do domínio final |

### Passo 4 — Deploy

Clique em **"Deploy"** e aguarde. A Vercel fará o build automaticamente.

### Passo 5 — Domínio personalizado

1. No painel do projeto na Vercel, vá em **"Settings" → "Domains"**
2. Clique em **"Add Domain"**
3. Digite seu domínio: `jadymoraes.com.br`
4. Siga as instruções para configurar os registros DNS no seu provedor (Registro.br, Hostinger, etc.)

**Registros DNS necessários:**
- Tipo `A`: `@` → `76.76.19.19` (IP da Vercel)
- Tipo `CNAME`: `www` → `cname.vercel-dns.com`

---

## 📧 Configurar Resend

1. Crie uma conta em [resend.com](https://resend.com)
2. Vá em **"API Keys"** e crie uma nova chave
3. Cole a chave em `RESEND_API_KEY`
4. **Importante:** O campo `from` no e-mail deve usar um domínio verificado no Resend. Para testes, você pode usar `onboarding@resend.dev`.

Para domínio próprio:
1. No Resend, vá em **"Domains"** → **"Add Domain"**
2. Adicione os registros DNS fornecidos
3. Atualize o campo `from` em `app/api/contact/route.ts`

---

## ✏️ Como personalizar

Todos os textos e dados do site estão centralizados em **`lib/constants.ts`**. Edite esse arquivo para atualizar:

- Informações de contato
- Serviços oferecidos
- Portfólio (projetos mock)
- Depoimentos
- FAQ
- Credenciais e bio da seção Sobre

### Substituir imagens

Coloque suas fotos reais em:
- `public/images/hero-photo.png` — Foto da seção Hero
- `public/images/about-photo.png` — Foto da seção Sobre
- `public/og-image.png` — Imagem para redes sociais (1200×630px)

---

## 📁 Estrutura do projeto

```
├── app/
│   ├── api/contact/route.ts    # API para formulário (Resend)
│   ├── layout.tsx              # Layout raiz + SEO
│   ├── page.tsx                # Página principal
│   ├── sitemap.ts              # Sitemap SEO
│   ├── robots.ts               # robots.txt
│   └── globals.css             # Estilos globais
├── components/
│   ├── ui/                     # Componentes reutilizáveis
│   └── layout/                 # Navbar, Footer, WhatsApp
├── sections/                   # Seções da landing page
├── lib/
│   ├── constants.ts            # TODOS os dados do site
│   ├── whatsapp.ts             # Helper WhatsApp URL
│   ├── validations.ts          # Schemas Zod
│   └── utils.ts                # Utilitário cn()
├── hooks/
│   └── useContactForm.ts       # Hook do formulário
└── public/
    └── images/                 # Imagens do site
```

---

## 📄 Licença

Projeto desenvolvido exclusivamente para uso de Jady Moraes.
