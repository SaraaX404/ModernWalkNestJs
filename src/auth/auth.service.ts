import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/service/users.service";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private authService:UsersService) {
    }


    async validatePassword(username:string, password:string):Promise<any>{
        console.log(username)
        console.log(password)
        const user = await this.authService.findOne(username)

        if(!user){
            return null
        }

        if(await bcrypt.compare(password,user.password)){
            const {email, password, ...rest} = user
            return rest
        }

        return null






    }
}
