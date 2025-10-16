# 🌐 URLs do Deploy no Coolify

## ✅ Domínios Gerados

**Backend:**
```
http://nk04440gock8ogo8s4k0gksc.148.230.77.89.sslip.io
```

**Frontend:**
```
http://qkww0gwog84ko4kcso8ockkc.148.230.77.89.sslip.io
```

---

## ⚙️ AÇÃO NECESSÁRIA: Atualizar VITE_API_URL

### No Coolify:

1. Vá em **Environment Variables** do projeto
2. Encontre a variável: `VITE_API_URL`
3. **Atualize para:**
   ```
   VITE_API_URL=http://nk04440gock8ogo8s4k0gksc.148.230.77.89.sslip.io/api
   ```
4. **Save**
5. **Redeploy** o projeto (ou apenas o frontend)

---

## 🔗 URLs Finais da Aplicação

**Frontend (Painel Admin):**
```
http://qkww0gwog84ko4kcso8ockkc.148.230.77.89.sslip.io
```

**Backend API:**
```
http://nk04440gock8ogo8s4k0gksc.148.230.77.89.sslip.io
```

**Swagger (Documentação):**
```
http://nk04440gock8ogo8s4k0gksc.148.230.77.89.sslip.io/api/docs
```

**Login:**
- Email: `admin@shop.com`
- Senha: `admin123`

---

## 📋 Checklist

- [x] Deploy executado
- [x] Domínios gerados
- [ ] **VITE_API_URL atualizada** ← FAÇA ISSO AGORA
- [ ] Redeploy frontend
- [ ] Migrations executadas
- [ ] Aplicação testada

---

## 🎯 Próximos Passos

### 1. Atualizar VITE_API_URL (AGORA)
```
No Coolify → Environment Variables
VITE_API_URL=http://nk04440gock8ogo8s4k0gksc.148.230.77.89.sslip.io/api
Save → Redeploy
```

### 2. Executar Migrations no Backend
```bash
# No terminal do container backend:
npx prisma migrate deploy
npm run seed
```

### 3. Testar!
```
Acesse: http://qkww0gwog84ko4kcso8ockkc.148.230.77.89.sslip.io
Login: admin@shop.com / admin123
```

---

**Atualize a variável VITE_API_URL no Coolify e redeploy!** 🚀

