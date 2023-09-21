import { Module } from '@nestjs/common';
import { ProductService } from './service/products.service';
import { ProductsController } from './controller/products.controller';
import { PrismaService } from 'src/prisma.service';
import {UsersService} from "../users/service/users.service";


@Module({
  providers: [ProductService, PrismaService, UsersService],
  controllers: [ProductsController]
})
export class ProductsModule {}
