# 🚀 Guia de Deploy no Coolify

## 📋 Pré-requisitos

- ✅ Repositório Git (GitHub, GitLab, Gitea, etc)
- ✅ Coolify instalado na sua VPS
- ✅ Domínios configurados (opcional)

---

## 🔧 Passo 1: Push para o Repositório

```bash
# Se ainda não iniciou o git
git init

# Adicionar remote
git remote add origin <sua-url-do-repositorio>

# Add e commit
git add .
git commit -m "feat: MVP e-commerce completo para deploy"

# Push
git push -u origin main
```

---

## 🐳 Passo 2: Configurar no Coolify

### A. Criar Novo Projeto

1. No Coolify, vá em **Projects** → **New Project**
2. Nome: `shop-mvp`
3. Criar

### B. Adicionar Resource

1. **Add Resource** → **Docker Compose**
2. Configure:
   - **Repository URL:** URL do seu repositório Git
   - **Branch:** `main` (ou `master`)
   - **Docker Compose Location:** `docker-compose.yml` (raiz)

### C. Configurar Variáveis de Ambiente

Vá em **Environment Variables** e adicione:

```env
# Database (Supabase)
DATABASE_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres

# Supabase
SUPABASE_URL=https://wgumjdggliayfarlejyd.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW1qZGdnbGlheWZhcmxlanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODkxMTIsImV4cCI6MjA3NjE2NTExMn0.6eL_3ixrQMD8WqiuNe9h-rOAwjbTXNMF8L6v_W9lYrk

# JWT (MUDE ISSO!)
JWT_SECRET=gere-um-secret-super-seguro-para-producao

# API URL (ajuste com seu domínio)
VITE_API_URL=https://api.seu-dominio.com/api
```

### D. Configurar Domínios

**Backend:**
- Service: `backend`
- Domain: `api.seu-dominio.com`
- Port: `4000`

**Frontend:**
- Service: `frontend`
- Domain: `shop.seu-dominio.com` (ou `seu-dominio.com`)
- Port: `80`

### E. Deploy

1. Clique em **Deploy**
2. Aguarde o build (~5-10 minutos no primeiro deploy)
3. Verifique os logs

---

## 🔄 Executar Migrations em Produção

**Após o primeiro deploy bem-sucedido:**

1. No Coolify, abra o **Terminal** do container `backend`

2. Execute:
```bash
npx prisma migrate deploy
npm run seed
```

**Ou via SSH na VPS:**
```bash
docker exec -it <container-id-backend> sh
npx prisma migrate deploy
npm run seed
```

---

## 🌐 Acessar a Aplicação

Após o deploy:

- **Frontend:** `https://shop.seu-dominio.com`
- **Backend API:** `https://api.seu-dominio.com`
- **Swagger:** `https://api.seu-dominio.com/api/docs`

**Login:**
- Email: `admin@shop.com`
- Senha: `admin123`

---

## ✅ Checklist Pós-Deploy

- [ ] Frontend acessível via domínio
- [ ] Backend acessível via domínio
- [ ] Swagger docs funcionando
- [ ] Login funcionando
- [ ] Dashboard carregando
- [ ] Produtos listando
- [ ] Categorias listando
- [ ] Pedidos listando
- [ ] Upload de imagens funcionando

---

## 🔐 Segurança em Produção

### Depois do Deploy:

1. **Trocar credenciais padrão:**
   ```bash
   # Criar novo admin via Swagger ou Prisma Studio
   # Deletar admin padrão
   ```

2. **Alterar JWT_SECRET:**
   - Gere um secret forte
   - Atualize no Coolify
   - Redeploy

3. **Configurar CORS:**
   - Ajuste o CORS no `main.ts` para aceitar apenas seu domínio

4. **HTTPS:**
   - Coolify já configura SSL automaticamente via Let's Encrypt ✅

5. **Backup:**
   - Configure backup automático do Supabase

---

## 🐛 Troubleshooting

### Build falha
- Verifique os logs no Coolify
- Certifique-se que todas as variáveis estão configuradas

### Frontend não carrega
- Verifique se VITE_API_URL está correto
- Confirme que o domínio do backend está respondendo

### Erro de migrations
- Execute `npx prisma migrate deploy` no container
- Verifique se DIRECT_URL está correto

### Erro no upload
- Verifique as credenciais do Supabase
- Confirme que o bucket está público
- Teste as políticas RLS

---

## 📝 Variáveis de Ambiente - Referência Rápida

```env
# Supabase Database
DATABASE_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres

# Supabase Storage
SUPABASE_URL=https://wgumjdggliayfarlejyd.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW1qZGdnbGlheWZhcmxlanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODkxMTIsImV4cCI6MjA3NjE2NTExMn0.6eL_3ixrQMD8WqiuNe9h-rOAwjbTXNMF8L6v_W9lYrk

# JWT (TROCAR EM PRODUÇÃO!)
JWT_SECRET=shop-mvp-production-secret-2024-change-this

# Frontend API URL
VITE_API_URL=https://api.seu-dominio.com/api
```

---

**Preparando arquivos de deploy agora...** 🚀

