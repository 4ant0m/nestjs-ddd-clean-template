import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
    /**
     * The first name
     * @example Jack
     */
    @IsString()
    @MinLength(2)
    @MaxLength(50)

    readonly firstName: string;

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    @MinLength(8)
    readonly password: string;
}
