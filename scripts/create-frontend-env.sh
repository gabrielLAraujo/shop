#!/bin/bash

# Script para criar arquivo .env do frontend

cat > frontend/.env << 'EOF'
VITE_API_URL=http://localhost:4000/api
EOF

echo "✅ Arquivo frontend/.env criado com sucesso!"

