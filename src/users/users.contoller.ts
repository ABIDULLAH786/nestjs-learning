import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamsDto } from "./dtos/get-user-params.dto";
import { UsersService } from "./providers/users.service";

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @Get("")
    getUsers(
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        const data = this.userService.findAll(limit, page)
        return {
            data: data,
            total: data.length,
            page: page,
            limit: limit,
        }
    }

    @Get("/:id")
    getUser(
        @Param() getUserParamsDto: GetUserParamsDto,
    ) {
        return this.userService.findOne(getUserParamsDto.id);
    }

    @Post()
    ceateUsers(@Body() createUserDto: CreateUserDto) {
        return {
            data: createUserDto,
            message: 'success'
        }
    }


    @Patch("/:id")
    updateUsers(@Param("id", ParseIntPipe) id: number, @Body(new ValidationPipe()) body: any) {
        return {
            data: {
                id,
                body
            },
            message: 'success'
        };
    }

}