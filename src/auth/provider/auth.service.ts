import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        // circular module dependency injection (across modules scope Users->Auth and same in [usersserivce] Auth->Users)
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService
    ) {}

    public login(username: string, password: string){
        const user = this.usersService.findOneByUsername(username);
    
        return "AUTH_TOKEN";
    }

    public isAuthenticated() {
        return true
    }
}
