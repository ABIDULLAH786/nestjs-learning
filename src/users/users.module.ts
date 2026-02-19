import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.contoller";
import { UsersService } from "./providers/users.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
    imports: [forwardRef(() => AuthModule)],

})
export class UsersModule { }