import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class GetUserParamsDto {
    @IsOptional()
    @IsInt()
    @Type(() => Number) // explicitly tells nest to convert to number, as by default the params are strings
    id: number
}