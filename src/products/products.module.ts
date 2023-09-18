import { Module } from '@nestjs/common';
import { ProductService } from './service/products.service';
import { ProductsController } from './controller/products.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ProductService, PrismaService],
  controllers: [ProductsController]
})
export class ProductsModule {}
