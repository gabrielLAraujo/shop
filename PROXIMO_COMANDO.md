# 🎯 Próximo Comando: Push para o Repositório

## ✅ Status Atual

```
✅ Git inicializado
✅ Commit criado (9a568c2)
✅ 90+ arquivos commitados
✅ Dockerfiles prontos
✅ docker-compose.yml configurado
✅ Pronto para deploy!
```

---

## 🚀 Próximo Passo: Push para Git

### Opção 1: GitHub

```bash
# 1. Crie um repositório no GitHub (público ou privado)

# 2. Adicione o remote
git remote add origin https://github.com/SEU-USUARIO/shop-mvp.git

# 3. Push
git push -u origin main
```

### Opção 2: GitLab

```bash
# 1. Crie um repositório no GitLab

# 2. Adicione o remote
git remote add origin https://gitlab.com/SEU-USUARIO/shop-mvp.git

# 3. Push
git push -u origin main
```

### Opção 3: Gitea (Self-hosted)

```bash
# Se você tem Gitea na VPS
git remote add origin https://git.seu-dominio.com/seu-usuario/shop-mvp.git
git push -u origin main
```

---

## 📦 Depois do Push

### No Coolify:

1. **New Project** → `shop-mvp`

2. **Add Resource** → **Docker Compose**
   - URL: Seu repositório
   - Branch: `main`
   - Docker Compose: `docker-compose.yml`

3. **Environment Variables** (copie de `.env.production.example`):
   ```
   DATABASE_URL=...
   DIRECT_URL=...
   SUPABASE_URL=...
   SUPABASE_KEY=...
   JWT_SECRET=... (GERE UM NOVO!)
   VITE_API_URL=https://api.seu-dominio.com/api
   ```

4. **Domains:**
   - backend → `api.seu-dominio.com:4000`
   - frontend → `shop.seu-dominio.com:80`

5. **Deploy**

6. **Após deploy**, execute no container backend:
   ```bash
   npx prisma migrate deploy
   npm run seed
   ```

---

## 🎯 Comandos para Executar AGORA

```bash
# 1. Adicione seu repositório (escolha GitHub, GitLab, ou Gitea)
git remote add origin <URL-DO-SEU-REPOSITORIO>

# 2. Push
git push -u origin main

# 3. Configure no Coolify (interface web)

# 4. Deploy! 🚀
```

---

## 📊 Arquivos Prontos para Deploy

```
✅ Dockerfile.backend      - Container otimizado Node.js
✅ Dockerfile.frontend     - Container otimizado Nginx
✅ docker-compose.yml      - Orchestração dos 2 services
✅ frontend/nginx.conf     - Config Nginx + cache + SPA
✅ .dockerignore          - Otimização do build
✅ coolify-setup.sh       - Script pós-deploy
✅ DEPLOY.md              - Guia detalhado
✅ COOLIFY_DEPLOY.md      - Guia específico Coolify
```

---

## 🎉 Está Pronto!

Seu projeto está **100% preparado para deploy no Coolify!**

**Próxima ação:**
1. Criar repositório Git (GitHub/GitLab/Gitea)
2. Executar: `git remote add origin <url>`
3. Executar: `git push -u origin main`
4. Configurar no Coolify
5. Deploy!

---

**Execute o comando de push agora e depois configure no Coolify!** 🚀

