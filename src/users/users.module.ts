import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { PrismaService } from 'src/prisma.service';
import {AuthModule} from "../auth/auth.module";
import {AuthService} from "../auth/auth.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  providers: [UsersService, PrismaService,AuthService,JwtService],
  controllers: [UsersController],
  exports:[UsersService]
})
export class UsersModule {}
