import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes (opcional, comentar se não quiser limpar)
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@shop.com',
      password: hashedPassword,
      name: 'Administrador',
    },
  });
  console.log('✅ Usuário admin criado:', admin.email);

  // Criar categorias sequencialmente (evita timeout com pooler)
  const cat1 = await prisma.category.create({
    data: {
      name: 'Eletrônicos',
      slug: 'eletronicos',
      description: 'Produtos eletrônicos e tecnologia',
    },
  });

  const cat2 = await prisma.category.create({
    data: {
      name: 'Roupas',
      slug: 'roupas',
      description: 'Vestuário e acessórios',
    },
  });

  const cat3 = await prisma.category.create({
    data: {
      name: 'Livros',
      slug: 'livros',
      description: 'Livros e publicações',
    },
  });

  const categories = [cat1, cat2, cat3];
  console.log('✅ Categorias criadas:', categories.length);

  // Criar produtos de exemplo sequencialmente
  const prod1 = await prisma.product.create({
    data: {
      name: 'Notebook Dell Inspiron',
      description: 'Notebook com Intel Core i5, 8GB RAM, 256GB SSD',
      price: 3500.00,
      stock: 15,
      images: [],
      isActive: true,
      categoryId: categories[0].id,
    },
  });

  const prod2 = await prisma.product.create({
    data: {
      name: 'Mouse Logitech MX Master',
      description: 'Mouse ergonômico sem fio',
      price: 450.00,
      stock: 30,
      images: [],
      isActive: true,
      categoryId: categories[0].id,
    },
  });

  const prod3 = await prisma.product.create({
    data: {
      name: 'Camiseta Básica',
      description: 'Camiseta 100% algodão',
      price: 49.90,
      stock: 100,
      images: [],
      isActive: true,
      categoryId: categories[1].id,
    },
  });

  const prod4 = await prisma.product.create({
    data: {
      name: 'Calça Jeans',
      description: 'Calça jeans masculina',
      price: 129.90,
      stock: 50,
      images: [],
      isActive: true,
      categoryId: categories[1].id,
    },
  });

  const prod5 = await prisma.product.create({
    data: {
      name: 'Clean Code',
      description: 'Livro sobre código limpo por Robert C. Martin',
      price: 89.90,
      stock: 25,
      images: [],
      isActive: true,
      categoryId: categories[2].id,
    },
  });

  const products = [prod1, prod2, prod3, prod4, prod5];
  console.log('✅ Produtos criados:', products.length);

  // Criar um pedido de exemplo
  const order = await prisma.order.create({
    data: {
      customerName: 'João Silva',
      customerEmail: 'joao@example.com',
      total: 3549.90,
      status: 'PENDING',
      items: {
        create: [
          {
            productId: products[0].id,
            quantity: 1,
            price: products[0].price,
          },
          {
            productId: products[1].id,
            quantity: 1,
            price: products[1].price,
          },
        ],
      },
    },
  });
  console.log('✅ Pedido de exemplo criado:', order.id);

  console.log('\n🎉 Seed concluído com sucesso!');
  console.log('\n📝 Credenciais de acesso:');
  console.log('   Email: admin@shop.com');
  console.log('   Senha: admin123');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


