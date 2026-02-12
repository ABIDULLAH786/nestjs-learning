import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Get()
    getUsers() {
        return [];
    }

    @Post()
    ceateUsers(){
        return "THis is post requtes"
    }

}