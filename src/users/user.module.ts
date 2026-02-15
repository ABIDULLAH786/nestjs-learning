import { Module } from "@nestjs/common";
import { UserController } from "./users.contoller";
import { UserService } from "./providers/user.service";

@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: []
})
export class UserModule {}