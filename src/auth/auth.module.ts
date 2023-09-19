import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalStrategy} from "./local.strategy";
import {PassportModule} from "@nestjs/passport";
import {UsersModule} from "../users/users.module";
import {SessionSerializer} from "./session.serializer";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

// @ts-ignore
@Module({
  providers: [AuthService,LocalStrategy, JwtService, JwtStrategy],
  imports:[PassportModule,UsersModule, JwtModule.register({
    secret:'Sample Secret',
    signOptions:{expiresIn:'60s'}
  })],
  exports:[AuthService]

})
export class AuthModule {}
