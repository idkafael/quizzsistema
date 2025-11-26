# 🚀 Deploy Automático na Vercel

O projeto está configurado para deploy automático na Vercel. Siga os passos abaixo:

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Repositório já commitado no GitHub (✅ Feito!)

## 🔧 Passos para Deploy

### 1. Conectar Repositório à Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"** ou **"Import Project"**
3. Selecione o repositório `idkafael/quizzsistema`
4. A Vercel detectará automaticamente as configurações do `vercel.json`

### 2. Configurações do Projeto

A Vercel detectará automaticamente:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Variáveis de Ambiente (Opcional)

Se quiser sobrescrever os IDs de tracking, adicione no painel da Vercel:

**Settings → Environment Variables**

- `VITE_META_PIXEL_ID` = `837944042215176` (já configurado no código)
- `VITE_UTMIFY_PIXEL_ID` = `69265b8275b62edb0bf55bcd` (já configurado no código)

**Nota**: Os IDs já estão hardcoded no código, então essas variáveis são opcionais.

### 4. Deploy

1. Clique em **"Deploy"**
2. Aguarde o build completar (geralmente 1-2 minutos)
3. Seu site estará disponível em uma URL da Vercel (ex: `quizzsistema.vercel.app`)

## 🔄 Deploy Automático

Após a primeira configuração:

- ✅ Cada push na branch `main` fará deploy automático
- ✅ Pull Requests criarão preview deployments
- ✅ Você receberá notificações por email sobre o status do deploy

## 📝 Configurações do vercel.json

O arquivo `vercel.json` já está configurado com:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Isso garante que:
- O build seja feito corretamente
- As rotas do React Router funcionem (SPA)
- O framework Vite seja detectado

## 🎯 Domínio Customizado (Opcional)

1. Vá em **Settings → Domains**
2. Adicione seu domínio customizado
3. Siga as instruções de DNS

## ✅ Verificação

Após o deploy, verifique:

1. ✅ Site carrega corretamente
2. ✅ Quiz funciona em todas as páginas
3. ✅ Botões de compra redirecionam corretamente
4. ✅ Tracking está funcionando (verifique no Meta Events Manager e UTMify)

## 🐛 Troubleshooting

### Build falha
- Verifique os logs na Vercel
- Certifique-se de que todas as dependências estão no `package.json`

### Rotas não funcionam
- O `vercel.json` já está configurado com rewrites para SPA
- Se ainda houver problemas, verifique se o `outputDirectory` está correto

### Tracking não funciona
- Verifique se os scripts estão carregando no DevTools
- Confirme que os IDs estão corretos no código

## 📞 Suporte

Para mais informações, consulte a [documentação da Vercel](https://vercel.com/docs).

