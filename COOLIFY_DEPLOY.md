# 🚀 Deploy no Coolify - Guia Completo

## ✅ Pré-requisitos Concluídos

- ✅ Projeto commitado no Git
- ✅ Dockerfiles criados
- ✅ docker-compose.yml configurado
- ✅ nginx.conf configurado
- ✅ Variáveis de ambiente documentadas

---

## 📦 Passo 1: Push para Repositório Git

```bash
# Adicione seu repositório remoto
git remote add origin <URL-DO-SEU-REPOSITORIO>

# Exemplo GitHub:
# git remote add origin https://github.com/seu-usuario/shop-mvp.git

# Exemplo GitLab:
# git remote add origin https://gitlab.com/seu-usuario/shop-mvp.git

# Push
git push -u origin main
```

---

## 🐳 Passo 2: Configurar no Coolify

### A. Criar Novo Projeto

1. Acesse seu Coolify: `https://coolify.seu-dominio.com`
2. **Projects** → **+ New Project**
3. Nome: `shop-mvp`
4. Criar projeto

### B. Adicionar Resource

1. Dentro do projeto, clique em **+ New Resource**
2. Selecione **Docker Compose**
3. Configure:
   - **Source:** Git Repository
   - **Repository URL:** URL do seu repositório
   - **Branch:** `main`
   - **Docker Compose Location:** `/docker-compose.yml`
4. Save

### C. Configurar Variáveis de Ambiente

**IMPORTANTE:** No Coolify, vá em **Environment Variables** e adicione:

```env
DATABASE_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true

DIRECT_URL=postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres

SUPABASE_URL=https://wgumjdggliayfarlejyd.supabase.co

SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW1qZGdnbGlheWZhcmxlanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODkxMTIsImV4cCI6MjA3NjE2NTExMn0.6eL_3ixrQMD8WqiuNe9h-rOAwjbTXNMF8L6v_W9lYrk

JWT_SECRET=shop-mvp-production-secret-2024-TROCAR-ISSO

VITE_API_URL=https://api.seu-dominio.com/api
```

**⚠️ IMPORTANTE:**
- Troque `JWT_SECRET` por algo seguro e aleatório
- Ajuste `VITE_API_URL` com seu domínio real
- Marque todas como **secret/encrypted**

### D. Configurar Domínios

**Service: backend**
- Domain: `api.seu-dominio.com`
- Port: `4000`
- HTTPS: ✅ Enable

**Service: frontend**
- Domain: `shop.seu-dominio.com` (ou apenas `seu-dominio.com`)
- Port: `80`
- HTTPS: ✅ Enable

### E. Deploy!

1. Clique em **Deploy**
2. Aguarde o build (5-10 minutos no primeiro deploy)
3. Acompanhe os logs

---

## 🔄 Passo 3: Executar Migrations em Produção

**Após o primeiro deploy ser bem-sucedido:**

### Opção A: Via Coolify Terminal

1. No Coolify, vá no service **backend**
2. Clique em **Terminal** ou **Execute Command**
3. Execute:

```bash
npx prisma migrate deploy
npm run seed
```

### Opção B: Via SSH na VPS

```bash
# Conecte na VPS
ssh usuario@sua-vps.com

# Encontre o container do backend
docker ps | grep backend

# Execute no container
docker exec -it <container-id-backend> sh

# Dentro do container:
npx prisma migrate deploy
npm run seed
exit
```

---

## 🧪 Passo 4: Testar o Deploy

### Frontend
```
https://shop.seu-dominio.com
```
- Deve carregar a página de login
- Interface moderna
- Login funcionando

### Backend API
```
https://api.seu-dominio.com
```
- Deve retornar: "Cannot GET /"

### Swagger
```
https://api.seu-dominio.com/api/docs
```
- Deve carregar a documentação
- Testar endpoints

### Teste Completo
1. Acesse o frontend
2. Login: `admin@shop.com` / `admin123`
3. Ver dashboard com estatísticas
4. Listar produtos, categorias e pedidos
5. Testar upload de imagem via Swagger

---

## 📊 Estrutura dos Containers

```
shop-mvp/
├── backend (container)
│   └── Porta 4000 → api.seu-dominio.com
│
└── frontend (container)
    └── Porta 80 → shop.seu-dominio.com
```

---

## 🔐 Segurança Pós-Deploy

### 1. Trocar JWT_SECRET
```bash
# Gere um secret forte
openssl rand -base64 32

# Atualize no Coolify → Environment Variables
# Redeploy
```

### 2. Criar Novo Admin
Via Swagger ou Prisma Studio:
- Criar novo usuário admin com senha forte
- Deletar ou desabilitar admin padrão

### 3. Configurar CORS
Edite `backend/src/main.ts` para aceitar apenas seus domínios:

```typescript
app.enableCors({
  origin: ['https://shop.seu-dominio.com'],
  credentials: true,
});
```

### 4. Rate Limiting (Opcional)
Adicione proteção contra ataques:
- Instalar `@nestjs/throttler`
- Configurar limites de requisições

---

## 🔄 Updates Futuros

Para atualizar o app em produção:

```bash
# Local: fazer alterações e commit
git add .
git commit -m "feat: nova funcionalidade"
git push

# Coolify: vai detectar automaticamente e redesploy
# Ou clique manualmente em "Redeploy"
```

---

## 📈 Monitoramento

### Logs no Coolify
- Vá em **Logs** de cada service
- Monitore erros e warnings

### Métricas
- CPU e memória dos containers
- Uptime
- Requests

### Alertas (Configure)
- Email quando deploy falha
- Notificação de downtime

---

## 🆘 Troubleshooting

### Deploy falha
**Verifique:**
- Logs do build no Coolify
- Todas as variáveis de ambiente estão configuradas
- Dockerfile correto

### Frontend não carrega
**Verifique:**
- `VITE_API_URL` está correto (com /api no final)
- Domínio configurado corretamente
- HTTPS funcionando

### Backend erro 500
**Verifique:**
- Database URL está correto
- Migrations foram executadas
- Supabase está acessível

### Upload não funciona
**Verifique:**
- `SUPABASE_URL` e `SUPABASE_KEY` corretos
- Bucket "products" existe
- Políticas RLS configuradas

---

## 🎯 Checklist de Deploy

- [x] Git inicializado
- [x] Commit criado
- [ ] Push para repositório
- [ ] Projeto criado no Coolify
- [ ] Resource adicionado (Docker Compose)
- [ ] Variáveis de ambiente configuradas
- [ ] Domínios configurados
- [ ] Deploy executado
- [ ] Migrations executadas
- [ ] Seed executado
- [ ] Teste de acesso ao frontend
- [ ] Teste de login
- [ ] Teste de funcionalidades

---

## 🎊 Resultado Final

Após concluir todos os passos, você terá:

```
✅ App em produção na sua VPS
✅ HTTPS configurado automaticamente
✅ Backend escalável
✅ Frontend otimizado (nginx)
✅ Database no Supabase (gerenciado)
✅ Storage no Supabase (gerenciado)
✅ Logs centralizados
✅ Auto-restart em caso de falha
✅ Updates automáticos via git push
```

---

## 📝 Próximas Ações

```bash
# 1. Adicionar remote do seu repositório
git remote add origin <url>

# 2. Push
git push -u origin main

# 3. Configurar no Coolify (seguir passos acima)

# 4. Deploy e testar!
```

**Pronto para deploy! 🚀**

