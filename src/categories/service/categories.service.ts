import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Category, Prisma } from '@prisma/client';
@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async getAllCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }
  async getCategories(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({ where: { id: Number(id) } });
  }
  async createCategories(data: Category): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }
}