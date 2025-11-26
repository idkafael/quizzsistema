# Quiz - Rastreador de Hábitos

Sistema de quiz interativo desenvolvido em React + TypeScript + Vite para identificar necessidades dos usuários e direcionar para o produto Rastreador de Hábitos.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Meta Pixel** - Tracking de conversões do Facebook
- **UTMify** - Tracking de parâmetros UTM e conversões

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 📋 Estrutura do Projeto

```
quizz/
├── src/
│   ├── components/      # Componentes React
│   ├── config/          # Configurações
│   ├── utils/           # Utilitários e helpers
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Entry point
├── assets/              # Imagens e recursos estáticos
├── index.html           # HTML principal
└── package.json         # Dependências
```

## 🎯 Funcionalidades

- ✅ Quiz interativo com 8 perguntas
- ✅ Validação obrigatória de respostas
- ✅ Página de resultados com oferta
- ✅ Tracking de conversões (Meta Pixel + UTMify)
- ✅ Popups de notificação de compras
- ✅ Design responsivo
- ✅ Timer de expiração de oferta

## 📊 Tracking

O sistema está configurado para rastrear conversões através de:

- **Meta Pixel**: ID `837944042215176`
- **UTMify Pixel**: ID `69265b8275b62edb0bf55bcd`

Para mais informações sobre configuração, consulte `TRACKING_SETUP.md`

## 🚀 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte o repositório GitHub à Vercel
2. A Vercel detectará automaticamente as configurações do `vercel.json`
3. O deploy será feito automaticamente a cada push na branch principal

### Variáveis de Ambiente (Opcional)

Se quiser sobrescrever os IDs de tracking, configure no painel da Vercel:

- `VITE_META_PIXEL_ID`
- `VITE_UTMIFY_PIXEL_ID`

## 📝 Licença

Este projeto é privado e proprietário.
