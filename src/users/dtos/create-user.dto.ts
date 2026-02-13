import { IsEmail, isEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    firstName: string;
    
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(96)
    lastName: string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'password too weak' })
    password: string;
}