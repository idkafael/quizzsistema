# Configuração de Tracking - Meta Pixel e UTMify

Este projeto está configurado para rastrear conversões através do Meta Pixel (Facebook Pixel) e UTMify.

## Configuração

### 1. Variáveis de Ambiente (Opcional)

Os IDs já estão configurados por padrão no código. Se quiser sobrescrever, crie um arquivo `.env` na raiz do projeto:

```env
VITE_META_PIXEL_ID=837944042215176
VITE_UTMIFY_PIXEL_ID=69265b8275b62edb0bf55bcd
```

### 2. IDs Configurados

#### Meta Pixel ID
- **ID Configurado**: `837944042215176`
- Para alterar, modifique `src/config/tracking.ts` ou use variável de ambiente

#### UTMify Pixel ID
- **ID Configurado**: `69265b8275b62edb0bf55bcd`
- Para alterar, modifique `src/config/tracking.ts` ou use variável de ambiente

### 3. Eventos Rastreados

O sistema rastreia automaticamente:

- **PageView**: Visualização de páginas
- **Purchase**: Conversão (quando o usuário clica em qualquer botão de compra)

### 4. Localização dos Arquivos

- **Configuração**: `src/config/tracking.ts`
- **Utilitários**: `src/utils/tracking.ts`
- **Inicialização**: `src/main.tsx`
- **Eventos de conversão**: `src/components/ResultPage.tsx`

### 5. Testando

Após configurar os IDs:

1. Inicie o servidor de desenvolvimento: `npm run dev`
2. Abra o DevTools do navegador
3. Vá para a aba "Network" e filtre por "fbevents.js" (Meta Pixel) ou "utmify.js" (UTMify)
4. Clique em um botão de compra
5. Verifique se os eventos estão sendo enviados

### 6. Verificação no Meta Events Manager

1. Acesse o Events Manager
2. Vá para "Test Events"
3. Acesse a página do quiz
4. Você deve ver eventos de PageView e Purchase sendo registrados

### 7. Verificação no UTMify

1. Acesse o painel do UTMify
2. Verifique os eventos de conversão sendo registrados

## Notas

- Os scripts são carregados dinamicamente via JavaScript
- O tracking funciona apenas em produção ou quando as variáveis de ambiente estão configuradas
- Os eventos são enviados quando o usuário clica nos botões de compra na página de resultados

