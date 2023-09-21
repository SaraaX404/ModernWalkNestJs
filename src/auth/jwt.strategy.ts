import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt,Strategy} from "passport-jwt";
import {UsersService} from "../users/service/users.service";
import {Injectable} from "@nestjs/common";

// @ts-ignore
@Injectable()
export class  JwtStrategy extends PassportStrategy(Strategy){
    constructor(private usersService:UsersService) {
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:'SECRET',
            ignoreExpiration:false
        });
    }

    async validate(payload:any){
        console.log(payload)
        const user = await this.usersService.getById(payload.sub)

        return user
    }
}