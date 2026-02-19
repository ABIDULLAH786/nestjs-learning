import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { users } from "../users.model";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";
import { AuthService } from "src/auth/provider/auth.service";

@Injectable()
export class UsersService {

    constructor(
        // circular module dependency injection (across modules scope Auth->Users and same in [authserivce] Users->Auth)

        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) { }
    findAll(limit: number, page: number) {
        const isAuthenticated = this.authService.isAuthenticated();
        console.log({isAuthenticated});
        return users.slice((page - 1) * limit, page * limit);
    }

    findOne(id: number) {
        return users.find((user) => user.id === id);
    }

    findOneByUsername(username: string) {
        return users.find((user) => user.username === username);
    }

}