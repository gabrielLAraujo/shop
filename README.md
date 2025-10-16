# 🛍️ Shop MVP - E-commerce com Painel Admin

MVP completo de loja de produtos com painel administrativo moderno e funcional.

## 🚀 Tecnologias

### Backend
- **NestJS** com **Fastify** adapter
- **Prisma ORM** com PostgreSQL
- **JWT Authentication** com Passport
- **Supabase** para banco de dados e storage de imagens
- **Swagger** para documentação da API

### Frontend
- **React 18** com **TypeScript**
- **Vite** como build tool
- **Shadcn/ui** + **Tailwind CSS** (design moderno estilo v0.dev)
- **Zustand** para gerenciamento de estado
- **React Hook Form** + **Zod** para formulários
- **Axios** para requisições HTTP

## 📋 Pré-requisitos

- Node.js 18+ e npm
- Projeto Supabase configurado (veja `SUPABASE_SETUP.md`)

## 🔧 Setup do Projeto

### ⚡ Setup Automático (Recomendado)

```bash
# 1. Criar projeto no Supabase (2 min - via web)
# Acesse supabase.com → New Project → Anote as credenciais

# 2. Configurar credenciais no backend/.env

# 3. Executar script automatizado
./scripts/setup-supabase.sh

# 4. Configurar Storage (1 min - via web Supabase)
# Execute o SQL do arquivo: scripts/setup-storage.sql

# 5. Rodar o projeto
npm run dev
```

### 📋 Setup Manual

```bash
# 1. Instalar dependências
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# 2. Criar projeto Supabase e obter credenciais

# 3. Criar backend/.env com credenciais

# 4. Configurar banco de dados
cd backend
npx prisma generate
npx prisma migrate dev --name init
npm run seed

# 5. Criar frontend/.env

# 6. Rodar
cd ..
npm run dev
```

📖 **Guias disponíveis:**
- [`SUPABASE_AUTO_SETUP.md`](./SUPABASE_AUTO_SETUP.md) - Setup simplificado
- [`SETUP_GUIDE.md`](./SETUP_GUIDE.md) - Guia detalhado completo
- [`QUICKSTART.md`](./QUICKSTART.md) - Início rápido (5 min)

## 🏃 Rodando o Projeto

### Desenvolvimento (Backend + Frontend simultaneamente)
```bash
npm run dev
```

Ou rodar separadamente:

### Backend apenas (porta 4000)
```bash
npm run dev:backend
```

### Frontend apenas (porta 5173)
```bash
npm run dev:frontend
```

## 🔑 Credenciais Padrão

Após executar o seed, use estas credenciais para login:
- **Email:** admin@shop.com
- **Senha:** admin123

## 📚 Documentação da API

Acesse a documentação Swagger:
```
http://localhost:4000/api/docs
```

## 📁 Estrutura do Projeto

```
shop/
├── backend/              # API NestJS
│   ├── src/
│   │   ├── auth/        # Autenticação JWT
│   │   ├── categories/  # CRUD Categorias
│   │   ├── products/    # CRUD Produtos
│   │   ├── orders/      # Gestão de Pedidos
│   │   ├── upload/      # Upload Supabase
│   │   └── prisma/      # Prisma Service
│   └── prisma/
│       └── schema.prisma
│
├── frontend/            # Painel Admin React
│   └── src/
│       ├── components/  # Componentes React
│       ├── pages/       # Páginas
│       ├── services/    # API clients
│       ├── stores/      # Zustand stores
│       └── types/       # TypeScript types
│
└── package.json         # Monorepo root
```

## ✨ Funcionalidades

### Painel Administrativo
- ✅ Dashboard com estatísticas
- ✅ Gestão de Produtos (CRUD + upload de imagens)
- ✅ Gestão de Categorias (CRUD)
- ✅ Visualização e gestão de Pedidos
- ✅ Interface moderna e responsiva

### API Backend
- ✅ Autenticação JWT
- ✅ CRUD completo de Produtos, Categorias e Pedidos
- ✅ Upload de múltiplas imagens
- ✅ Paginação e filtros
- ✅ Validação de dados
- ✅ Documentação Swagger

## 🧪 Testando

Para testar o fluxo completo:
1. Acesse http://localhost:5173
2. Faça login com as credenciais padrão
3. Crie algumas categorias
4. Crie produtos com imagens
5. Visualize o dashboard atualizado
6. Crie pedidos via API (Swagger)
7. Gerencie status dos pedidos no painel

## 📝 Comandos Úteis

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Backend - Prisma
cd backend
npx prisma studio          # Interface visual do banco
npx prisma migrate dev     # Criar nova migration
npx prisma generate        # Gerar Prisma Client

# Frontend - Build
cd frontend
npm run build
npm run preview            # Preview da build
```

## 🤝 Contribuindo

Este é um projeto MVP. Sinta-se à vontade para expandir e melhorar!

## 📄 Licença

MIT

