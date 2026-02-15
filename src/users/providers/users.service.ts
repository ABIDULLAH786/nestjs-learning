import { Injectable } from "@nestjs/common";
import { first } from "rxjs";
import { users } from "../users.model";
import { GetUserParamsDto } from "../dtos/get-user-params.dto";

@Injectable()
export class UsersService {

    findAll(limit: number, page: number) {
        return users.slice((page - 1) * limit, page * limit);
    }

    findOne(id: number) {
        return users.find((user) => user.id === id);
    }

}