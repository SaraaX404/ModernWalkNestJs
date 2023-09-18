import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '@prisma/client';

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
