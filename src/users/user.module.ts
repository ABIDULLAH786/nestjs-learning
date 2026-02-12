import { Module } from "@nestjs/common";
import { UserController } from "./users.contoller";

@Module({
    controllers: [UserController],
    providers: [],
    exports: []
})
export class UserModule {}