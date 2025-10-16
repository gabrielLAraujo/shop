import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsUUID,
  Min,
  MaxLength,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Notebook Dell Inspiron' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  name: string;

  @ApiProperty({ example: 'Notebook com Intel Core i5, 8GB RAM, 256GB SSD', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(1000)
  description?: string;

  @ApiProperty({ example: 3500.00 })
  @IsNumber()
  @Min(0.01)
  price: number;

  @ApiProperty({ example: 15 })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({ example: [], type: [String], required: false })
  @IsArray()
  @IsOptional()
  images?: string[];

  @ApiProperty({ example: true, required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ example: 'uuid-da-categoria' })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;
}


