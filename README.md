# 👼 Multi Angels Pro v2.2

Visualizador de múltiplas lives da Twitch com chat, VODs, clips e notificações.

## 🚀 Deploy

### Netlify

1. Conecte o repositório no Netlify
2. Em **Site settings → Environment variables** adicione:
   - `TWITCH_CLIENT_ID` = seu client ID
   - `TWITCH_CLIENT_SECRET` = seu client secret
3. Deploy automático ✅

### Vercel

1. Conecte o repositório no Vercel
2. Em **Settings → Environment Variables** adicione:
   - `TWITCH_CLIENT_ID` = seu client ID
   - `TWITCH_CLIENT_SECRET` = seu client secret
3. Deploy automático ✅

## 🔑 Obter credenciais da Twitch

1. Acesse https://dev.twitch.tv/console
2. Crie uma aplicação
3. Copie o **Client ID**
4. Gere um **Client Secret**

## ✨ Funcionalidades

- ✅ Múltiplos layouts (1-9 streams)
- ✅ Chat sincronizado
- ✅ VODs e Clips
- ✅ Notificações push
- ✅ Sistema de favoritos
- ✅ Grupos de canais
- ✅ 4 temas (Dark, Light, Purple, Matrix)
- ✅ PWA instalável
- ✅ Zero secrets no código

## 📦 Estrutura

```
.
├── index.html                    ← App completa
├── manifest.json                 ← PWA
├── sw.js                         ← Service Worker
├── netlify.toml                  ← Config Netlify
├── vercel.json                   ← Config Vercel
├── netlify/functions/
│   └── twitch-token.js          ← Serverless Netlify
└── api/
    └── twitch-token.js          ← Serverless Vercel
```

## 🔒 Segurança

Os secrets (`TWITCH_CLIENT_SECRET`) nunca aparecem no código ou no browser. Ficam apenas nas environment variables do Netlify/Vercel e são acessados pelas serverless functions.

## 📝 Licença

MIT © 2026
