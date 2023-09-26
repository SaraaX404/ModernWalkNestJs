import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";


// @ts-ignore
@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){
    async canActivate(context:ExecutionContext){
        const result = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest()

        await super.logIn(request)
        return result
    }
}