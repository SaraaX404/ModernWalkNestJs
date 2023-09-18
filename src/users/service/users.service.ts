import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

type UserUpdate = {
    firstName?: string;
    lastName?: string;
    email?: string;
  };

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    async getAll(){
        return this.prisma.user.findMany()
    }

    async getById(id:number){
        return this.prisma.user.findUnique({ where: { id: Number(id) } })
    }

    async create(data:User){

        const saltOrRounds = 10;
        const password = data.password;
        const hash = await bcrypt.hash(password, saltOrRounds);
        data.password = hash;

        return this.prisma.user.create({data})
    }

    async update(data:UserUpdate, id: number){
        return this.prisma.user.update({
            where:{id: Number(id)},
            data: data
        })
    }



}
