import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";


// @ts-ignore
@Injectable()
export class LocalAuthGuard extends AuthGuard('local'){

}