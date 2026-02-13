import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { GetUserParamsDto } from "./dtos/get-user-params.dto";

@Controller('users')
export class UserController {

    @Get("/:id{/:optional}")
    getUsers(
        @Param() getUserParamsDto: GetUserParamsDto,
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return {
            data: {
                params: getUserParamsDto,
                query: {
                    limit,
                    page
                }
            },
            message: 'success'
        };
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