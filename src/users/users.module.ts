import { Module } from "@nestjs/common";
import { UsersController } from "./users.contoller";
import { UsersService } from "./providers/users.service";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}