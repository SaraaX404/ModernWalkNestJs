import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import {RolesGuard} from "./auth/roles.guard";
import {APP_GUARD} from "@nestjs/core";
import {LocalAuthGuard} from "./auth/local-auth.guard";

@Module({
  imports: [ProductsModule, CategoriesModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
