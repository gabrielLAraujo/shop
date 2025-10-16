# 🚀 Deploy no Coolify - PRONTO PARA EXECUTAR!

## ✅ Código no GitHub

**Repositório:** https://github.com/gabrielLAraujo/shop

```
✅ Branch: main
✅ Commit: 9a568c2
✅ 90+ arquivos
✅ Pronto para deploy!
```

---

## 🐳 Configurar no Coolify (5 minutos)

### Passo 1: Criar Projeto

1. **Acesse seu Coolify** na VPS

2. **Projects** → **+ New**
   - Name: `shop-mvp`
   - Create

---

### Passo 2: Adicionar Resource

1. Dentro do projeto `shop-mvp`, clique **+ New Resource**

2. Selecione **Docker Compose**

3. Configure:
   - **Source:** Public Repository
   - **Repository URL:** `https://github.com/gabrielLAraujo/shop`
   - **Branch:** `main`
   - **Docker Compose Location:** `/docker-compose.yml`
   
4. **Save**

---

### Passo 3: Variáveis de Ambiente

No Coolify, vá em **Environment** e adicione estas variáveis:

**⚠️ COPIE E COLE EXATAMENTE:**

```env
DATABASE_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true

DIRECT_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres

SUPABASE_URL=https://wgumjdggliayfarlejyd.supabase.co

SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW1qZGdnbGlheWZhcmxlanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODkxMTIsImV4cCI6MjA3NjE2NTExMn0.6eL_3ixrQMD8WqiuNe9h-rOAwjbTXNMF8L6v_W9lYrk

JWT_SECRET=shop-production-secret-2024-change-this-to-something-random

VITE_API_URL=https://api.seu-dominio.com/api
```

**📝 Ajustes necessários:**
- `JWT_SECRET`: Troque por algo aleatório e seguro
- `VITE_API_URL`: Ajuste com o domínio do seu backend

---

### Passo 4: Configurar Domínios

**Service: backend**
- Vá em **Domains** do service `backend`
- Adicione: `api.seu-dominio.com`
- Porta: `4000`
- HTTPS: ✅ Enable

**Service: frontend**
- Vá em **Domains** do service `frontend`
- Adicione: `shop.seu-dominio.com` (ou `seu-dominio.com`)
- Porta: `80`
- HTTPS: ✅ Enable

---

### Passo 5: Deploy

1. Clique em **Deploy**
2. Aguarde o build (~5-10 minutos)
3. Acompanhe os logs

**Esperado:**
```
Building backend...
Building frontend...
Starting services...
✅ Deploy successful
```

---

### Passo 6: Executar Migrations

**IMPORTANTE:** Após o primeiro deploy bem-sucedido:

1. No Coolify, vá no service **backend**
2. Clique em **Terminal** ou **Execute Command**
3. Execute:

```bash
npx prisma migrate deploy
npm run seed
```

**Resultado esperado:**
```
✅ Migration applied
✅ Usuário admin criado
✅ 3 categorias criadas
✅ 5 produtos criados
✅ 1 pedido criado
```

---

## 🎯 Acessar a Aplicação

Após concluir tudo:

**Frontend (Painel Admin):**
```
https://shop.seu-dominio.com
```

**Backend (API):**
```
https://api.seu-dominio.com
```

**Swagger (Documentação):**
```
https://api.seu-dominio.com/api/docs
```

**Login:**
- Email: `admin@shop.com`
- Senha: `admin123`

---

## 🔐 Segurança Pós-Deploy

### 1. Gerar JWT_SECRET Forte

```bash
# Gere um secret aleatório
openssl rand -base64 32

# Atualize no Coolify
# Redeploy
```

### 2. Trocar Credenciais Admin

Via Swagger:
1. Criar novo admin com senha forte
2. Deletar admin padrão

---

## ✅ Checklist de Deploy

- [x] Código no GitHub
- [ ] Projeto criado no Coolify
- [ ] Resource adicionado (Docker Compose)
- [ ] Variáveis de ambiente configuradas
- [ ] Domínios configurados
- [ ] Deploy executado
- [ ] Logs verificados (sem erros)
- [ ] Migrations executadas no container
- [ ] Seed executado
- [ ] Frontend acessível via domínio
- [ ] Backend acessível via domínio
- [ ] Login funcionando
- [ ] Dados carregando corretamente
- [ ] Upload de imagens testado

---

## 🐛 Troubleshooting

### Build falha
- Verifique logs no Coolify
- Certifique-se que todas as variáveis estão configuradas
- Verifique se o repositório GitHub está acessível

### Frontend carrega mas API falha
- Ajuste `VITE_API_URL` com o domínio correto
- Rebuild do frontend

### Erro de migrations
- Execute `npx prisma migrate deploy` no container
- Verifique `DIRECT_URL`

### Imagens não carregam
- Verifique bucket "products" no Supabase
- Confirme políticas RLS

---

## 🎊 Resumo

```
Repositório: https://github.com/gabrielLAraujo/shop
Branch: main
Commit: 9a568c2

Deploy Strategy:
├── Docker Compose (2 services)
├── Backend: Node.js 18 Alpine
├── Frontend: Nginx Alpine
└── Database: Supabase (externo)

Próximos passos:
1. Configurar no Coolify
2. Deploy
3. Executar migrations
4. Testar em produção
```

---

**Acesse o Coolify agora e siga os 6 passos acima!** 🚀

Link do repo: https://github.com/gabrielLAraujo/shop

