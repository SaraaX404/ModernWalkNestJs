import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalStrategy} from "./local.strategy";
import {PassportModule} from "@nestjs/passport";
import {UsersModule} from "../users/users.module";
import {SessionSerializer} from "./session.serializer";

// @ts-ignore
@Module({
  providers: [AuthService,LocalStrategy, SessionSerializer],
  imports:[PassportModule.register({session:true}),UsersModule]
})
export class AuthModule {}
