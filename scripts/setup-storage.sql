-- Script SQL para configurar o Storage do Supabase
-- Execute este script no SQL Editor do Supabase (https://app.supabase.com)
-- após criar o bucket "products"

-- Política 1: Permitir leitura pública de todas as imagens
CREATE POLICY "Public read access for products"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'products');

-- Política 2: Permitir upload apenas para usuários autenticados
CREATE POLICY "Authenticated users can upload products images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'products');

-- Política 3: Permitir delete apenas para usuários autenticados
CREATE POLICY "Authenticated users can delete products images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'products');

-- Política 4: Permitir update apenas para usuários autenticados
CREATE POLICY "Authenticated users can update products images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'products')
WITH CHECK (bucket_id = 'products');

-- Verificar políticas criadas
SELECT * FROM storage.policies WHERE bucket_id = 'products';

