import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "./auth.service";
import {Injectable, UnauthorizedException} from "@nestjs/common";


// @ts-ignore
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService) {
        super();
    }



    async validate(username:string, password:string){
        console.log(username)
        const user = await this.authService.validatePassword(username, password)

        if(user){
            console.log(user)
            return user
        }else{
            throw new UnauthorizedException()
        }


    }




}