import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class UpdateOrderStatusDto {
  @ApiProperty({ enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'] })
  @IsEnum(OrderStatus)
  @IsNotEmpty()
  status: OrderStatus;
}


