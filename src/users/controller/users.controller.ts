 import {Body, Controller, Get, Param, Patch, Post, Request, UseGuards} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '@prisma/client';
 import {LocalStrategy} from "../../auth/local.strategy";
 import {LocalAuthGuard} from "../../auth/local-auth.guard";

type UserUpdate = {
    firstName?: string;
    lastName?: string;
    email?: string;
  };

@Controller('users')
export class UsersController {
    constructor(private readonly usersService:UsersService){}

    @Get()
    getAll():Promise<User[]>{
        return this.usersService.getAll()
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req){
        return {meg:"Logged in"}
    }

    @Get('id')
    getById(@Param('id') id:number):Promise<User>{
        return this.usersService.getById(id)
    }


    @Post()
    create(@Body() userData:User):Promise<User>{
        return this.usersService.create(userData)
    }

    @Patch('id')
    update(@Body() userData:UserUpdate, @Param('id') id:number){
        return this.usersService.update(userData, id)
    }



}
