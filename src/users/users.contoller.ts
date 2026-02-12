import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Get("/:id{/:optional}")
    getUsers(@Param() params: any, @Query() query: any) {
        return {
            data: {
                params,
                query
            },
            message: 'success'
        };
    }

    @Post()
    ceateUsers(@Body() request: any){
        return {
            data: request,
            message: 'success'
        }
    }

}