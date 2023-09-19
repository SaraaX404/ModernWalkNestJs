import { Module } from '@nestjs/common';
import { ProductService } from './service/products.service';
import { ProductsController } from './controller/products.controller';
import { PrismaService } from 'src/prisma.service';
import {JwtStrategy} from "../auth/jwt.strategy";

@Module({
  providers: [ProductService, PrismaService],
  controllers: [ProductsController]
})
export class ProductsModule {}
