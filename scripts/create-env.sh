#!/bin/bash

# Script para criar arquivo .env do backend com suas credenciais do Supabase

cat > backend/.env << 'EOF'
# Database - Connection pooling (usado pelo Prisma)
DATABASE_URL="postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection (usado para migrations)
DIRECT_URL="postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres"

# Supabase
SUPABASE_URL="https://wgumjdggliayfarlejyd.supabase.co"
SUPABASE_KEY="VOCÊ_PRECISA_PEGAR_A_ANON_KEY_NO_PAINEL_DO_SUPABASE"
SUPABASE_STORAGE_BUCKET="products"

# JWT
JWT_SECRET="shop-mvp-super-secret-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=4000
NODE_ENV="development"
EOF

echo "✅ Arquivo backend/.env criado com sucesso!"
echo ""
echo "⚠️  ATENÇÃO: Você ainda precisa:"
echo ""
echo "1. Pegar a SUPABASE_KEY (anon public) no painel do Supabase:"
echo "   https://supabase.com/dashboard/project/wgumjdggliayfarlejyd/settings/api"
echo ""
echo "2. Abrir backend/.env e substituir:"
echo "   SUPABASE_KEY=\"VOCÊ_PRECISA_PEGAR_A_ANON_KEY_NO_PAINEL_DO_SUPABASE\""
echo ""
echo "   Por:"
echo "   SUPABASE_KEY=\"sua-chave-aqui\""
echo ""
echo "3. Depois execute:"
echo "   ./scripts/setup-supabase.sh"

