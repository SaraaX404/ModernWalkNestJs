import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      if (error) {
        // Handle known Prisma client request error (e.g., connection error)
        console.error('Prisma client error:', error.message);
      } else {
        // Handle other errors
        console.error('Error connecting to the database:', error);
      }
    }
  }
}