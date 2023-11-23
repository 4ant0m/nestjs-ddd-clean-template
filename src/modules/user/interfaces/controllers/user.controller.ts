import { Controller, Post, Body } from '@nestjs/common';
import { UserCreateService } from '@user/application/services/create-user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UserController {
    constructor(
        private userCreateService: UserCreateService
    ) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return this.userCreateService.execute(createUserDto)
    }

}
