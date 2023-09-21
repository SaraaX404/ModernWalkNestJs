import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/service/users.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'
import {use} from "passport";

// @ts-ignore
@Injectable()
export class AuthService {
    constructor(private authService:UsersService, private JwtService:JwtService) {
    }


    async validatePassword(username:string, password:string):Promise<any>{
        console.log(username)
        console.log(password)
        const user = await this.authService.findOne(username)
        console.log(user)
        if(!user){
            return null
        }

        if(await bcrypt.compare(password,user.password)){
            const {email, password, ...rest} = user
            console.log(rest)
            return rest
        }

        return null






    }

    async login(user:any){
        const payload = {firstName:user.firstName, sub:user.id}
        return {access_token:this.JwtService.sign(payload, {secret:"SECRET"})}
    }
}
