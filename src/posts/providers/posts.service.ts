import { Injectable } from "@nestjs/common";
import {posts} from "../posts.model";
import { UsersService } from "src/users/providers/users.service";
@Injectable()
export class PostsService {
    constructor(
        // Inter module dependency injection (across modules scope Users->Posts)
        private readonly usersService: UsersService
    ) {}
    findAll(userId: string) {
        const user = this.usersService.findOne(Number(userId));
        if (!user) return [];
        return posts.filter((post) => post.userId === user.id).map((post) => ({...post, user: user}));

    }
}