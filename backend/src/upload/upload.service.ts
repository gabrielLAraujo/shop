import { Injectable, BadRequestException } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
  private supabase: SupabaseClient;
  private bucketName: string;

  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    this.bucketName = process.env.SUPABASE_STORAGE_BUCKET || 'products';

    if (!supabaseUrl || !supabaseKey) {
      throw new Error('Supabase credentials are not configured');
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async uploadFiles(files: any[]): Promise<string[]> {
    const uploadPromises = files.map(async (file) => {
      // Validar tipo de arquivo
      if (!file.mimetype?.startsWith('image/')) {
        throw new BadRequestException('Apenas imagens são permitidas');
      }

      // Gerar nome único para o arquivo
      const fileExtension = file.filename.split('.').pop();
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = `${fileName}`;

      // Upload para o Supabase Storage
      const { error } = await this.supabase.storage
        .from(this.bucketName)
        .upload(filePath, file.file, {
          contentType: file.mimetype,
          cacheControl: '3600',
          upsert: false,
        });

      if (error) {
        throw new BadRequestException(`Erro ao fazer upload: ${error.message}`);
      }

      // Obter URL pública do arquivo
      const { data } = this.supabase.storage.from(this.bucketName).getPublicUrl(filePath);

      return data.publicUrl;
    });

    return Promise.all(uploadPromises);
  }

  async deleteFile(url: string): Promise<void> {
    try {
      // Extrair o nome do arquivo da URL
      const fileName = url.split('/').pop();

      if (!fileName) {
        throw new BadRequestException('URL inválida');
      }

      const { error } = await this.supabase.storage.from(this.bucketName).remove([fileName]);

      if (error) {
        throw new BadRequestException(`Erro ao deletar arquivo: ${error.message}`);
      }
    } catch (error) {
      throw new BadRequestException('Erro ao deletar arquivo');
    }
  }
}


