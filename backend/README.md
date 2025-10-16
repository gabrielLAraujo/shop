# Backend API - Shop MVP

API REST construída com NestJS + Fastify + Prisma.

## 🚀 Tecnologias

- NestJS 10
- Fastify (adapter de alta performance)
- Prisma ORM
- PostgreSQL (Supabase)
- JWT Authentication
- Swagger/OpenAPI

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

1. Copie `.env.example` para `.env`
2. Configure as variáveis de ambiente com suas credenciais do Supabase
3. Execute as migrations do Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

4. Popule o banco com dados iniciais

```bash
npm run seed
```

## 🏃 Rodando o Servidor

```bash
# Desenvolvimento (watch mode)
npm run start:dev

# Produção
npm run build
npm run start:prod
```

A API estará disponível em `http://localhost:4000`

## 📚 Documentação

Acesse a documentação Swagger em: `http://localhost:4000/api/docs`

## 🗄️ Prisma - Comandos Úteis

```bash
# Abrir Prisma Studio (interface visual do banco)
npx prisma studio

# Criar nova migration
npx prisma migrate dev --name nome_da_migration

# Gerar Prisma Client após mudanças no schema
npx prisma generate

# Resetar banco de dados (cuidado!)
npx prisma migrate reset

# Sincronizar schema sem criar migration (dev only)
npx prisma db push

# Pull schema do banco existente
npx prisma db pull
```

## 🔌 Endpoints Principais

### Autenticação
- `POST /api/auth/login` - Login com email/senha

### Categorias
- `GET /api/categories` - Listar todas
- `POST /api/categories` - Criar categoria
- `GET /api/categories/:id` - Obter categoria
- `PATCH /api/categories/:id` - Atualizar categoria
- `DELETE /api/categories/:id` - Deletar categoria

### Produtos
- `GET /api/products` - Listar produtos (com paginação e filtros)
- `POST /api/products` - Criar produto
- `GET /api/products/:id` - Obter produto
- `PATCH /api/products/:id` - Atualizar produto
- `DELETE /api/products/:id` - Deletar produto
- `POST /api/products/:id/images` - Adicionar imagens

### Pedidos
- `GET /api/orders` - Listar pedidos
- `POST /api/orders` - Criar pedido
- `GET /api/orders/:id` - Obter pedido
- `PATCH /api/orders/:id/status` - Atualizar status

### Upload
- `POST /api/upload` - Upload de múltiplos arquivos
- `DELETE /api/upload` - Deletar arquivo

## 🔐 Autenticação

Todas as rotas (exceto `/api/auth/login`) requerem um JWT token no header:

```
Authorization: Bearer <seu-token-jwt>
```

## 🛠️ Estrutura de Pastas

```
src/
├── auth/              # Módulo de autenticação
├── categories/        # Módulo de categorias
├── products/          # Módulo de produtos
├── orders/            # Módulo de pedidos
├── upload/            # Módulo de upload (Supabase)
├── prisma/            # Prisma service
├── app.module.ts      # Módulo raiz
└── main.ts            # Entry point
```

## 📝 Credenciais Padrão (após seed)

- Email: `admin@shop.com`
- Senha: `admin123`

**⚠️ Lembre-se de alterar essas credenciais em produção!**


