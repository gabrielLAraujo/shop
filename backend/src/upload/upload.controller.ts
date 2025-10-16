import { Controller, Post, Delete, Body, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { UploadService } from './upload.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('upload')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @ApiOperation({ summary: 'Upload de múltiplos arquivos' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({
    status: 200,
    description: 'Arquivos enviados com sucesso',
    schema: {
      type: 'object',
      properties: {
        urls: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Erro no upload' })
  async uploadFiles(@Body() body: any) {
    // Este endpoint será usado com multipart/form-data
    // Os arquivos serão processados pelo Fastify multipart
    return {
      message: 'Use multipart/form-data para enviar arquivos',
      example: 'curl -X POST -H "Authorization: Bearer <token>" -F "files=@image1.jpg" -F "files=@image2.jpg" http://localhost:4000/api/upload',
    };
  }

  @Delete()
  @ApiOperation({ summary: 'Deletar arquivo do storage' })
  @ApiResponse({ status: 200, description: 'Arquivo deletado com sucesso' })
  @ApiResponse({ status: 400, description: 'Erro ao deletar arquivo' })
  async deleteFile(@Body() body: { url: string }) {
    await this.uploadService.deleteFile(body.url);
    return { message: 'Arquivo deletado com sucesso' };
  }
}


