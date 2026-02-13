import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Get("/:id{/:optional}")
    getUsers(
        @Param("id", ParseIntPipe) id: any,
        @Query("limit", new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query("page", new DefaultValuePipe(1), ParseIntPipe) page: number
    ) {
        return {
            data: {
                id,
                query: {
                    limit,
                    page
                }
            },
            message: 'success'
        };
    }

    @Post()
    ceateUsers(@Body() request: any) {
        return {
            data: request,
            message: 'success'
        }
    }


    @Patch("/:id")
    updateUsers(@Param("id", ParseIntPipe) id: number, @Body() body: any) {
        return {
            data: {
                id,
                body
            },
            message: 'success'
        };
    }

}