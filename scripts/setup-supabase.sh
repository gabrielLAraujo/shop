#!/bin/bash

# Script de setup automático do Supabase
# Execute após configurar backend/.env com suas credenciais

set -e

echo "🚀 Iniciando setup do Supabase..."
echo ""

# Verificar se .env existe
if [ ! -f "backend/.env" ]; then
    echo "❌ Erro: arquivo backend/.env não encontrado!"
    echo ""
    echo "Crie o arquivo backend/.env com suas credenciais do Supabase:"
    echo ""
    echo "DATABASE_URL=\"postgresql://...\""
    echo "SUPABASE_URL=\"https://...\""
    echo "SUPABASE_KEY=\"...\""
    echo "SUPABASE_STORAGE_BUCKET=\"products\""
    echo "JWT_SECRET=\"seu-secret-aqui\""
    echo "JWT_EXPIRES_IN=\"7d\""
    echo "PORT=4000"
    echo "NODE_ENV=\"development\""
    echo ""
    exit 1
fi

echo "✅ Arquivo .env encontrado"
echo ""

# Navegar para backend
cd backend

echo "📦 Instalando dependências..."
npm install
echo ""

echo "🔧 Gerando Prisma Client..."
npx prisma generate
echo ""

echo "🗄️  Criando tabelas no banco de dados..."
npx prisma migrate dev --name init
echo ""

echo "🌱 Populando banco com dados iniciais..."
npm run seed
echo ""

echo "✅ Setup do banco de dados concluído!"
echo ""
echo "📝 Próximos passos:"
echo ""
echo "1. Configure o Storage no Supabase (via web):"
echo "   - Vá em Storage → Create bucket 'products'"
echo "   - Marque como PUBLIC"
echo "   - Crie as políticas RLS (veja SUPABASE_AUTO_SETUP.md)"
echo ""
echo "2. Rode o projeto:"
echo "   cd .."
echo "   npm run dev"
echo ""
echo "3. Acesse:"
echo "   Frontend: http://localhost:5173"
echo "   Backend: http://localhost:4000"
echo "   Swagger: http://localhost:4000/api/docs"
echo ""
echo "4. Login:"
echo "   Email: admin@shop.com"
echo "   Senha: admin123"
echo ""
echo "🎉 Bom desenvolvimento!"

