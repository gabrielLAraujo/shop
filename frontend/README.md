# Frontend - Painel Admin Shop MVP

Painel administrativo moderno construído com React, TypeScript, Tailwind CSS e Shadcn/ui.

## 🎨 Design

Interface moderna no estilo v0.dev com:
- Shadcn/ui components
- Tailwind CSS para estilização
- Design responsivo
- Animações suaves
- Dark mode ready

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui
- Zustand (state management)
- React Hook Form + Zod
- Axios
- React Router v6
- Lucide React (ícones)
- Sonner (toast notifications)

## 📦 Instalação

```bash
npm install
```

## ⚙️ Configuração

1. Copie `.env.example` para `.env`
2. Configure a URL da API:
   ```
   VITE_API_URL=http://localhost:4000/api
   ```

## 🏃 Rodando o Projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

O frontend estará disponível em `http://localhost:5173`

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── ui/              # Componentes Shadcn/ui
│   ├── Layout/          # Layout principal
│   ├── Categories/      # Componentes de categorias
│   ├── Products/        # Componentes de produtos
│   └── Orders/          # Componentes de pedidos
├── pages/               # Páginas da aplicação
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Products.tsx
│   ├── Categories.tsx
│   └── Orders.tsx
├── services/            # API clients
│   ├── api.ts
│   ├── authService.ts
│   ├── categoriesService.ts
│   ├── productsService.ts
│   └── ordersService.ts
├── stores/              # Zustand stores
│   └── authStore.ts
├── types/               # TypeScript types
│   └── index.ts
├── lib/                 # Utilitários
│   └── utils.ts
├── hooks/               # Custom hooks
│   └── useToast.ts
├── App.tsx              # App principal
└── main.tsx             # Entry point
```

## 🔌 Páginas

- `/login` - Login de autenticação
- `/` - Dashboard com estatísticas
- `/products` - Gestão de produtos
- `/categories` - Gestão de categorias
- `/orders` - Visualização e gestão de pedidos

## 🎯 Funcionalidades

- ✅ Autenticação JWT com persistência
- ✅ Dashboard com métricas
- ✅ CRUD completo de produtos com upload de imagens
- ✅ CRUD de categorias
- ✅ Visualização e gestão de pedidos
- ✅ Interface responsiva (desktop, tablet, mobile)
- ✅ Toast notifications
- ✅ Loading states
- ✅ Validação de formulários
- ✅ Tratamento de erros

## 🎨 Componentes Shadcn/ui

Os seguintes componentes do Shadcn/ui estão configurados:
- Button
- Input
- Label
- Card
- Table
- Dialog
- Select
- Tabs
- Switch
- Avatar
- Badge
- Alert Dialog
- Dropdown Menu
- Separator

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Lint do código


