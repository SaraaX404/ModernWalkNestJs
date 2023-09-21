import {Injectable, CanActivate, ExecutionContext, UnauthorizedException} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {Observable} from "rxjs";
import {UsersService} from "../users/service/users.service";
import {UserRole} from "./roles.enum";

// @ts-ignore
@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector:Reflector, private userService:UsersService) {
    }



    canActivate(context: ExecutionContext): boolean  {

        const requireRoles = this.reflector.getAllAndOverride<UserRole[]>('roles', [
            context.getHandler(),
            context.getClass()
        ])

        if(!requireRoles){
            return true
        }

        const {user} = context.switchToHttp().getRequest();

        if(requireRoles.includes(user.role)){
            return true
        }else{
            return false
        }




    }
}