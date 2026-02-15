import { Controller, Get, Param } from "@nestjs/common";
import { PostsService } from "./providers/posts.service";


@Controller('posts')
export class PostsController {
    constructor(
        // Intra module dependency injection (within the same module scope)
        private readonly postsService: PostsService
    ) { }

    @Get('/:userId')
    public getPosts(@Param('userId') userId: string) {
        const posts = this.postsService.findAll(userId)
        return {
            posts: posts,
            count: posts.length,
        }
    }
}