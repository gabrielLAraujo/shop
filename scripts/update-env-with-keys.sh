#!/bin/bash

# Script para atualizar backend/.env com as chaves do Supabase

cat > backend/.env << 'EOF'
# Database - Connection pooling (usado pelo Prisma)
DATABASE_URL="postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection (usado para migrations)
DIRECT_URL="postgresql://postgres.wgumjdggliayfarlejyd:K9!fTsHGehV_ZvQ@aws-1-us-east-1.pooler.supabase.com:5432/postgres"

# Supabase
SUPABASE_URL="https://wgumjdggliayfarlejyd.supabase.co"
SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndndW1qZGdnbGlheWZhcmxlanlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODkxMTIsImV4cCI6MjA3NjE2NTExMn0.6eL_3ixrQMD8WqiuNe9h-rOAwjbTXNMF8L6v_W9lYrk"
SUPABASE_STORAGE_BUCKET="products"

# JWT
JWT_SECRET="shop-mvp-super-secret-key-change-in-production"
JWT_EXPIRES_IN="7d"

# Server
PORT=4000
NODE_ENV="development"
EOF

echo "✅ Arquivo backend/.env atualizado com SUPABASE_KEY!"

