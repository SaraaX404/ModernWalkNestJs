import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Product, Prisma } from '@prisma/client';
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async getAllProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  async getProducts(id: number): Promise<Product | null> {
    return this.prisma.product.findUnique({ where: { id: Number(id) } });
  }
  async createProducts(data: Product): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }
}