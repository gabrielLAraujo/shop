# 🛠️ Scripts de Automação

Scripts para facilitar o setup e gestão do projeto.

## 📜 Scripts Disponíveis

### setup-supabase.sh
**Automatiza o setup completo do banco de dados**

```bash
./scripts/setup-supabase.sh
```

**O que faz:**
- ✅ Verifica se backend/.env existe
- ✅ Instala dependências do backend
- ✅ Gera Prisma Client
- ✅ Executa migrations (cria todas as tabelas)
- ✅ Popula banco com dados iniciais

**Pré-requisitos:**
- Projeto Supabase criado
- Arquivo `backend/.env` configurado com credenciais

### setup-storage.sql
**Configura políticas de acesso do Storage**

```sql
-- Execute no SQL Editor do Supabase
-- Após criar o bucket "products"
```

**O que faz:**
- ✅ Cria política de leitura pública
- ✅ Cria política de upload autenticado
- ✅ Cria política de delete autenticado
- ✅ Cria política de update autenticado

## 🚀 Uso Rápido

### Setup Completo em 3 Passos:

**1. Criar Projeto Supabase (2 min)**
```
supabase.com → New Project → shop-mvp
```

**2. Configurar .env e Executar Script**
```bash
# Criar backend/.env com credenciais
./scripts/setup-supabase.sh
```

**3. Configurar Storage (1 min)**
```
1. Supabase → Storage → Create bucket "products" (PUBLIC)
2. SQL Editor → Colar conteúdo de scripts/setup-storage.sql
3. Executar
```

**Pronto! Agora é só rodar:**
```bash
npm run dev
```

## 📝 Notas

- Os scripts foram testados no macOS e Linux
- No Windows, use Git Bash ou WSL
- Sempre confira o arquivo `.env` antes de executar
- Em caso de erro, consulte `SETUP_GUIDE.md`

## 🆘 Troubleshooting

**Erro: "backend/.env não encontrado"**
→ Crie o arquivo backend/.env com as credenciais do Supabase

**Erro: "Permission denied"**
→ Execute: `chmod +x scripts/setup-supabase.sh`

**Erro: "Cannot connect to database"**
→ Verifique se a connection string está correta

**Storage não funciona**
→ Certifique-se que o bucket está marcado como PUBLIC
→ Execute o SQL do setup-storage.sql

