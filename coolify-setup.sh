
echo "🔄 Executando migrations em produção..."
npx prisma migrate deploy

echo "🌱 Populando banco de dados..."
npm run seed

echo "✅ Setup de produção concluído!"
echo ""
echo "Acesse:"
echo "  Frontend: https://seu-dominio.com"
echo "  API: https://api.seu-dominio.com"
echo "  Swagger: https://api.seu-dominio.com/api/docs"
echo ""
echo "Login: admin@shop.com / admin123"

