import { Module } from '@nestjs/common';
import { CategoryService } from './service/categories.service';
import { CategoryController } from './controller/categories.controller';
import { PrismaService } from 'src/prisma.service';


@Module({
  providers: [CategoryService, PrismaService],
  controllers: [CategoryController]
})
export class CategoriesModule {}
